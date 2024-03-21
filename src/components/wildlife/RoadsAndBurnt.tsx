import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function RoadsAndBurnt() {
  const srcs = [
    "http://172.208.114.118:5601/app/dashboards#/view/34b78ad0-e75e-11ee-8ca9-914f9ddcd9b8?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:()),gridData:(h:15,i:f8ee0eae-54f8-40ff-a589-6e599631963b,w:24,x:0,y:0),id:d54b9820-e75d-11ee-8ca9-914f9ddcd9b8,panelIndex:f8ee0eae-54f8-40ff-a589-6e599631963b,type:lens,version:'7.17.18')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:dds,viewMode:view)",
    "https://de.wikipedia.org/wiki/CAT",
    "https://de.wikipedia.org/wiki/Fish",
  ];
  const buttonDescriptions = ["Only Roads", "Only Burnt Areas", "Both"];
  const descriptions = [`${lorem} `, `${lorem} `, `${lorem} `];
  return (
    <>
      <GraphOnSide
        srcs={srcs}
        title="Correlatiom between available roads and burnt areas"
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
        descriptionChanges={true}
      />
    </>
  );
}
