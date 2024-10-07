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
    {
        "nombre": "AMBER OUD GOLD",
        "id": "1U",
        "genero": "UNISEX"
    },
    {
        "nombre": "CLOUD",
        "id": "1M",
        "genero": "MUJER"
    },
    {
        "nombre": "FANTASY",
        "id": "2M",
        "genero": "MUJER"
    },
    {
        "nombre": "BURBERRY",
        "id": "3M",
        "genero": "MUJER"
    },
    {
        "nombre": "OMNIA CORAL",
        "id": "4M",
        "genero": "MUJER"
    },
    {
        "nombre": "KING",
        "id": "1H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "CK ONE",
        "id": "2U",
        "genero": "UNISEX"
    },
    {
        "nombre": "CAROLINA HERRERA",
        "id": "5M",
        "genero": "MUJER"
    },
    {
        "nombre": "212 VIP ROSE",
        "genero": "MUJER"
    },
    {
        "nombre": "212 VIP",
        "genero": "HOMBRE"
    },
    {
        "nombre": "9 PM",
        "genero": "HOMBRE"
    },
    {
        "nombre": "GOOD GIRL",
        "genero": "MUJER"
    },
    {
        "nombre": "CHANCE",
        "genero": "MUJER"
    },
    {
        "nombre": "212 VIP BLACK",
        "genero": "HOMBRE"
    },
    {
        "nombre": "BAD BOY",
        "genero": "HOMBRE"
    },
    {
        "nombre": "SAUVAGE",
        "genero": "HOMBRE"
    },
    {
        "nombre": "SILVER MOUNTAIN WATER",
        "genero": "HOMBRE"
    },
    {
        "nombre": "AVENTUS",
        "genero": "HOMBRE"
    },
    {
        "nombre": "ZERO PLUS",
        "genero": "HOMBRE"
    },
    {
        "nombre": "ADRENALINE NIGHT",
        "genero": "HOMBRE"
    },
    {
        "nombre": "ACQUA DI GIO",
        "genero": "HOMBRE"
    },
    {
        "nombre": "ISSEY MIYAKE",
        "genero": "HOMBRE"
    },
    {
        "nombre": "MEOW",
        "genero": "MUJER"
    },
    {
        "nombre": "BFF KIM KARDASHIAN",
        "genero": "MUJER"
    },
    {
        "nombre": "LACOSTE L.12.12 RED",
        "genero": "HOMBRE"
    },
    {
        "nombre": "LACOSTE L.12.12. WHITE MEN",
        "genero": "HOMBRE"
    },
    {
        "nombre": "LA VIE EST BELLE",
        "genero": "MUJER"
    },
    {
        "nombre": "YARA",
        "genero": "MUJER"
    },
    {
        "nombre": "STARWALKER",
        "genero": "HOMBRE"
    },
    {
        "nombre": "NAUTICA",
        "genero": "HOMBRE"
    },
    {
        "nombre": "INVICTUS",
        "genero": "HOMBRE"
    },
    {
        "nombre": "OLYMPEA",
        "genero": "MUJER"
    },
    {
        "nombre": "PARIS HILTON",
        "genero": "MUJER"
    },
    {
        "nombre": "1 MILLION MEN",
        "genero": "HOMBRE"
    },
    {
        "nombre": "1 MILLION LUCKY",
        "genero": "HOMBRE"
    },
    {
        "nombre": "CAN CAN",
        "genero": "MUJER"
    },
    {
        "nombre": "RALPH WOMEN",
        "genero": "MUJER"
    },
    {
        "nombre": "TOMMY GIRL",
        "genero": "MUJER"
    },
    {
        "nombre": "EROS",
        "genero": "MUJER"
    },
    {
        "nombre": "TOMMY",
        "genero": "HOMBRE"
    },
    {
        "nombre": "COCONUT PASSION",
        "genero": "MUJER"
    },
    {
        "nombre": "EROS",
        "genero": "HOMBRE"
    },
    {
        "nombre": "AMBER ROUGE",
        "genero": "UNISEX"
    },
    {
        "nombre": "CLUB DE NUIT INTENSE",
        "genero": "HOMBRE"
    },
    {
        "nombre": "KHAMRA",
        "genero": "UNISEX"
    },
    {
        "nombre": "CLOUD PINK",
        "genero": "MUJER"
    },
    {
        "nombre": "ASAD",
        "genero": "HOMBRE"
    },
    {
        "nombre": "LATAFFA SUBLIME",
        
        "genero": "UNISEX"
    }
], tu tarea sera encontrarle el perfume adecuado. Lo busca ${occasion}, que su duracion sea ${duration} en olor, su personalidad es ${personality}, busca una intencidad ${intensity} en el perfume, y quiere las siguientes notas ${notes}, y nos dijo ademas de todo eso: ${aditional_information}. Quiero que mes la respuesta en JSON en este formato: [{value: "nombre del perfume", description: "porque decidiste aconsejarle este perfume", porcentaje: "el porcentaje que matchea con la peticion del cliente (aqui solo numero enteros, si mandas 5? dividelos en 100%, y dale a cada uno su porcentaje, que la suma de todos de 100%, por ejemplo porcentaje: 60)" }] no me mandes procentajes iguales, digamos dos perfumes que tengan 50 y 50 de procentaje NO. Mandame en orden el json, de el mas importante a el menos importante, minimo dame 3 perfumes para escojer, maximo 5. SOLO DAME EL JSON, NO QUIERO MAS MENSAJES ADICIONALES PORFAVOR, solo mandame el [{...}] nada de ''json [{...}]''  POR FAVOR NO ME MANDES ninguna comilla '''json [{...}]''', no mandes ni ' " ni backtips, ni la palabra json por favor`,
        },
      ],
      model: "gpt-4o",
      temperature: 1,
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
