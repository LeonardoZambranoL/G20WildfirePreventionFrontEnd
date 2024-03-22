import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";
import GalleryWithButtons from "../gallery/GalleryWithButtons";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function MostAffectedPopulations() {
  const srcs = ["/people/people.png", "/protected/protected.png"];
  const buttonDescriptions: string[] = [
    "Where do people live?",
    "Protected areas",
  ];
  const descriptions = [
    "Here is shown where people in brazil live. The more bright areas are the most densely populated areas. From inferring the content of these graphics and noticing the big similarities between them the following conclusion arrives: Most of the protected areas are also in the most densely populated places, just as if they have been built where people can see them. It is to mention that the conservation of the rainforest and biodiversity goes beyond politics and should not only be done by the government in the seek of the approval of the nation, but for it's real benefit and preservation. It should be of no surprise that this protected areas should also exist in regions closer or deeper in the forest, being this one of the main assets humanity has to combat climate change and improve quality of air and therefore life.",
  ];
  return (
    <>
      <GalleryWithButtons
        title="Conviniently protected"
        photos={srcs}
        descriptions={descriptions}
        descriptionChanges={false}
        buttonDescriptions={buttonDescriptions}
      />
    </>
  );
}
