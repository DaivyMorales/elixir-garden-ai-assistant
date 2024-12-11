import { useGlobalData } from "@/store/GlobalDataSlice";
import { DonutChart, Legend } from "@tremor/react";
import { ReactNode } from "react";
import { Bars } from "./Bars";
import { BarChartMixed } from "./BarChartMixed";

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export function Charts({ children }: { children: ReactNode }) {
  const { response } = useGlobalData();
  return (
    <div className="w-full rounded-xl p-5 shadow-sm">
      <div className="flex flex-col items-start justify-center gap-6">
        <div className="z-10">
          <h2 className="text-neutral-400">
            El perfume para ti es:{" "}
            <span className="font-bold text-white">&quot;{response[0]?.value}&quot;!</span>
          </h2>
          <p className="text-xs font-medium text-neutral-400">
            Estos son los siguientes perfumes que mas favorecen a el cliente:
          </p>
        </div>
        <div className="z-10 flex min-w-full max-w-[600px] flex-col items-start justify-start gap-2 rounded-lg bg-white/5 p-4 text-[13px] font-medium backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white">Porcentajes</h3>
          <BarChartMixed />
        </div>
        {children}
      </div>
    </div>
  );
}
