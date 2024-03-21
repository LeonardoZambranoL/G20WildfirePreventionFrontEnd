import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function FiveProneAreas() {
  const srcs = [
    "https://de.wikipedia.org/wiki/rat",
    "https://de.wikipedia.org/wiki/mouse",
    "https://de.wikipedia.org/wiki/bat",
    "https://de.wikipedia.org/wiki/fox",
    "https://de.wikipedia.org/wiki/squirrel",
  ];
  const buttonDescriptions: string[] = [
    `Area 1`,
    `Area 2`,
    `Area 3`,
    `Area 4`,
    `Area 5`,
  ];
  const descriptions = [
    `${lorem} 1`,
    `${lorem} 2`,
    `${lorem} 3`,
    `${lorem} 4`,
    `${lorem} 5`,
  ];
  return (
    <>
      <GraphOnSide
        srcs={srcs}
        title="Five prone areas to wild fires"
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
        left={false}
        descriptionChanges={true}
      />
    </>
  );
}