import { useGlobalData } from "@/store/GlobalDataSlice";
import { DonutChart, Legend } from "@tremor/react";

const sales = [
  {
    name: "New York",
    sales: 980,
  },
  {
    name: "London",
    sales: 456,
  },
  {
    name: "Hong Kong",
    sales: 390,
  },
  {
    name: "San Francisco",
    sales: 240,
  },
  {
    name: "Singapore",
    sales: 190,
  },
];

const perfumData = [
  { name: "GOOD GIR", porcentaje: 10 },
  { name: "CHANCE", porcentaje: 30 },
  { name: "212 VIP BLACK", porcentaje: 50 },
  { name: "BAD BOY", porcentaje: 5 },
  { name: "AVENTUS", porcentaje: 5 },
];

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}%`;

export function DonutChartUsageExample() {
  const { response } = useGlobalData();
  return (
    <div className="w-[450px] rounded-xl border-[1px] bg-white p-5 shadow-sm">
      <h3 className="text-[13px] font-semibold text-neutral-600">
        {" "}
        Porcentajes
      </h3>
      <div className="flex flex-col items-center justify-center gap-6">
        <DonutChart
          valueFormatter={valueFormatter}
          data={response}
          category="porcentaje"
          index="value"
          showAnimation
          colors={[
            "green-800",
            "amber-500",
            "green-500",
            "amber-300",
            "green-200",
            "amber-200",
          ]}
          className="w-40 text-2xl font-bold"
        />
        <Legend
          categories={response.map((item) => item.value)}
          colors={[
            "green-800",
            "amber-500",
            "green-500",
            "amber-300",
            "green-200",
            "amber-200",
          ]}
          className="max-w-xs"
        />
      </div>
    </div>
  );
}
