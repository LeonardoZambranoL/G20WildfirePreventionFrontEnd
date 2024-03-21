import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function RoadsAndBurnt() {
  const srcs = [
    "http://172.208.114.118:5601/app/dashboards#/view/34b78ad0-e75e-11ee-8ca9-914f9ddcd9b8?embed=true&_g=(filters%3A!()%2Cquery%3A(language%3Akuery%2Cquery%3A'')%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15y%2Cto%3Anow))",
    "https://de.wikipedia.org/wiki/CAT",
    "https://de.wikipedia.org/wiki/Fish",
  ];
  const buttonDescriptions = ["Only Roads", "Only Burnt Areas", "Both"];
  const descriptions = [`${lorem} `, `${lorem} `, `${lorem} `];
  return (
    <>
      <GraphOnSide
        srcs={srcs}
        title="Correlatiom between available roads and burnt areas"
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
        descriptionChanges={true}
      />
    </>
  );
}