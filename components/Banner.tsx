import { useLottie } from "lottie-react";

import Hero from "../public/assets/Hero.json";
export default function Banner() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: Hero,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(options);
  return (
    <section id="Home" className="section">
      <div className="container px-5 lg:px-14 xl:px-28 mx-auto mt-44 md:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 ">
          <div className="flex flex-col justify-center gap-4">
            <p className="myFont text-xl">Welcome to my portofolio</p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold dark:text-white text-blue-700 flex flex-col">
              Hi, I&apos;m Dimas Triana
              <span className="myBlue dark:text-blue-600">
                Front End Developer &<br /> UI Designer
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-100 text-xl md:text-lg">
              Medium level experience in Frontend Developer and having knowledge
              of web design and Mobile Developer, producing quality work.
            </p>
            <a
              href="#Contact"
              className="bg-blue-800 text-white px-4 py-2 rounded-md mt-4 h-12 w-7/12 lg:w-5/12 flex items-center justify-center gap-2 group"
            >
              Let&apos;s connect{" "}
              <span className="flex items-center group-hover:translate-x-3 transition-all">
                <i className="bx bx-right-arrow-circle bx-sm"></i>
              </span>
            </a>
            <div className="flex gap-5 mt-5">
              <a
                href="https://www.linkedin.com/in/dimastry/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin bx-lg bx-tada-hover text-blue-900 dark:text-white"></i>
              </a>
              <a
                href="https://github.com/dimstry"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <i className="bx bxl-github bx-lg bx-tada-hover text-blue-900 dark:text-white"></i>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 md:mt-0 md:ml-auto">
            {View}
          </div>
        </div>
      </div>
    </section>
  );
}
