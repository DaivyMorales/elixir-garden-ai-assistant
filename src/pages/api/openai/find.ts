import { DataProps } from "@/pages/find";
import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name } = req.body;

  const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
    const timeout = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("Request timed out")), ms);
    });
    return Promise.race([promise, timeout]);
  };

  const retryOn504 = async <T>(
    fn: () => Promise<T>,
    retries: number,
  ): Promise<T> => {
    for (let attempt = 0; attempt < retries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        if (
          error &&
          typeof error === "object" &&
          "response" in error &&
          typeof error.response === "object" &&
          error.response &&
          "status" in error.response
        ) {
          console.warn(`Error 504, reintentando... Intento ${attempt + 1}`);
          continue;
        }
        throw error;
      }
    }
    throw new Error("Error 504 después de varios intentos");
  };

  const newPrompt = `Eres un asistente experto en perfumes. Mi cliente esta buscando el siguiente perfume: ${name}, pero no contamos con este en nuestro stock, necesito que me des los perfumes que mas se parezcan en olor a los siguientes perfumes que tenemos en stock:  [
                { name: "Amber Oud Gold", id: "1U", genre: "UNISEX" },
                { name: "Cloud", id: "1M", genre: "MUJER" },
                { name: "Fantasy", id: "2M", genre: "MUJER" },
                { name: "Burburry", id: "3M", genre: "MUJER" },
                { name: "Omnia Coral", id: "4M", genre: "MUJER" },
                { name: "King", id: "1H", genre: "HOMBRE" },
                { name: "Ck One", id: "2U", genre: "UNISEX" },
                { name: "Carolina Herrera", id: "5M", genre: "MUJER" },
                { name: "212 Vip Rose", id: "6M", genre: "MUJER" },
                { name: "212 Vip", id: "2H", genre: "HOMBRE" },
                { name: "9 Pm", id: "3H", genre: "HOMBRE" },
                { name: "Good Girl", id: "7M", genre: "MUJER" },
                { name: "Chance", id: "8M", genre: "MUJER" },
                { name: "212 Vip Black", id: "4H", genre: "HOMBRE" },
                { name: "Bad Boy", id: "5H", genre: "HOMBRE" },
                { name: "Sauvage", id: "6H", genre: "HOMBRE" },
                { name: "Aventus", id: "8H", genre: "HOMBRE" },
                { name: "Zero Plus", id: "9H", genre: "HOMBRE" },
                { name: "Adrenaline Night", id: "10H", genre: "HOMBRE" },
                { name: "Acqua Di Gio", id: "11H", genre: "HOMBRE" },
                { name: "Issey Miyake", id: "12H", genre: "HOMBRE" },
                { name: "Meow", id: "11M", genre: "MUJER" },
                { name: "Bff Kim Kardashian", id: "12M", genre: "MUJER" },
                { name: "Lacoste L.12.12 Red", id: "13H", genre: "HOMBRE" },
                { name: "Lacoste L.12.12 White Men", id: "14H", genre: "HOMBRE" },
                { name: "La Vie Est Belle", id: "13M", genre: "MUJER" },
                { name: "Yara", id: "14M", genre: "MUJER" },
                { name: "Starwalker", id: "15H", genre: "HOMBRE" },
                { name: "Nautica", id: "16H", genre: "HOMBRE" },
                { name: "Invictus", id: "17H", genre: "HOMBRE" },
                { name: "Olympea", id: "15M", genre: "MUJER" },
                { name: "Paris Hilton", id: "16M", genre: "MUJER" },
                { name: "1 Million Men", id: "18H", genre: "HOMBRE" },
                { name: "Tommy Girl", id: "19M", genre: "MUJER" },
                { name: "Eros", id: "20M", genre: "MUJER" },
                { name: "Tommy", id: "20H", genre: "HOMBRE" },
                { name: "Coconut Passion", id: "22M", genre: "MUJER" },
                { name: "Eros", id: "21H", genre: "HOMBRE" },
                { name: "Amber Rouge", id: "3U", genre: "UNISEX" },
                { name: "Club De Nuit Intense", id: "22H", genre: "HOMBRE" },
                { name: "Khamra", id: "4U", genre: "UNISEX" },
                { name: "Cloud Pink", id: "23M", genre: "MUJER" },
                { name: "Asad", id: "23H", genre: "HOMBRE" },
                { name: "Lataffa Sublime", id: "5U", genre: "UNISEX" },
                { name: "Scandal", id: "24H", genre: "HOMBRE" },
                { name: "360°", id: "24M", genre: "MUJER" },
                { name: "Santal 33", id: "6U", genre: "UNISEX" },
                { name: "Light Blue", id: "25M", genre: "MUJER" },
              ]; 
  **Formato de respuesta JSON**:
  [
    {
      "id": "Id del perfume en stock", 
      "name": "Nombre del perfume en stock",
      "reason": "Por qué este perfume en stock es lo mas parecido a ${name} que el cliente busca"
    }
  ]
  Solo devuelve el JSON, no incluyas texto adicional. no me envies `;

  try {
    const completion = await retryOn504(async () => {
      return await withTimeout(
        openai.chat.completions.create({
          model: "gpt-4o",
          messages: [{ role: "system", content: newPrompt }],
          temperature: 1,
          max_tokens: 500,
        }),
        10000,
      );
    }, 3);

    const result = completion.choices[0]?.message?.content;
    console.log("result", result);

    if (typeof result === "string") {
      try {
        const cleanedResult = result.replace(/```json|```/g, "").trim();

        const recommendations: DataProps[] = JSON.parse(cleanedResult);

        res.status(200).json(recommendations);
      } catch (error) {
        console.error("Error parsing JSON:", result);
        res.status(500).json({ error: "Invalid response format from OpenAI" });
      }
    } else {
      res.status(500).json({ error: "Invalid OpenAI response" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process OpenAI request" });
  }
}
