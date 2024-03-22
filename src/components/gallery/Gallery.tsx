"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";

type Props = {
  title: string;
  photos: string[];
  interval: number;
  description: string;
};

const Gallery = ({ title, photos, interval, description }: Props) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [photos, interval]);

  return (
    <>
      <div className="p-5">
        <Card>
          <CardHeader>
            <CardTitle className="w-full text-center container font-bold text-2xl md:text-3xl lg:text-4xl">
              <span className="w-full text-center">{title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full grid grid-cols-12">
            <div className="col-span-5">
              <Image
                src={photos[currentPhotoIndex]}
                alt={`Photo ${currentPhotoIndex}`}
                width={600}
                height={600}
              />
            </div>
            <div className="w-full col-span-7 hidden lg:flex lg:flex-row lg:gap-2 lg:justify-end">
              {description}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Gallery;
