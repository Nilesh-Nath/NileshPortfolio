import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-container" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
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
    <>
      {isMobile ? (
        <>
          <div>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </div>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px">
            I`m Nilesh Nath 💯.I am a Computer Science and IT student with a
            passion for blockchain, DeFi, NFTs, the metaverse, and DAOs. I have
            learned how to design, code, test, and document programs and program
            modifications using various standards and tools. I can communicate
            effectively in English with clients and business users, and
            represent myself and my work in a positive and professional manner.
            I have a good understanding of front-end frameworks and Web3
            development tools and technologies. I enjoy creating decentralized
            applications, curating unique NFTs, and exploring innovative
            applications of blockchain technology. I believe in the potential of
            decentralization to create a more inclusive, immersive, and
            equitable future for everyone. I am also passionate about continuous
            learning and staying up-to-date with the latest industry trends and
            developments. You can find some of my projects and achievements on
            this website, and feel free to contact me if you want to collaborate
            or learn more about my work. Thank you for visiting my portfolio! 😊
          </p>
        </>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px"
          >
            I`m Nilesh Nath 💯.I am a Computer Science and IT student with a
            passion for blockchain, DeFi, NFTs, the metaverse, and DAOs. I have
            learned how to design, code, test, and document programs and program
            modifications using various standards and tools. I can communicate
            effectively in English with clients and business users, and
            represent myself and my work in a positive and professional manner.
            I have a good understanding of front-end frameworks and Web3
            development tools and technologies. I enjoy creating decentralized
            applications, curating unique NFTs, and exploring innovative
            applications of blockchain technology. I believe in the potential of
            decentralization to create a more inclusive, immersive, and
            equitable future for everyone. I am also passionate about continuous
            learning and staying up-to-date with the latest industry trends and
            developments. You can find some of my projects and achievements on
            this website, and feel free to contact me if you want to collaborate
            or learn more about my work. Thank you for visiting my portfolio! 😊
          </motion.p>
        </>
      )}

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
