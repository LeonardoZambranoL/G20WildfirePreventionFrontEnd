import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function MoneyLoss() {
  const srcs = ["https://de.wikipedia.org/wiki/Horse", "https://de.wikipedia.org/wiki/Cow", "https://de.wikipedia.org/wiki/Rhino"];
  const buttonDescriptions: string[] = ["using index 1", "using index 2", "using index 3"];
  const descriptions = [`${lorem}`, `${lorem}`, `${lorem}`];
  return (
    <>
      <GraphOnSide
        srcs={srcs}
        title="How much money could that be?"
        buttonDescriptions={buttonDescriptions}
        descriptions={descriptions}
        left={false}
        descriptionChanges={true}
      />
    </>
  );
}
