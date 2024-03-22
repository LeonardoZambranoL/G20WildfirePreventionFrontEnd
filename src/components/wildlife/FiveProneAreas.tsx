import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";
import Gallery from "../gallery/Gallery";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function FiveProneAreas() {
  const srcs = [
    "/burnt/2004.png",
    "/burnt/2005.png",
    "/burnt/2006.png",
    "/burnt/2007.png",
    "/burnt/2008.png",
    "/burnt/2009.png",
    "/burnt/2010.png",
    "/burnt/2011.png",
    "/burnt/2012.png",
    "/burnt/2013.png",
    "/burnt/2014.png",
    "/burnt/2015.png",
    "/burnt/2016.png",
    "/burnt/2017.png",
    "/burnt/2018.png",
    "/burnt/2019.png",
    "/burnt/2020.png",
    "/burnt/2021.png",
  ];

  const description =
    "While wildfire data may vary yearly, certain consistent patterns emerge. For instance, Corumbá in Mato Grosso do Sul has seen continuous fire activity over the past 20 years. Similarly, Labrea, though small, has faced significant fires, alarming given its location in the Amazon Rainforest. In Pará, persistent hotspots for wildfires have emerged, as well as in Apuí, Amazonas, especially intensifying from 2019 onward. These observations highlight the urgent need for targeted intervention and proactive measures to reduce wildfire impact in these vulnerable areas.";
  return (
    <Gallery
      title="Prone areas to wild fires in Brasil"
      photos={srcs}
      interval={500}
      description={description}
    />
  );
}
