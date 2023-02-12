import { useEffect, useState } from "react";

import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Portofolio from "../components/Portofolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
          <Footer />
        </div>
      )}
    </>
  );
}
