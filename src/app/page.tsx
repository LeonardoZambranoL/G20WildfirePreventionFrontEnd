"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Page() {
  const fireFacts = [
    "26.4 million acres (10.7 million hectares) of Brazil's Amazon rainforest burned in 2023 .-rainforestfoundation.org",
    "An area the size of the state of Tennessee burned in the Brazilian Amazon in 2023 .-rainforestfoundation.org",
    "On average close to 1 million trees are still being chopped down or burned every day in the Amazon. Countless more died because of the drought, and this will worsen the degradation of the forest .-rainforestfoundation.org",
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
      <div className="mt-5 container">
        <div className="flex flex-row align-center mb-5">
          <span className="w-full text-center container font-bold text-3xl md:text-4xl lg:text-7xl">
            A Land of Opportunities
          </span>
        </div>
        <div className="hidden md:flex bg-[url('/Cristo.png')] bg-cover w-full h-[800px] bg-no-repeat">
          <div className="container grid grid-cols-3">
            <div className="w-full flex flex-row justify-center mt-96">
              <div className="flex flex-col gap-2">
                <span className="w-full text-center container font-bold text-1xl md:text-2xl lg:text-3xl">
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
            </div>
            <div></div>
            <div className="w-full flex flex-row justify-center mt-96">
              <span className="w-full text-center container font-bold text-1xl md:text-2xl lg:text-3xl">
                <Typewriter
                  options={{ loop: true, delay: 45, deleteSpeed: 0 }}
                  onInit={(typewriter: any) => {
                    typewriter.pauseFor(1000);
                    for (let s of livingFacts) {
                      typewriter.typeString(s);
                      typewriter.pauseFor(100);
                      typewriter.deleteAll();
                    }
                    typewriter.start();
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex md:hidden bg-[url('/Cristo.png')] bg-cover w-full h-[190px] bg-no-repeat" />
        <div className="flex flex-row align-center mb-5">
          <span className="hidden md:flex w-full text-center container font-bold text-xl md:text-2xl lg:text-5xl">
            Opportunities without correct execution or well targeted investment
            will not last
          </span>
          <span className="flex md:hidden w-full text-center container font-bold text-xl md:text-2xl lg:text-5xl">
            But opportunities without correct execution or well targeted investment
            will not last
          </span>
        </div>
        <div className="w-full flex flex-row justify-center">
          <span className="w-full text-center container font-bold text-lg">
            <Typewriter
              options={{ loop: true, delay: 45, deleteSpeed: 0 }}
              onInit={(typewriter: any) => {
                for (let s of livingFacts) {
                  typewriter.typeString(s);
                  typewriter.pauseFor(100);
                  typewriter.deleteAll();
                }
                typewriter.start();
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
}
