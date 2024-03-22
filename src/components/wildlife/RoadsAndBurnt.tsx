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
    "From these graphics, it's evident that there could be significant correlations between the burnt areas of Brazil and the existing road network. Take, for instance, the case of Pará, a region that has tragically witnessed numerous wildfires resulting in the loss of countless hectares of land. What's notable is that Pará ranks among the least connected regions in terms of state and federal roads. This correlation raises an important question: could the limited accessibility of these areas be contributing to the challenges faced by land fire brigades in combating wildfires effectively? It's plausible that the inadequate road infrastructure makes it exceedingly difficult for fire brigades to access remote areas swiftly, leaving them with limited means to contain and extinguish fires promptly. Investing in better road connections and infrastructure in regions like Pará could potentially play a crucial role in improving the situation. Enhanced accessibility would not only empower fire brigades to respond more effectively to wildfires but also facilitate more efficient monitoring and prevention efforts. As such, prioritizing infrastructure development could be a vital step towards mitigating the devastating impact of wildfires in these vulnerable regions.",
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
