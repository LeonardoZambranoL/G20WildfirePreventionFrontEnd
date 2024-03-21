import BarchartTest from "@/components/charts/BarChartTest";
import LineChartTest from "@/components/charts/LineChartTest";
import GraphOnSide from "@/components/charts/kibana/GraphOnSideWithButtons";
import KibanaIframe from "@/components/charts/kibana/IFrame";
import DemographyPredictions from "@/components/demography/DemographyPredictions";
import MostAffectedPopulations from "@/components/demography/MostAffectedPopulations";
import PossibleMigration from "@/components/demography/PossibleMigration";
import LandLoss from "@/components/economy/LandLoss";
import MoneyLoss from "@/components/economy/MoneyLoss";
import EffectivnessOfProtected from "@/components/wildlife/EffectivenessOfProtected";
import EvidenceOfThreat from "@/components/wildlife/EvidenceOfThreat";
import FiveProneAreas from "@/components/wildlife/FiveProneAreas";
import LandDegradation from "@/components/wildlife/LandDegradation";
import RoadsAndBurnt from "@/components/wildlife/RoadsAndBurnt";
import WildlifePredictions from "@/components/wildlife/WildlifePredictions";
import { getBarData, getLineData } from "@/lib/temp";
import Image from "next/image";

const lorem =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export default function Page() {
  return (
    <>
      <LandLoss />
      <MoneyLoss />
      <DemographyPredictions />
    </>
  );
}
