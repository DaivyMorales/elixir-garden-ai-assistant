import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { useGlobalData } from "@/store/GlobalDataSlice";

interface ResponseItem {
  value: string;
  porcentaje: number;
}

interface ChartDataItem {
  browser: string;
  visitors: number;
  fill: string;
}

interface ChartConfigItem {
  label: string;
  color: string;
}

export function BarChartMixed() {
  const { response } = useGlobalData();

  const generateGreenScale = (index: number, total: number): string => {
    const baseGreen = 134;
    const brightness = 50 - (index * 50) / total;
    return `hsl(${baseGreen}, 70%, ${brightness}%)`;
  };

  const chartData = response.map((item, index) => {
    const firstWord = item.value?.split(" ")[0]?.toLowerCase() || "unknown";
    return {
      browser: firstWord,
      visitors: item.porcentaje,
      fill: `var(--color-${firstWord})`,
    };
  });

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    ...response.reduce<Record<string, { label: string; color: string }>>(
      (config, item, index) => {
        const firstWord = item.value?.split(" ")[0]?.toLowerCase() || "unknown";
        const totalItems = response.length;
        config[firstWord] = {
          label: item.value || "Unknown",
          color: generateGreenScale(index, totalItems),
        };
        return config;
      },
      {},
    ),
  };

  console.log(chartData);
  console.log(chartConfig);

  console.log(chartData);
  console.log(chartConfig);
  return (
    <div className="w-full px-3">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="visitors" type="number" hide />

            <Bar dataKey="visitors" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
    </div>
  );
}
