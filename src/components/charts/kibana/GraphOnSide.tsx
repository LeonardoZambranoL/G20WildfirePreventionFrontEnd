"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import KibanaIframe from "./IFrame";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type Props = {
  srcs: string[];
  title: string;
  buttonDescriptions: string[];
  descriptions: string[];
  left?: boolean;
};

export default function GraphOnSide({
  srcs,
  title,
  buttonDescriptions,
  descriptions,
  left = true,
}: Props) {
  const [index, setIndex] = useState(0);
  const leftFormat = (
    <>
      <div>
        <KibanaIframe src={srcs[index]} />
      </div>
      <div className="p-5">{descriptions[index]}</div>
    </>
  );
  const rightFormat = (
    <>
      <div className="p-5">{descriptions[index]}</div>
      <div>
        <KibanaIframe src={srcs[index]} />
      </div>
    </>
  );
  return (
    <>
      <div className="mt-5 p-5">
        <Card>
          <CardHeader>
            <CardTitle className="w-full text-center container font-bold text-2xl md:text-3xl lg:text-4xl">
              <span className="w-full text-center">{title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            <div className="w-full lg:grid lg:grid-cols-2">
              {left ? leftFormat : rightFormat}
            </div>
          </CardContent>
          <CardFooter className="w-full">
            <div className="w-full flex flex-row gap-2 justify-end">
              {buttonDescriptions.map((description, index) => (
                <Button
                  onClick={() => {
                    setIndex(index);
                  }}
                >
                  {description}
                </Button>
              ))}
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
