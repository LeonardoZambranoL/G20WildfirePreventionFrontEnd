import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";
import Predictions from "../charts/kibana/Predictions";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function EconomyPredictions() {
  const srcs = [
    "https://de.wikipedia.org/wiki/Dog",
    "https://de.wikipedia.org/wiki/CAT",
  ];
  const descriptions = [lorem, lorem];
  const titles = [`Prediction 1`, `Prediction 2`];
  return (
    <>
      <Predictions srcs={srcs} descriptions={descriptions} titles={titles} />
    </>
  );
}
