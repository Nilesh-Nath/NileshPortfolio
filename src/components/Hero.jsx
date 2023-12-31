import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import { ComputersCanvas } from "./canvas";
// Import the react-type-animation library
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for change to the screen size
    const mediaQuery = window.matchMedia("(max-width:500px)");

    // set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>
            Hola , The Name's<span className="text-[#915eff]"> Nilesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* Use the TypeAnimation component to create the typing effect */}
            <TypeAnimation
              cursor={true}
              sequence={[
                "< Loves to Develop on Web3.0 />",
                1000,
                "",
                1000,
                "< Loves to Develop on Web3.0 />",
                1000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </p>
        </div>
      </div>
      {isMobile ? <div></div> : <ComputersCanvas />}
      {/* This above Line  */}
      {/* <ComputersCanvas /> */}
      {isMobile ? (
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      ) : (
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;
