"use client";

import React from "react";

import { BarChart } from "@tremor/react";
import { useGlobalData } from "@/store/GlobalDataSlice";

const example = [
  {
    value: "SAUVAGE",
    description:
      "Elegí este perfume porque es conocido por su larga duración y su mezcla de notas cítricas y amaderadas. Además, su intensidad es llamativa, lo que lo hace perfecto para eventos especiales y citas donde quieras dejar una impresión duradera.",
    porcentaje: 50,
  },
  {
    value: "1 MILLION MEN",
    description:
      "Este perfume ofrece una mezcla atractiva de notas cítricas y amaderadas. Su reputación de ser seductor y su alta intensidad lo hacen ideal para destacar en cualquier ocasión memorable.",
    porcentaje: 30,
  },
  {
    value: "ACQUA DI GIO",
    description:
      "Recomendé este perfume por sus frescas y amaderadas notas que evocan un aire sofisticado y duradero. Es perfecto para alguien con una personalidad seductora que busca ser recordado en eventos especiales.",
    porcentaje: 10,
  },
  {
    value: "INVICTUS",
    description:
      "Consideré este perfume porque mezcla de forma excepcional notas cítricas y amaderadas, ofreciendo una presencia fuerte y llamativa que será recordada en cualquier reunión o cita.",
    porcentaje: 5,
  },
  {
    value: "CLUB DE NUIT INTENSE",
    description:
      "Este perfume tiene una combinación intensa de notas amaderadas y cítricas, perfecta para quienes desean un aroma distintivo que perdure y sea recordado en eventos especiales.",
    porcentaje: 5,
  },
];



export const BarChartOnValueChangeExample = ({ className = "h-72 w-[390px]", colors = ["green"] }) => {
  const [value, setValue] = React.useState<any>(null);

  const dataFormatter = (number: number) => `${number}%`;

  const { response } = useGlobalData();

  return (
    <>
      <BarChart
        colors={colors}
        className={className}
        data={response}
        index="value"
        categories={["porcentaje"]}
        yAxisWidth={45}
        onValueChange={(v) => setValue(v)}
        showAnimation={true}
        autoMinValue={true}
        valueFormatter={dataFormatter}
      />
    </>
  );
};
