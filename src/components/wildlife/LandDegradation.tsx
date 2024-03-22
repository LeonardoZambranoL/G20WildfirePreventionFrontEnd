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
    "/landcover/2002.png",
    "/landcover/2003.png",
    "/landcover/2004.png",
    "/landcover/2005.png",
    "/landcover/2006.png",
    "/landcover/2007.png",
    "/landcover/2008.png",
    "/landcover/2009.png",
    "/landcover/2010.png",
    "/landcover/2011.png",
    "/landcover/2012.png",
    "/landcover/2013.png",
    "/landcover/2014.png",
    "/landcover/2015.png",
    "/landcover/2016.png",
    "/landcover/2017.png",
    "/landcover/2018.png",
    "/landcover/2019.png",
    "/landcover/2020.png",
    "/landcover/2021.png",
    "/landcover/2022.png",
  ];
  const buttonDescriptions: string[] = [];
  const description =
    "The images provided depict the land coverage of Brazil, with distinct colors representing different types of terrain. In this visualization, the blue areas in the top left correspond to the expansive Amazon Rainforest, while yellow areas represent savannas, and orange/red tones indicate human settlements. Through these visualizations, we gain valuable insights into the dynamic evolution of the Amazon Rainforest over time. A notable observation is the gradual shrinkage of the rainforest, particularly evident around the Mapitoba region situated to the east of the rainforest. This trend underscores the ongoing environmental changes and human encroachment affecting this vital ecosystem. As the rainforest diminishes in size, it highlights the urgent need for sustainable conservation efforts to preserve this globally significant biodiversity hotspot.";
  return (
    <>
      <Gallery
        title="Land degradation and land coverage"
        photos={srcs}
        interval={500}
        description={description}
      />
    </>
  );
}
