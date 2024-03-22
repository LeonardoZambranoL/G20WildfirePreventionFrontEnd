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
    "409 Protected regions are being shown. From the visalizations presented one can derive that most of the protected areas are located on the south east of brazil, close to the coast. These are zones with dense highways, providing good reachability in case on emergencies. This protected areas are also in the areas with some of the lowest wild fire rates in Brazil. This means that with the correct investment it is indeed possible to create thriving protected regions. On the other hand these visualizations also bring something to attention: The number of protected regions actually located in the Amazon is rather low. These also points to the fact that conservation is dependent on infrastructure, which is for example in Pará lacking, potentially explaining the high burn rates of the region. Altough these efforts of conservation are very much appreciated, we can not oversee the need of having an increasing number of protected regions in the amazon, being this often referred to the earths lungs.",
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
