import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnLeft from "@/components/charts/kibana/GraphOnLeft";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <GraphOnLeft
        src="https://nivo.rocks/"
        title="Correlatiom between roads and burnt areas"
      />
    </>
  );
}

//<div className="w-full h-[400px]">
//<BarchartTest data={getBarData()} />
//</div>
//<div className="w-full h-[400px]">
//  <LineChartTest data={getLineData()} />
//</div>
