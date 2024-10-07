import React from "react";
import { BarChart } from "@tremor/react";
import { useGlobalData } from "@/store/GlobalDataSlice";

export const BarChartOnValueChangeExample = ({
  className = "h-72 w-[410px]",
  colors = ["green"],
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
        autoMinValue={true}
        valueFormatter={dataFormatter}
      />
    </>
  );
};
