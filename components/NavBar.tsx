/* eslint-disable @next/next/no-img-element */
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import meImg from "../public/assets/img/me.webp";
import Image from "next/image";

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const thisTime = new Date().getHours();

  const curretTheme = theme == "light" ? "light" : "dark";

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [curretTheme, scrolled]);

  useEffect(() => {
    const links: NodeListOf<HTMLElement> =
      document.querySelectorAll(".nav-link");
    const sections: NodeListOf<HTMLElement> =
      document.querySelectorAll("section");

    if (links && sections) {
      const handleActiveLink = (event: Event) => {
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        links.forEach((link) => link.classList.remove("text-blue-400"));
        links[index].classList.add("text-blue-400");
      };
      window.addEventListener("scroll", handleActiveLink);
    }

    if (thisTime > 18 || thisTime < 6) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    console.log(thisTime);
  }, [scrolled, navbar, thisTime, setTheme]);

  return (
    <>
      <nav
        className={
          scrolled
            ? "w-full fixed bg-white dark:bg-bgBlueLight z-30"
            : "w-full fixed"
        }
      >
        <div className="container mx-auto flex flex-col md:flex-row sm:gap-4 items-start md:items-center px-5 lg:px-14 xl:px-28">
          <div className="h-20 w-full flex items-center justify-between">
            <div className="flex justify-center items-center gap-4">
              <Image
                src={meImg}
                alt="Dimas"
                width={50}
                height={50}
                className="rounded-full shadow-sm shadow-blue-gray-400"
              />
              <p className="text-3xl md:text-2xl myFont">Dimas</p>
            </div>
            <div className="md:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar && navbar ? (
                  <i className="bx bx-x bx-sm text-blue-900 dark:text-white"></i>
                ) : (
                  <i className="bx bx-menu bx-sm text-blue-900 dark:text-white"></i>
                )}
              </button>
            </div>
          </div>
          <ul
            className={
              navbar && navbar
                ? "flex flex-col gap-2 justify-start myFont w-full transition-all"
                : "hidden md:flex md:items-center myFont text-xl md:text-base lg:text-lg gap-3 lg:gap-8 transition-all"
            }
          >
            <li className="nav-link text-blue-400 ">
              <a href="#Home">Home</a>
            </li>
            <li className="nav-link">
              <a href="#About">About</a>
            </li>
            <li className="nav-link">
              <a href="#Skill">Skills</a>
            </li>
            <li className="nav-link">
              <a href="#Portofolio">Portofolio</a>
            </li>
            <ul className="flex items-center justify-between mb-3 md:mb-0 gap-6">
              <li
                className="px-2 cursor-pointer"
                onClick={
                  curretTheme == "light"
                    ? () => setTheme("dark")
                    : () => setTheme("light")
                }
              >
                {curretTheme == "light" ? (
                  <i className="bx bxs-moon bx-sm animate__animated animate__fadeInUp animate__faster"></i>
                ) : (
                  <i className="bx bxs-sun bx-sm animate__animated animate__fadeInDown animate__faster"></i>
                )}
              </li>
              <li className="nav-link">
                <a href="#Contact">
                  <button className="vvd dark:before:bg-white before:bg-blue-800 dark:text-white text-bgBlueLight border-solid border dark:border-white border-blue-900 hover:text-white dark:hover:text-black inline-block">
                    <span>Let’s Connect</span>
                  </button>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
}
