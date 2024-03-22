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
    "/burnt/2005.png",
    "/roads/federal_roads.png",
    "/roads/state_roads.png",
  ];
  const buttonDescriptions = ["Burnt Areas", "Federal Roads", "State Roads"];
  const descriptions = [
    "From these Graphics it is easy to notice possible relations between burnt areas of Brasil and the roadsystem. Parà is one of the regions which has experienced lots of wildfires and lost countless hectars to them. It is also one of the least connected regions in terms of state and federal roads. The correlation between these might be explained with the fact that land fire brigades find it almost impossible to access these areas and fight the fires, leaving them powerless and dependan on alternate methods. Perhaps better connections and more investment could help improve the situation.",
  ];
  return (
    <>
      <GalleryWithButtons
        title="Correlatiom between available roads and burnt areas"
        photos={srcs}
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
        descriptionChanges={false}
      />
    </>
  );
}
