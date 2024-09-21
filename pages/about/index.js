// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaJava } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

import {
  SiNextdotjs,
  SiFramer,
  SiPostgresql,
  SiSpring,
  SiNumpy,
  SiPandas,
  SiPython,
  SiPytorch,
  SiJupyter,
  SiOpencv,
  SiKeras,
} from "react-icons/si";
import Circles from "../../components/Circles";
import { useState } from "react";
import { motion } from "framer-motion";
import Avatar from "../../components/Avatar";
import { fadeIn } from "/variants";
import CountUp from "react-countup";
//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          { icon: <FaHtml5 />, key: "html5" },
          { icon: <FaCss3 />, key: "css3" },
          { icon: <FaJs />, key: "js" },
          { icon: <TbBrandTypescript />, key: "ts" },
          { icon: <FaReact />, key: "react" },
          { icon: <SiNextdotjs />, key: "nextjs" },
          { icon: <SiFramer />, key: "framer-motion" },
        ],
      },
      {
        title: "Data Scientist",
        icons: [
          { icon: <SiPython />, key: "pyton" },
          { icon: <SiPandas />, key: "pandas" },
          { icon: <SiNumpy />, key: "numpy" },
          { icon: <SiPytorch />, key: "pytoch" },
          { icon: <SiJupyter />, key: "jupyter" },
          { icon: <SiOpencv />, key: "opencv" },
          { icon: <SiKeras />, key: "keras" },
        ],
      },
      {
        title: "Java Developer",
        icons: [
          { icon: <FaJava />, key: "java" },
          { icon: <SiSpring />, key: "spring" },
          { icon: <SiPostgresql />, key: "postgresqlva" },
        ],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Ministry of Health",
        stage: "2015 - 2023",
      },
      {
        title: "Web Developer - Freelancer",
        stage: "2020 - 2024",
      },
      {
        title: "Data Scientist - BlaBla Corporation",
        stage: "2023 - 2024",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Faculty of Medicine  - Turkey / Kahramanmaras",
        stage: "2014",
      },
      {
        title: "Full Stack Developer Diploma  - Techpro Education BootCamp",
        stage: "2023",
      },

      {
        title:
          "Family Medicine Specialization Diploma - Adana City Training & Research Hospital / Adana",
        stage: "2024",
      },
      {
        title:
          "Computer Programing Diploma - Anadolu University - Turkey / Eskisehir",
        stage: "2024",
      },
      {
        title: "Data Scientist  Diploma  - Techpro Education BootCamp",
        stage: "2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32  text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:justify-center">
        <div className="flex-1 flex flex-col justify-center mt-10">
          <h2 className="h2">
            Towards<span className="text-accent"> New Horizons </span>at the
            Intersection of Healthcare and Artificial Intelligence
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:-px-0">
            I started working as a medical doctor 10 years ago. For the past 3
            years, I have been interested in programming, artificial
            intelligence, and deep learning. I support academic work on AI
            models in healthcare and offer some models for free on my personal
            website.
          </p>
          <div>
            <div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={6} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  Years of Experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]  ">
                  Satisfied clients
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:justify-center">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                  key={itemIndex}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div className="text-2xl text-white" key={itemIndex}>
                          {icon.icon}{" "}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
