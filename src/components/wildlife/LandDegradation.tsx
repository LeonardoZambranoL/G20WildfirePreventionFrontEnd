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
    "The images show Brazil's land coverage, with different colors representing various terrains. The blue areas represent the vast Amazon Rainforest, while yellow depicts savannas, and orange/red tones indicate human settlements. These visuals reveal insights into the Amazon Rainforest's changing landscape over time. A notable observation is its gradual shrinkage, especially evident around the Mapitoba region to the east. This trend underscores ongoing environmental changes and human encroachment impacting this vital ecosystem. As the rainforest diminishes, it emphasizes the urgent need for sustainable conservation efforts to preserve its globally significant biodiversity.";
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
