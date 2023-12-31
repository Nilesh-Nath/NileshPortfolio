import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useState, useEffect } from "react";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
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
  return isMobile ? (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  ) : (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        option={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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
            <p className={styles.sectionSubText}>My Works</p>
            <h2 className={styles.sectionHeadText}>Projects.</h2>
          </div>
          <div className="w-full flex">
            <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
              Hey there, ready to dive into my bunch of projects? They're like
              my digital show-and-tell, where each one's a sneak peek into my
              skills and what I love to do. Think of them as my personal quest
              logs – real-life problems turned into techie adventures, and I've
              got the stories to prove it. I've jotted down quick descriptions
              and links to where the tech magic happens – the code repositories.
              It's like me saying, 'Check out how I handle these brain-teasers
              and jump between all these different techie things!' <br />
              But hey, here's the kicker – I'm not just living in the past, I've
              also sprinkled some of that cool Web 3 fairy dust in there.
              Imagine these projects as tokens in a game, each holding a piece
              of the bigger puzzle. They're not just code, they're like my
              digital footprint in this wild, decentralized digital realm.{" "}
              <br />
              Click on Github Icon on the top right corner for the source codes
              :)
            </p>
          </div>
        </>
      ) : (
        <>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Works</p>
            <h2 className={styles.sectionHeadText}>Projects.</h2>
          </motion.div>
          <div className="w-full flex">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              Hey there, ready to dive into my bunch of projects? They're like
              my digital show-and-tell, where each one's a sneak peek into my
              skills and what I love to do. Think of them as my personal quest
              logs – real-life problems turned into techie adventures, and I've
              got the stories to prove it. I've jotted down quick descriptions
              and links to where the tech magic happens – the code repositories.
              It's like me saying, 'Check out how I handle these brain-teasers
              and jump between all these different techie things!' <br />
              But hey, here's the kicker – I'm not just living in the past, I've
              also sprinkled some of that cool Web 3 fairy dust in there.
              Imagine these projects as tokens in a game, each holding a piece
              of the bigger puzzle. They're not just code, they're like my
              digital footprint in this wild, decentralized digital realm.{" "}
              <br />
              Click on Github Icon on the top right corner for the source codes
              :)
            </motion.p>
          </div>
        </>
      )}
      <div className="mt-20 flex flex-wrap gap-7 justify-center ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
