/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import { useLottie } from "lottie-react";

import happyCoding from "../public/assets/happyCoding.json";
import datas from "../app/api/skills.json";
import DowloadBtn from "./DowloadBtn";

export default function Skills() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: happyCoding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options);

  return (
    <section id="Skill" className="section">
      <div className="container px-5 lg:px-28 md:px-10 mx-auto mt-10">
        {/* 2 culumn 1 image 1 desc */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-stretch">
          {/* left column */}
          <div className="flex flex-col justify-center items-center myFont text-gray-900 dark:text-white">
            <h3 className="text-2xl text-center">What I Do?</h3>
            <div className="flex flex-col gap-5 mt-5 font-medium text-gray-800 dark:text-white">
              <h4 className="text-lg text-left">Tech Stack Front-End</h4>
              <div className="grid gap-2 grid-cols-3 md:grid-cols-4">
                {datas.data.fe.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <Image
                        src={item.imgUrl}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
              <h4 className="text-lg text-right">Tech Stack Backend</h4>
              <div className="grid gap-2 grid-cols-3 md:grid-cols-4">
                {datas.data.be.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <Image
                        src={item.imgUrl}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
              <DowloadBtn />
            </div>
          </div>
          {/* right column */}
          <div className="flex flex-col justify-center w-full">{View}</div>
        </div>
      </div>
    </section>
  );
}
