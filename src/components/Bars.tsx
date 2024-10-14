import React from "react";
import { BarChart } from "@tremor/react";
import { useGlobalData } from "@/store/GlobalDataSlice";

export const Bars = ({
  className = "h-72  min-w-[240px] max-w-[450px] ",
  colors = ["teal-700"],
}) => {
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
        showAnimation={true}
        valueFormatter={dataFormatter}
      />
    </>
  );
};
