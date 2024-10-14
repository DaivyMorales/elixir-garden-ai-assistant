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
}

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
  } = body;

  try {
    // if (!prompt) {
    //   res.status(400).json({ message: "You have not provided the prompt!" });
    //   return;
    // }

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `Eres un experto en perfumes, el usuario(a) ${name}, ${age} años de edad, de genero ${gender}, de Bogotá Colombia, esta en busca de un perfume, estos son los siguientes perfumes que tenemos en stock: [
    [
  {"name": "AMBER OUD GOLD", "id": "1U", "genre": "UNISEX"},
  {"name": "CLOUD", "id": "1M", "genre": "MUJER"},
  {"name": "FANTASY", "id": "2M", "genre": "MUJER"},
  {"name": "BURBERRY", "id": "3M", "genre": "MUJER"},
  {"name": "OMNIA CORAL", "id": "4M", "genre": "MUJER"},
  {"name": "KING", "id": "1H", "genre": "HOMBRE"},
  {"name": "CK ONE", "id": "2U", "genre": "UNISEX"},
  {"name": "CAROLINA HERRERA", "id": "5M", "genre": "MUJER"},
  {"name": "212 VIP ROSE", "id": "6M", "genre": "MUJER"},
  {"name": "212 VIP", "id": "2H", "genre": "HOMBRE"},
  {"name": "9 PM", "id": "3H", "genre": "HOMBRE"},
  {"name": "GOOD GIRL", "id": "7M", "genre": "MUJER"},
  {"name": "CHANCE", "id": "8M", "genre": "MUJER"},
  {"name": "212 VIP BLACK", "id": "4H", "genre": "HOMBRE"},
  {"name": "BAD BOY", "id": "5H", "genre": "HOMBRE"},
  {"name": "SAUVAGE", "id": "6H", "genre": "HOMBRE"},
  {"name": "AVENTUS", "id": "8H", "genre": "HOMBRE"},
  {"name": "ZERO PLUS", "id": "9H", "genre": "HOMBRE"},
  {"name": "ADRENALINE NIGHT", "id": "10H", "genre": "HOMBRE"},
  {"name": "ACQUA DI GIO", "id": "11H", "genre": "HOMBRE"},
  {"name": "ISSEY MIYAKE", "id": "12H", "genre": "HOMBRE"},
  {"name": "MEOW", "id": "11M", "genre": "MUJER"},
  {"name": "BFF KIM KARDASHIAN", "id": "12M", "genre": "MUJER"},
  {"name": "LACOSTE L.12.12 RED", "id": "13H", "genre": "HOMBRE"},
  {"name": "LACOSTE L.12.12 WHITE MEN", "id": "14H", "genre": "HOMBRE"},
  {"name": "LA VIE EST BELLE", "id": "13M", "genre": "MUJER"},
  {"name": "YARA", "id": "14M", "genre": "MUJER"},
  {"name": "STARWALKER", "id": "15H", "genre": "HOMBRE"},
  {"name": "NAUTICA", "id": "16H", "genre": "HOMBRE"},
  {"name": "INVICTUS", "id": "17H", "genre": "HOMBRE"},
  {"name": "OLYMPEA", "id": "15M", "genre": "MUJER"},
  {"name": "PARIS HILTON", "id": "16M", "genre": "MUJER"},
  {"name": "1 MILLION MEN", "id": "18H", "genre": "HOMBRE"},
  {"name": "TOMMY GIRL", "id": "19M", "genre": "MUJER"},
  {"name": "EROS", "id": "20M", "genre": "MUJER"},
  {"name": "TOMMY", "id": "20H", "genre": "HOMBRE"},
  {"name": "COCONUT PASSION", "id": "22M", "genre": "MUJER"},
  {"name": "EROS", "id": "21H", "genre": "HOMBRE"},
  {"name": "AMBER ROUGE", "id": "3U", "genre": "UNISEX"},
  {"name": "CLUB DE NUIT INTENSE", "id": "22H", "genre": "HOMBRE"},
  {"name": "KHAMRA", "id": "4U", "genre": "UNISEX"},
  {"name": "CLOUD PINK", "id": "23M", "genre": "MUJER"},
  {"name": "ASAD", "id": "23H", "genre": "HOMBRE"},
  {"name": "LATAFFA SUBLIME", "id": "5U", "genre": "UNISEX"},
  {"name": "SCANDAL", "id": "24H", "genre": "HOMBRE"},
  {"name": "360°", "id": "24M", "genre": "MUJER"},
  {"name": "SANTAL 33", "id": "6U", "genre": "UNISEX"},
  {"name": "LIGHT BLUE", "id": "25M", "genre": "MUJER"},
  {"name": "LE MALE ELIXIR", "id": "25H", "genre": "HOMBRE"}
]
], tu tarea sera encontrarle el perfume adecuado. Lo busca ${occasion}, que su duracion sea ${duration} en olor, su personalidad es ${personality}, busca una intencidad ${intensity} en el perfume, y quiere las siguientes notas ${notes}, y nos dijo ademas de todo eso: ${aditional_information}. Quiero que me des la respuesta en JSON en este formato: [{value: "nombre del perfume", description: "porque decidiste aconsejarle este perfume", id: "id del perfume" porcentaje: "el porcentaje que matchea con la peticion del cliente (aqui solo numero enteros, si mandas 5? dividelos en 100%, y dale a cada uno su porcentaje, que la suma de todos de 100%, por ejemplo porcentaje: 60)" }] no me mandes procentajes iguales, digamos dos perfumes que tengan 50 y 50 de procentaje NO. Mandame en orden el json, de el mas importante a el menos importante, minimo dame 3 perfumes para escojer, maximo 5. SOLO DAME EL JSON, NO QUIERO MAS MENSAJES ADICIONALES PORFAVOR, solo mandame el [{...}] nada de ''json [{...}]''  POR FAVOR NO ME MANDES ninguna comilla '''json [{...}]''', no mandes ni ' " ni backtips, ni la palabra json por favor`,
        },
      ],
      model: "gpt-4o",
      temperature: 1,
      max_tokens: 500,
    });

    const result = completion.choices[0]?.message?.content;

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
    }

    if (!result) {
      throw new Error("Result is undefined or null");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}
