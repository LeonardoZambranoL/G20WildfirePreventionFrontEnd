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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

type Props = {
  srcs: string[];
  title: string;
  buttonDescriptions: string[];
  descriptions: string[];
  left?: boolean;
  descriptionChanges?: boolean;
};

export default function GraphOnSide({
  srcs,
  title,
  buttonDescriptions,
  descriptions,
  left = true,
  descriptionChanges = false,
}: Props) {
  const [index, setIndex] = useState(0);
  const dropdownGraphOptions = (
    <>
      <div className="flex flex-row justify-end lg:hidden w-full">
        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold text-xl">
            <FontAwesomeIcon icon={faBars} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            {buttonDescriptions.map((description, index) => (
              <DropdownMenuItem
                className="w-full"
                key={`dopdown ${title} ${index}`}
              >
                <Button
                  className="w-full"
                  onClick={() => {
                    setIndex(index);
                  }}
                  key={`button ${title} ${index}`}
                >
                  {description}
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
  const graphWithMenu = (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col gap-2 minh-h-[800px] w-2/3">
          <KibanaIframe src={srcs[index]} />
          {buttonDescriptions.length != 0 && dropdownGraphOptions}
        </div>
      </div>
    </>
  );
  const description = (
    <div className="p-5">
      {descriptionChanges ? descriptions[index] : descriptions[0]}
    </div>
  );
  const leftFormat = (
    <>
      {graphWithMenu}
      {description}
    </>
  );
  const rightFormat = (
    <>
      {description}
      {graphWithMenu}
    </>
  );
  return (
    <>
      <div className="p-5">
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
            <div className="w-full hidden lg:flex lg:flex-row lg:gap-2 lg:justify-end">
              {buttonDescriptions.map((description, index) => (
                <Button
                  onClick={() => {
                    setIndex(index);
                  }}
                  key={`${title} ${index}`}
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
