"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Page() {
  const fireFacts = [
    "26.4 million acres of Brazil's Amazon rainforest burned in 2023 .-rainforestfoundation.org",
    "An area the size of the state of Tennessee burned in the Brazilian Amazon in 2023 .-rainforestfoundation.org",
    "close to 1 million trees are still being chopped down or burned every day in the Amazon. [...] this will worsen the degradation of the forest .-rainforestfoundation.org",
    "[...] Massive smoke plumes drifted thousands of miles [...] settled over Brazil's largest city, blocking out the sun .-rainforestfoundation.org",
    "Despite international pressures, the situation has continued to deteriorate .-rainforestfoundation.org",
    "[...] leading to catastrophic consequences for the global climate and life on Earth. .-rainforestfoundation.org",
  ];
  const livingFacts = [
    "There were more than 295,000 new displacements associated with disasters in Brazil in 2019 .-internal-displacement.org/countries/brazil",
    "Brazil has one of the highest numbers of internal displacement in the world, being vulnerable to floods, wildfires, storms and landslides .-internal-displacement.org/countries/brazil",
  ];

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-12">
          <div className="hidden md:flex bg-[url('/Fuego.jpg')] bg-cover w-full h-screen bg-no-repeat col-span-6">
            <span className="text-secondary text-center container font-bold text-1xl md:text-2xl lg:text-3xl mt-96 w-2/3">
              <Typewriter
                options={{ loop: true, delay: 45, deleteSpeed: 0 }}
                onInit={(typewriter: any) => {
                  for (let s of fireFacts) {
                    typewriter.typeString(s);
                    typewriter.pauseFor(100);
                    typewriter.deleteAll();
                  }
                  typewriter.start();
                }}
              />
            </span>
          </div>
          <div className="hidden md:block bg-[url('/Rainforest.jpg')] bg-cover w-full h-screen bg-no-repeat col-span-6">
            <div className="flex flex-col gap-5 mt-80">
              <span className="text-secondary text-center container font-bold text-5xl md:text-6xl lg:text-7xl w-2/3">
                <h1> What is we cared more?</h1>
              </span>
              <span className="text-secondary text-center container font-bold text-xl md:text-2xl lg:text-4xl w-2/3">
                <h1> Join us to see how destructive wild fires truly are. </h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
