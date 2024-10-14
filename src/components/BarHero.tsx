import {
  Card,
  CategoryBar,
  DeltaBar,
  MarkerBar,
  ProgressBar,
} from "@tremor/react";

export const BarHero = ({porcentaje}: {porcentaje: number}) => (
  <div className="mx-auto w-full grid grid-cols-1 gap-12 bg-trasparent">
    <div className="flex justify-center">
      <Card className="max-w-sm bg-[#025864] text-white" >
        <CategoryBar
          values={[10, 10, 20, 30]}
          colors={["rose", "orange", "yellow", "emerald"]}
          markerValue={porcentaje}
          showLabels={false}
          showAnimation
          className="bg-[#025864] text-white"
        />
      </Card>
    </div>
  </div>
);
