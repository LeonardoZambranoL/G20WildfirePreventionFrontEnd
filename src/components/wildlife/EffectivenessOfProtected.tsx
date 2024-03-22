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
    "Displayed are 409 protected regions, mainly in southeastern Brazil near the coast. These areas have many highways, making them easy to reach during emergencies. Interestingly, they also have fewer wildfires, suggesting that investing strategically can create thriving protected areas. However, the visualizations show a worrying trend: there are few protected regions in the Amazon. This highlights the need for better infrastructure for conservation. In places like Pará, where infrastructure is lacking, wildfires are more common, showing the urgent need for investment. While current conservation efforts are good, it's crucial to expand protected areas in the Amazon. Known as the 'Earth's lungs,' the Amazon is crucial for global climate regulation, emphasizing the need to strengthen conservation efforts there.",
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
