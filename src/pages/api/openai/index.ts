import OpenAI from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

const openai = new OpenAI();

interface RequestBody {
  name: string;
  age: number;
  gender: string;
  occasion: string;
  duration: string;
  personality: string;
  intensity: string;
  notes: string;
  aditional_information: string;
  horoscope: string;
}

const perfumesInStock = [
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

export default async function Gpt(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body as RequestBody;

  const {
    name,
    age,
    gender,
    occasion,
    duration,
    personality,
    intensity,
    notes,
    aditional_information,
    horoscope
  } = body;

  try {
    const completion = await retryOn504(async () => {
      return await withTimeout(
        openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content: `Eres un experto en perfumes, el usuario(a) ${name}, ${age} años de edad, de genero ${gender}, de Bogotá Colombia, esta en busca de un perfume, estos son los siguientes perfumes que tenemos en stock:  [
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
              ]; , tu tarea sera encontrarle el perfume adecuado. Lo busca ${occasion}, que su duracion sea ${duration} en olor, su personalidad es ${personality}, busca una intencidad ${intensity} en el perfume, y quiere las siguientes notas ${notes}, quiere un perfume que haga march con su horoscopo: ${horoscope}, y nos dijo ademas de todo eso: ${aditional_information}. Quiero que me des la respuesta en JSON en este formato: [{value: "nombre del perfume", description: "porque decidiste aconsejarle este perfume", id: "id del perfume " porcentaje: "el porcentaje que matchea con la peticion del cliente (aqui solo numero enteros, si mandas 5? dividelos en 100%, y dale a cada uno su porcentaje, que la suma de todos de 100%, por ejemplo porcentaje: 60)" }] no me mandes procentajes iguales, digamos dos perfumes que tengan 50 y 50 de procentaje NO. Mandame en orden el json, de el mas importante a el menos importante, minimo dame 3 perfumes para escojer, maximo 5. SOLO DAME EL JSON, NO QUIERO MAS MENSAJES ADICIONALES PORFAVOR, solo mandame el [{...}] nada de ''json [{...}]''  POR FAVOR NO ME MANDES ninguna comilla '''json [{...}]''', no mandes ni ' " ni backtips, ni la palabra json por favor. as propiedades en un objeto JSON deben estar entre comillas dobles (")`,
            },
          ],
          model: "gpt-4o",
          temperature: 1,
          max_tokens: 500,
        }),
        10000,
      );
    }, 3);

    const result = completion.choices[0]?.message?.content;

    console.log(result);

    let perfumes: Array<{
      value: string;
      description: string;
      porcentaje: number;
    }>;

    try {
      if (typeof result === "string") {
        perfumes = JSON.parse(result) as Array<{
          value: string;
          description: string;
          porcentaje: number;
        }>;
      } else {
        throw new Error("Result is not a valid string");
      }
      res.status(200).json(perfumes);
    } catch (error) {
      console.error("Error al convertir el resultado en JSON:", error);
      res
        .status(500)
        .json({ error: "Error al procesar la respuesta del servidor." });
    }
  } catch (error) {
    console.log(error)
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    res.status(500).json({ error: errorMessage });
  }
}
