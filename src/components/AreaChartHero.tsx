import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Enero 22",
    Agua: 2,
  },
  {
    date: "Feb 22",
    Agua: 2,
  },
  {
    date: "Mar 22",
    Agua: 2,
  },
  {
    date: "Apr 22",
    Agua: 2,
  },
  {
    date: "May 22",
    Agua: 2,
  },
  {
    date: "Jun 22",
    Agua: 2,
  },
  {
    date: "Jul 22",
    Agua: 3,
  },
  {
    date: "Aug 22",
    Agua: 3,
  },
  {
    date: "Sep 22",
    Agua: 2,
  },
  {
    date: "Oct 22",
    Agua: 3,
  },
  {
    date: "Nov 22",
    Agua: 5,
  },
  {
    date: "Dec 22",
    Agua: 2,
  },
];

const dataFormatter = (number: number) =>
  `${number}L`;

export function AreaChartHero() {
  return (
    <AreaChart
      className="h-[200px] "
      data={chartdata}
      index="date"
      categories={["Agua"]}
      colors={["indigo"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
      showAnimation={true}
      autoMinValue={true}
    />
  );
}
