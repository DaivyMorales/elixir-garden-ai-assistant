import OpenAI from "openai";
import { NextApiRequest, NextApiResponse } from "next";

const openai = new OpenAI();

export default async function Gpt(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: {
      name,
      age,
      gender,
      city,
      occasion,
      duration,
      personality,
      intensity,
      notes,
      aditional_information,
    },
  } = req;

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
        "id": "6M",
        "genero": "MUJER"
    },
    {
        "nombre": "212 VIP",
        "id": "2H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "9 PM",
        "id": "3H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "GOOD GIRL",
        "id": "7M",
        "genero": "MUJER"
    },
    {
        "nombre": "CHANCE",
        "id": "8M",
        "genero": "MUJER"
    },
    {
        "nombre": "212 VIP BLACK",
        "id": "4H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "BAD BOY",
        "id": "5H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "SAUVAGE",
        "id": "6H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "SILVER MOUNTAIN WATER",
        "id": "7H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "AVENTUS",
        "id": "8H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "ZERO PLUS",
        "id": "9H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "ADRENALINE NIGHT",
        "id": "10H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "ACQUA DI GIO",
        "id": "11H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "ISSEY MIYAKE",
        "id": "12H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "MEOW",
        "id": "11M",
        "genero": "MUJER"
    },
    {
        "nombre": "BFF KIM KARDASHIAN",
        "id": "12M",
        "genero": "MUJER"
    },
    {
        "nombre": "LACOSTE L.12.12 RED",
        "id": "13H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "LACOSTE L.12.12. WHITE MEN",
        "id": "14H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "LA VIE EST BELLE",
        "id": "13M",
        "genero": "MUJER"
    },
    {
        "nombre": "YARA",
        "id": "14M",
        "genero": "MUJER"
    },
    {
        "nombre": "STARWALKER",
        "id": "15H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "NAUTICA",
        "id": "16H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "INVICTUS",
        "id": "17H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "OLYMPEA",
        "id": "15M",
        "genero": "MUJER"
    },
    {
        "nombre": "PARIS HILTON",
        "id": "16M",
        "genero": "MUJER"
    },
    {
        "nombre": "1 MILLION MEN",
        "id": "18H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "1 MILLION LUCKY",
        "id": "19H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "CAN CAN",
        "id": "17M",
        "genero": "MUJER"
    },
    {
        "nombre": "RALPH WOMEN",
        "id": "18M",
        "genero": "MUJER"
    },
    {
        "nombre": "TOMMY GIRL",
        "id": "19M",
        "genero": "MUJER"
    },
    {
        "nombre": "EROS",
        "id": "20M",
        "genero": "MUJER"
    },
    {
        "nombre": "TOMMY",
        "id": "20H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "COCONUT PASSION",
        "id": "22M",
        "genero": "MUJER"
    },
    {
        "nombre": "EROS",
        "id": "21H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "AMBER ROUGE",
        "id": "3U",
        "genero": "UNISEX"
    },
    {
        "nombre": "CLUB DE NUIT INTENSE",
        "id": "22H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "KHAMRA",
        "id": "4U",
        "genero": "UNISEX"
    },
    {
        "nombre": "CLOUD PINK",
        "id": "23M",
        "genero": "MUJER"
    },
    {
        "nombre": "ASAD",
        "id": "23H",
        "genero": "HOMBRE"
    },
    {
        "nombre": "LATAFFA SUBLIME",
        "id": "5U",
        "genero": "UNISEX"
    }
], tu tarea sera encontrarle el perfume adecuado. Lo busca ${occasion}, que su duracion sea ${duration} en olor, su personalidad es ${personality}, busca una intencidad ${intensity} en el perfume, y quiere las siguientes notas ${notes}, y nos dijo ademas de todo eso: ${aditional_information}`,
        },
      ],
      model: "gpt-4",
      temperature: 0,
    });

    const result = completion.choices[0]?.message.content;

    if (!result) {
      throw new Error("Result is undefined or null");
    }

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}
