import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 dark:bg-bgBlue">
      <div className="container mx-auto px-6">
        <div className="border-t-2 border-gray-300 md:flex md:justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 gap-5 text-white">
            <div className="flex flex-col gap-1">
              <h3 className="myFont text-base">DIMSTR</h3>
              <p className="myFont">Frontend Developer</p>
            </div>
            <div className="flex items-center gap-10 transition-colors">
              <p className="myFont hover:text-cyan-500">
                <a
                  href="mailto:dimastriana03@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                >
                  <i className="bx bx-envelope bx-md bx-tada-hover"></i>
                </a>
              </p>
              <p className="myFont hover:text-cyan-500">
                <a
                  href="https://www.linkedin.com/in/dimastry/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin bx-md bx-tada-hover"></i>
                </a>
              </p>
              <p className="myFont hover:text-cyan-500">
                <a
                  href="https://github.com/dimstry"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <i className="bx bxl-github bx-md bx-tada-hover"></i>
                </a>
              </p>
            </div>

            <div className="flex flex-col text-center md:col-span-2 md:mt-3">
              <p className="myFont">
                © 2023 Dimas Triana. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
