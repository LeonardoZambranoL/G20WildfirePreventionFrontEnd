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
    "Displayed here are the population distribution patterns across Brazil, with brighter areas indicating higher population density. Upon closer examination of these graphics, a striking correlation emerges: many of the protected areas coincide with densely populated regions. This observation prompts the reflection that these conservation efforts seem strategically positioned where they are most visible to people. However, it's crucial to recognize that safeguarding the rainforest and its diverse ecosystems transcends political agendas. Conservation initiatives should not merely seek governmental approval but prioritize tangible benefits and the long-term preservation of our natural heritage. It's not surprising, then, to find protected areas extending into both inhabited and remote forested regions. After all, these areas represent one of humanity's most valuable assets in combating climate change and enhancing air quality, thereby improving overall quality of life.",
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
