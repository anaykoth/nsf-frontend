/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from './BackgroundCircles';

type Props = {};

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "< Hi, Welcome to SynthMind! />",
            "A startup innovating hospital-focused solutions.",
            "Crafting cutting-edge medical apps to deliver nurse efficiency and empower patients.",
        ],
        loop: true,
        delaySpeed: 1000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="/logo.jpg"
                alt="profile pic"
            />
            <div className='z-20'>
                <h2 className='font-sm uppercase text-black pb-2 tracking-[15px]'>
                    Health-Tech Startup
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3 text-black'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton bg-black text-[#fff8e7]'>
                            About
                        </button>
                    </Link>
                    {/*<Link href="#experience">
                        <button className='heroButton bg-[#2be6f0]'>
                            Experience
                        </button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton bg-[#2be6f0]'>
                            Skills
                        </button>
                    </Link>*/}
                    <Link href="#projects">
                        <button className='heroButton bg-black text-[#fff8e7]'>
                            Projects
                        </button>
                    </Link>
                    <Link href="#contact">
                        <button className='heroButton bg-black text-[#fff8e7]'>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;