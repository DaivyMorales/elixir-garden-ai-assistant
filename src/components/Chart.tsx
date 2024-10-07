import React from "react";
import { AreaChartHero } from "./AreaChartHero";
import { BarChartOnValueChangeExample } from "./BarChart";

function Chart() {
  return (
    <div className="w-full p-10 bg-white p-4 rounded-lg shadow-sm border-[1px]">
      <BarChartOnValueChangeExample />
    </div>
  );
}

export default Chart;
