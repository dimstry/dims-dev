import { useTheme } from "next-themes";
import NavBar from "../components/NavBar";
import About from "../components/About";

import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import Portofolio from "../components/Portofolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/Banner"), { ssr: false });
const Skills = dynamic(() => import("../components/Skills"), { ssr: false });
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="bg-gradient-to-bl from-bgBlue to-white dark:from-blue-900 dark:to-bgBlueLight">
          <NavBar />
          <main>
            <Banner />
            <About />
            <Skills />
            <Portofolio />
            <Contact />
          </main>
          {/* <Footer /> */}
        </div>
      )}
    </>
  );
}
