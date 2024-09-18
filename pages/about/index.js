// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

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
          { icon: <FaReact />, key: "react" },
          { icon: <SiNextdotjs />, key: "nextjs" },
          { icon: <SiFramer />, key: "framer" },
          { icon: <FaWordpress />, key: "wordpress" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma />, key: "figma" },
          { icon: <SiAdobexd />, key: "adobexd" },
          { icon: <SiAdobephotoshop />, key: "photoshop" },
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const About = () => {
  return (
    <div>
      {aboutData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2>{section.title}</h2>
          {section.info.map((infoItem, infoIndex) => (
            <div key={infoIndex}>
              <h3>{infoItem.title}</h3>
              {infoItem.icons && (
                <div>
                  {infoItem.icons.map((iconObj) => (
                    <span key={iconObj.key}>{iconObj.icon}</span>
                  ))}
                </div>
              )}
              {infoItem.stage && <p>{infoItem.stage}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default About;
