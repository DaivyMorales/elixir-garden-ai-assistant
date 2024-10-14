import { useGlobalData } from "@/store/GlobalDataSlice";
import { DonutChart, Legend } from "@tremor/react";
import { ReactNode } from "react";
import { Bars } from "./Bars";

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export function Charts({ children }: { children: ReactNode }) {
  const { response } = useGlobalData();
  return (
    <div className="w-[280px] rounded-xl border-[1px] bg-white p-5 shadow-sm sm:w-[380px] md:w-[400px]">
      <h3 className="text-[13px] font-semibold text-neutral-600">
        Porcentajes
      </h3>
      <div className="flex flex-col items-center justify-center gap-6">
        {/* <DonutChart
          valueFormatter={valueFormatter}
          data={response}
          category="porcentaje"
          index="value"
          label="100%"
          showAnimation
          colors={[
            "yellow-400",
            "gray-400",
            "yellow-700",
            "blue-400",
            "blue-300",
          ]}
          className="w-40 text-2xl font-bold"
        />
        <Legend
          categories={response.map((item) => item.value)}
          colors={[
            "yellow-400",
            "gray-400",
            "yellow-700",
            "blue-400",
            "blue-300",
          ]}
          className="max-w-xs"
        /> */}

        <Bars />
        {children}
      </div>
    </div>
  );
}
