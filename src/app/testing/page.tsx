import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSide";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

export default function Page() {
  const srcs = [
    "https://de.wikipedia.org/wiki/Dog",
    "https://de.wikipedia.org/wiki/CAT",
    "https://de.wikipedia.org/wiki/Fish",
  ];
  const buttonDescriptions = ["Dogs", "Cats", "Fishes"];
  const descriptions = [
    "Dogs | Dogs | Dogs | Dogs | Dogs | Dogs | Dogs | Dogs | Dogs | Dogs | Dogs | Dogs | Dogs",
    "Cats | Cats | Cats | Cats | Cats | Cats | Cats | Cats | Cats | Cats",
    "Fish | Fish | Fish | Fish | Fish | Fish | Fish | Fish | Fish | Fish | Fish | Fish | Fish | Fish",
  ];
  return (
    <>
      <GraphOnSide
        srcs={srcs}
        title="Correlatiom between roads and burnt areas"
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
      />
      <GraphOnSide
        srcs={srcs}
        title="Correlatiom between roads and burnt areas"
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
        left={false}
      />
      <GraphOnSide
        srcs={srcs}
        title="Correlatiom between roads and burnt areas"
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
        left={true}
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
