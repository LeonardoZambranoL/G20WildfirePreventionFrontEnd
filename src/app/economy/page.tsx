import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="mt-5 container">
        <h1>economy</h1>
      </div>
    </>
  );
}

//<div className="w-full h-[400px]">
//<BarchartTest data={getBarData()} />
//</div>
//<div className="w-full h-[400px]">
//  <LineChartTest data={getLineData()} />
//</div>
