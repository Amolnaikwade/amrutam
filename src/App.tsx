import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Ayurveda from "./components/Ayurveda";
import Benefits from "./components/Benefits";
import BeachBottle from "./components/BeachBottle";
import Approach from "./components/Approach";
import Stories from "./components/Stories";
import Experts from "./components/experts";
import Download from "./components/Download";
import Footer2 from "./components/footer2";
import Footer1 from "./components/footer1";

const App = () => {

  const [isSmall, setIsSmall] = useState(window.innerWidth < 640);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < 768);
    };

    // Add the resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Hero isSmall={isSmall} />
      <Ayurveda isSmall={isSmall}/>
      <Benefits isSmall={isSmall}/>
      <BeachBottle/>
      <Approach isSmall={isSmall}/>
      <Stories isSmall={isSmall}/>
      <Experts isSmall={isSmall}/>
      <Download isSmall={isSmall}/>
      {isSmall?<Footer2/>:<Footer1/>}
    </>
  );
};

export default App;