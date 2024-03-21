import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="mt-5 container sm:max-w-screen-sm">
        <div className="bg-[url('/Cristo.png')] bg-cover sm:max-w-screen-sm max-h-screen w-full bg-no-repeat">
          <div className="container grid grid-cols-3">
            <div className="w-full flex flex-row align-middle">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl mt-72">
                hi1
              </h1>
            </div>
            <div></div>
            <div className="font-bold text-2xl md:text-4xl lg:text-5xl">
              hi2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
