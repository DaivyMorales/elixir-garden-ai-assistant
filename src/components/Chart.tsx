import React from "react";
import { AreaChartHero } from "./AreaChartHero";
import { BarChartOnValueChangeExample } from "./BarChart";

function Chart() {
  return (
    <div className=" min-w-[280px] max-w-[450px]  p-10 bg-white p-4 rounded-lg shadow-sm border-[1px]">
      <BarChartOnValueChangeExample />
    </div>
  );
}

export default Chart;
