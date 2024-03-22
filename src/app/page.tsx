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
        <div className="block md:hidden h-10 w-full"></div>
        <div className="md:grid md:grid-cols-12">
          <div className="bg-cover w-full md:h-screen bg-no-repeat sm:w-full md:col-span-6">
            <div className="flex flex-col gap-5 md:mt-80">
              <span className="text-center container font-bold text-5xl md:text-6xl lg:text-7xl w-full md:w-2/3 drop-shadow-2xl">
                <h1> What if we cared more?</h1>
              </span>
              <span className="text-center container font-bold text-xl md:text-2xl lg:text-4xl w-full md:w-2/3 drop-shadow-2xl mb-10">
                <h1> Join us to see how destructive wild fires truly are. </h1>
              </span>
            </div>
          </div>
          <div className="md:col-span-6 p-5 flex flex-row justify-center">
            <div className="bg-[url('/Fuego.jpg')] bg-cover w-full md:w-2/3 md:h-3/4 bg-no-repeat self-center">
              <div className="block md:hidden h-96 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
