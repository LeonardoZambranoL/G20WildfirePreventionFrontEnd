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
    "http://172.208.114.118:5601/app/dashboards#/view/34b78ad0-e75e-11ee-8ca9-914f9ddcd9b8?embed=true&_g=(filters%3A!()%2Cquery%3A(language%3Akuery%2Cquery%3A'')%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15y%2Cto%3Anow))&hide-filter-bar=true",
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
