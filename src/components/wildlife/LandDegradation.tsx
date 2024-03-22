import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";
import Gallery from "../gallery/Gallery";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function LandDegradation() {
  const srcs = [
    "/burnt/2002.png",
    "/burnt/2003.png",
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
    "/burnt/2022.png",
  ];
  const buttonDescriptions: string[] = [];
  const description = `${lorem} only`;
  return (
    <>
      <Gallery
        title="Prone areas to wild fires in Brasil"
        photos={srcs}
        interval={500}
        description={description}
      />
    </>
  );
}
