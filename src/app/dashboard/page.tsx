import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

export default function Page() {
  const srcs = [
    "https://de.wikipedia.org/wiki/rat",
    "https://de.wikipedia.org/wiki/mouse",
    "https://de.wikipedia.org/wiki/bat",
    "https://de.wikipedia.org/wiki/fox",
    "https://de.wikipedia.org/wiki/squirrel",
    "https://de.wikipedia.org/wiki/horse",
    "https://de.wikipedia.org/wiki/cow",
    "https://de.wikipedia.org/wiki/lizard",
  ];
  const firstRow = (
    <>
      <div className="lg:grid lg:grid-cols-12 min-h-80">
        <div className="p-2 col-span-7 bg-secondary">
          <KibanaIframe src={srcs[0]} />
        </div>
        <div className="p-2 col-span-5 bg-secondary">
          <KibanaIframe src={srcs[1]} />
        </div>
      </div>
    </>
  );
  const secondRow = (
    <>
      <div className="lg:grid lg:grid-cols-12 min-h-80">
        <div className="p-2 col-span-6 bg-secondary">
          <KibanaIframe src={srcs[2]} />
        </div>
        <div className="col-span-6 lg:grid lg:grid-cols-12">
          <div className="p-2 col-span-6 bg-secondary">
            <KibanaIframe src={srcs[3]} />
          </div>
          <div className="p-2 col-span-6 bg-secondary">
            <KibanaIframe src={srcs[4]} />
          </div>
        </div>
      </div>
    </>
  );
  const thirdRow = (
    <>
      <div className="lg:grid lg:grid-cols-12 min-h-80">
        <div className="col-span-6 lg:grid lg:grid-cols-12">
          <div className="p-2 col-span-6 bg-secondary">
            <KibanaIframe src={srcs[5]} />
          </div>
          <div className="p-2 col-span-6 bg-secondary">
            <KibanaIframe src={srcs[6]} />
          </div>
        </div>
        <div className="p-2 col-span-6 bg-secondary">
          <KibanaIframe src={srcs[7]} />
        </div>
      </div>
    </>
  );
  return (
    <>
      <div className="mt-5 container flex flex-col gap-2">
        {firstRow}
        {secondRow}
        {thirdRow}
      </div>
    </>
  );
}
