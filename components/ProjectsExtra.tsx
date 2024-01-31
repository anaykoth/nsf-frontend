import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ProjectProps = {
  title: string;
  description: string;
  image: string;
};

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
  return (
    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={image}
        alt="Image"
        className="rounded-md w-full max-w-md h-auto flex-shrink-0 md:rounded-lg"
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#f7ab0a]/50 text-black">{title}</span>
        </h4>
        <p className="text-lg text-center text-black md:text-left">
          <span className="inline-block md:text-center">{description}</span>
        </p>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Delirium's Impact",
      image: "/slide-1.png",
      description:
        'Imagine an elderly patient like Grandma admitted for a UTI, experiencing delirium, leading to falls, agitation, and an ICU transfer. This scenario, caused by delirium, affecting 20-29% of older patients, is common, with significant implications for patient care and hospital resources.',
    },
    {
      title: "Delirium's High Costs",
      image: "/slide-2.png",
      description:
        'Delirium affects 7 million patients annually, costing an additional $50,000 per patient. Hospital stays are extended by 3.45 days, contributing to a $6-$80 billion burden on CMS in 2019. MinDerva, aims to address this issue with targeted interventions and potential savings.',
    },
    {
      title: "MinDerva - A Preventive Solution",
      image: "/slide-3.png",
      description:
        'MinDerva, an evidence-based application, tackles delirium through interactive day modes and computer-vision-based night modes. This approach engages patients, maintains circadian rhythms, and detects agitation, offering a comprehensive solution.',
    },
    {
      title: "Implementation and Potential Savings",
      image: "/slide-4.png",
      description:
        "MinDerva's implementation involves nurse-initiated setup, family content uploads, and patient eligibility based on admission criteria. Potential savings are substantial, with $10,000 per delirious patient, translating to $142 million at a single large tertiary care center.",
    },
    {
      title: "Market Strategy and Future Development",
      image: "/slide-5.png",
      description:
        "MinDerva's market strategy involves a subscription-based licensing model at $50/day per patient. The initial implementation at RWJUH shows potential savings of $675 million annually with a national rollout. Future developments include home versions and integration with electronic medical records (EMR).",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (event: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const scrollPosition = event.currentTarget.scrollLeft;
    const slideWidth = window.innerWidth;
    const activeIndex = Math.round(scrollPosition / slideWidth);
    setActiveSlide(activeIndex);
  };

  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-black text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
        onScroll={handleScroll}
      >
        {projects.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} image={project.image} />
        ))}
      </div>

      <div className="w-full absolute bottom-10 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full bg-${index === activeSlide ? '[#f7ab0a]' : 'black'} border border-gray-300`}
          />
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;