import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const profiles = [
        { name: 'Pratham Pilli', url: 'https://www.linkedin.com/in/pratham-pilli-73281426a/' },
        { name: 'Anay Kothana', url: 'https://www.linkedin.com/in/anay-kothana/' },
        { name: 'Akash Puzhakkal', url: 'https://www.linkedin.com/in/akash-puzhakkal-a211b3222/' },
        { name: 'Arnav Mabrukar', url: 'https://www.linkedin.com/in/arnav-mabrukar-004700252/' },
    ];

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
                className='flex flex-row items-center'
            >
                <div className="relative inline-block">
                    <img
                        src = "/linkedin.png"  // Provide a dummy URL or use a click event to prevent redirection
                        alt = "LinkedIn icon"
                        className = "cursor-pointer w-10 h-10"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="absolute left-0 mt-2 space-y-2 bg-white rounded-md shadow-md">
                            {profiles.map((profile, index) => (
                                <a
                                    key={index}
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-2 text-black hover:bg-gray-200"
                                >
                                    {profile.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='black'
                    bgColor='transparent'
                />
                <p className="uppercase hidden md:inline-flex text-sm text-black">Get In Touch</p>
            </motion.div>
        </header>
    );
};

export default Header;
