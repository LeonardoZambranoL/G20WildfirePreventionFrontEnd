import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";
import GalleryWithButtons from "../gallery/GalleryWithButtons";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function EffectivnessOfProtected() {
  const srcs = [
    "/protected/protected.png",
    "/burnt/2005.png",
    "/roads/state_roads.png",
  ];
  const buttonDescriptions: string[] = [
    "Protected areas",
    "Burnt areas",
    "Highways",
  ];
  const descriptions = [
    "Displayed are 409 protected regions, predominantly situated in the southeastern part of Brazil, close to the coastline. These areas boast a dense network of highways, facilitating accessibility during emergencies. Interestingly, they also coincide with some of the lowest wildfire rates in the country. This correlation suggests that with strategic investment, thriving protected regions can indeed be established. However, a closer examination of the visualizations reveals a concerning trend: a notable scarcity of protected regions within the Amazon. This observation underscores the critical dependence of conservation efforts on infrastructure. In regions like Pará, where infrastructure is lacking, there's a notable uptick in wildfire incidents, highlighting the urgent need for investment in conservation infrastructure. While the existing conservation efforts are commendable, it's imperative not to overlook the pressing necessity for an expanded network of protected regions within the Amazon. Often referred to as the 'Earth's lungs,' the Amazon plays a pivotal role in global climate regulation, emphasizing the urgency of bolstering conservation efforts in this vital ecosystem.",
  ];
  const title = "Effectivness of protected areas";
  const descriptionChanges = false;
  return (
    <>
      <GalleryWithButtons
        photos={srcs}
        buttonDescriptions={buttonDescriptions}
        title={title}
        descriptions={descriptions}
        descriptionChanges={descriptionChanges}
      />
    </>
  );
}
