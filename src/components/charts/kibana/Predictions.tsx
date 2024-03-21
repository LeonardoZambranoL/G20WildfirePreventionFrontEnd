import React from "react";
import KibanaIframe from "./IFrame";

type Props = {
  srcs: string[];
  titles: string[];
  descriptions: string[];
};

function Predictions({ srcs, titles, descriptions }: Props) {
  const predictions = [];
  for (let i = 0; i < srcs.length; i++) {
    let newPrediction = {
      title: titles[i],
      description: descriptions[i],
      src: srcs[i],
    };
    predictions.push(newPrediction);
  }
  return (
    <>
      <div className="container flex flex-col items-center text-center w-full">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl whitespace-pre-line mb-10">
          Predictions
        </h1>
        <div className="flex flex-col gap-5">
          {predictions.map((p, index) => (
            <>
              <span
                className="w-full text-center container font-bold text-2xl md:text-3xl lg:text-4xl"
                key={`title ${index}`}
              >
                {p.title}
              </span>
              <KibanaIframe src={p.src} key={`graph ${index}`} />
              <p key={`description ${index}`}>{p.description}</p>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Predictions;
