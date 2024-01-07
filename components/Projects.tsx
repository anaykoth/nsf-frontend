/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import { FC } from 'react';

type ProjectProps = {
    title: string;
    description: string;
    image: string;
};

const Project: FC<ProjectProps> = ({ title, description, image }) => {
    return (
        <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
        >
            <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src={image}
                alt="Image"
                className="rounded-md w-full max-w-md h-auto flex-shrink-0 md:rounded-lg"  // Adjusted image size and uniformity
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

const Projects: FC = () => {
    const projects = [
        {
            title: 'Delirium\'s Impact',
            image: "/slide-1.png",
            description:
                'Imagine an elderly patient like Grandma admitted for a UTI, experiencing delirium, leading to falls, agitation, and an ICU transfer. This scenario, caused by delirium, affecting 20-29% of older patients, is common, with significant implications for patient care and hospital resources.',
        },
        {
            title: 'Delirium\'s High Costs',
            image: "/slide-2.png",
            description:
                'Delirium affects 7 million patients annually, costing an additional $50,000 per patient. Hospital stays are extended by 3.45 days, contributing to a $6-$80 billion burden on CMS in 2019. MinDerva, aims to address this issue with targeted interventions and potential savings.',
        },
        {
            title: "MinDerva - A Preventive Solution",
            image: "/slide-3.png",
            description: 
                'MinDerva, an evidence-based application, tackles delirium through interactive day modes and computer-vision-based night modes. This approach engages patients, maintains circadian rhythms, and detects agitation, offering a comprehensive solution.'
        },
        {
            title: "Implementation and Potential Savings",
            image: "/slide-4.png",
            description:
                'MinDerva\'s implementation involves nurse-initiated setup, family content uploads, and patient eligibility based on admission criteria. Potential savings are substantial, with $10,000 per delirious patient, translating to $142 million at a single large tertiary care center.'
        },
        {
            title: "Market Strategy and Future Development",
            image: "/slide-5.png",
            description:
                'MinDerva\'s market strategy involves a subscription-based licensing model at $50/day per patient. The initial implementation at RWJUH shows potential savings of $675 million annually with a national rollout. Future developments include home versions and integration with electronic medical records (EMR).'
        }
    ];

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

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                    />
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
};

export default Projects;






/* //////////most recent code

import { motion } from 'framer-motion';
import { FC } from 'react';

type ProjectProps = {
    title: string;
    description: string;
};

const Project: FC<ProjectProps> = ({ title, description }) => {
    return (
        <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
        >
            <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                alt="Image"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                    <span className="underline decoration-[#f7ab0a]/50 text-black">{title}</span>
                </h4>
                <p className="text-lg text-center text-black md:text-left">{description}</p>
            </div>
        </div>
    );
};

const Projects: FC = () => {
    const projects = [
        {
            title: 'Delirium\'s Impact',
            image: "/slide1.png",
            description:
                'Imagine an elderly patient like Grandma admitted for a UTI, experiencing delirium, leading to falls, agitation, and an ICU transfer. This scenario, caused by delirium, affecting 20-29% of older patients, is common, with significant implications for patient care and hospital resources.',
        },
        {
            title: 'Delirium\'s High Costs',
            image: "/slide2.jpg",
            description:
                'Delirium affects 7 million patients annually, costing an additional $50,000 per patient. Hospital stays are extended by 3.45 days, contributing to a $6-$80 billion burden on CMS in 2019. MinDerva, aims to address this issue with targeted interventions and potential savings',
        },
        {
            title: "MinDerva - A Preventive Solution",
            image: "/slide3.png",
            description: 
                'MinDerva, an evidence-based application, tackles delirium through interactive day modes and computer-vision-based night modes. This approach engages patients, maintains circadian rhythms, and detects agitation, offering a comprehensive solution.'
        },
        {
            title: "Implementation and Potential Savings",
            image: "/slide4.jpg",
            description:
                'MinDerva\'s implementation involves nurse-initiated setup, family content uploads, and patient eligibility based on admission criteria. Potential savings are substantial, with $10,000 per delirious patient, translating to $142 million at a single large tertiary care center.'
        },
        {
            title: "Market Strategy and Future Development",
            image: "/slide5.jpeg",
            description:
                'MinDerva\'s market strategy involves a subscription-based licensing model at $50/day per patient. The initial implementation at RWJUH shows potential savings of $675 million annually with a national rollout. Future developments include home versions and integration with electronic medical records (EMR).'
        }
    ];

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

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
};

export default Projects;

///////// end most recent code
*/









/* eslint-disable @next/next/no-img-element */
/*import { motion } from 'framer-motion';
import { FC } from 'react';

const Projects: FC = () => {
    const projects = [1, 2, 3, 4, 5];

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

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
                {projects.map((project, index) => (
                    <div
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
                        key={index}
                    >
                        <motion.img
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                            alt="Image"
                        />
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#f7ab0a]/50">
                                    Case Study {index + 1} of {projects.length}:
                                </span>{" "}
                                instagram Clone
                            </h4>
                            <p className="text-lg text-center md:text-left">

                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
                                ipsa dolores minus expedita corrupti placeat magnam asperiores
                                a, velit rem ex rerum temporibus nobis illo, corporis nesciunt
                                atque eveniet iure soluta veritatis? Commodi, dolorem
                                consequatur? Dicta sapiente voluptates temporibus, quis, quidem
                                reiciendis fugit tempora possimus dolore dolorem iusto quae quia
                                animi incidunt sequi in praesentium esse minus debitis? Qui,
                                praesentium.
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    );
};

export default Projects;*/