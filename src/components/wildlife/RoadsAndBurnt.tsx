import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";
import GalleryWithButtons from "../gallery/GalleryWithButtons";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function RoadsAndBurnt() {
  const srcs = [
    "/burnt/2003.png",
    "/roads/federal_roads.png",
    "/roads/state_roads.png",
  ];
  const buttonDescriptions = ["Burnt Areas", "Federal Roads", "State Roads"];
  const descriptions = [
    "These graphics suggest significant correlations between burnt areas in Brazil and the existing road network. For example, in Pará, a region heavily affected by wildfires, there's a notable lack of connectivity with state and federal roads. This correlation prompts the question: could limited accessibility be hindering land fire brigades' efforts to combat wildfires effectively? Inadequate road infrastructure likely makes it challenging for fire brigades to reach remote areas quickly, hampering their ability to contain and extinguish fires promptly. Investing in better road connections and infrastructure in regions like Pará could be crucial. Improved accessibility would empower fire brigades to respond more effectively to wildfires and enhance monitoring and prevention efforts. Prioritizing infrastructure development could thus help mitigate the devastating impact of wildfires in vulnerable regions.",
  ];
  return (
    <>
      <GalleryWithButtons
        title="Road availability"
        photos={srcs}
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
        descriptionChanges={false}
      />
    </>
  );
}
