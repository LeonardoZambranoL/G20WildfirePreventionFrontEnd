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
    "These graphics display population distribution patterns across Brazil, with brighter areas indicating higher population density. A notable correlation emerges: many protected areas coincide with densely populated regions. This observation suggests that conservation efforts may strategically position themselves where they are most visible to people. However, safeguarding the rainforest and its ecosystems goes beyond political agendas. Conservation initiatives should prioritize tangible benefits and the long-term preservation of our natural heritage. Protected areas extend into both inhabited and remote forested regions, representing valuable assets in combating climate change and enhancing air quality, thus improving overall quality of life.",
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
