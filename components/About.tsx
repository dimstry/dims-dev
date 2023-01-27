import React from "react";
import Image from "next/image";

import Dimas from "../public/assets/img/Dimas.svg";

export default function About() {
  return (
    <section id="About" className="section">
      <div className="container px-5 lg:px-28 md:px-10 mx-auto md:mt-5">
        <h2 className="myFont text-3xl text-center mb-20">About</h2>
        {/* 2 culumn 1 image 1 desc */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          {/* left column */}
          <div className="flex justify-center">
            <div className="card flex flex-col justify-center items-center">
              <p className="text-white z-10 myFont text-lg">#Me</p>
              <Image
                src={Dimas}
                alt="dimas"
                className="rounded-md w-10/12 z-10"
              />
            </div>
          </div>
          {/* right column */}
          <div className="flex flex-col justify-center">
            <div className="sm:w-9/12 flex flex-col gap-5 w-full items-center sm:items-start">
              <p className="myFont text-lg mb-3">#Hi 💙</p>
              <p className="text-center sm:text-left">
                I&apos;m a junior Front-end developer, have experience in Web
                Developer, Ui Design, and have a little knowledge in mobile
                developer using Flutter
              </p>
              <div className="flex mt-6 gap-10">
                <span className="myFont flex flex-col items-center">
                  <h3 className="text-5xl">01+</h3>
                  <p>Years experience</p>
                </span>
                <span className="myFont flex flex-col items-center">
                  <h3 className="text-5xl">12+</h3>
                  <p>Completed project</p>
                </span>
              </div>
              <button className="btn w-8/12 mt-5">
                My Project
                <div className="arrow-wrapper">
                  <div className="arrow"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
