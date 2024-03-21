import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="mt-5 container">
        <div className="bg-[url('/Cristo.png')] bg-cover w-full h-[800px] bg-no-repeat">
          <div className="container grid grid-cols-3">
            <div className="w-full flex flex-row align-middle">
              <h1>hi1</h1>
            </div>
            <div></div>
            <div>hi2</div>
          </div>
        </div>
      </div>
    </>
  );
}
