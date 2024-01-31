import { motion } from 'framer-motion';

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
type Props = {};

const About = (props: Props) => {
    return (<>

        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1, }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-clip overflow-hidden flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">

            <h3 className='absolute top-24 uppercase tracking-[20px] text-black text-2xl'>
                About
            </h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="/aboutPic.jpg"
                alt="Author's Picture"
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold text-black'><span className='underline decoration-[#F7AB0A]/50'>Who</span> we are
                </h4>
                <p className='text-base sm:dots text-black'>
                    Picture this: a hackathon hall alive with excitement, yet we couldn't shake off a touch of morning lethargy on a regular Saturday. Brought to you by Arnav Mubrakar, Akash Puzhakkal, Anay Kothana, and Pratham Pilli, we are <b>SynthSense</b>, and our journey kicked off fueled by ambition, creativity, and a bit of naivety. Inspired by NJ Transit's challenge at the annual HackRU, a pivotal decision loomed to transition from web to mobile app development, showcasing adaptability and quick decision-making.
                    Our award-winning app, designed for bus services, seamlessly integrated user inputs, routes, and an AI-driven one-day trip planner. Building on this success, we ventured into the health-tech realm at HackHealth, developing MinDerva — a project that caught the attention of industry mentor Andrew Gordon. Under Andrew's guidance, our newly formed startup, SynthSense, secured a spot in the National Science Foundation's I-Corps program, receiving a $3,000 grant. Now poised to attend the Consumer Electronic Showcase in Las Vegas, SynthSense's journey is a testament to resilience, collaboration, and the boundless potential of youthful innovation in the startup and app development landscape.
                </p>
            </div>
        </motion.div>
    </>);
};

export default About;