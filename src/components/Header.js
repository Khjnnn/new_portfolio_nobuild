import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header 
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <motion.div 
                        className="w-10 h-10 rounded-full overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue03&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
                            alt="Developer Avatar"
                            className="w-full h-full"
                        />
                    </motion.div>
                    <nav>
                        <ul className="flex space-x-8">
                            {['About', 'Skills', 'Career', 'Projects', 'Contact'].map((item) => (
                                <motion.li key={item}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a 
                                        href={`#${item.toLowerCase()}`}
                                        className="text-gray-700 hover:text-blue-600 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </motion.header>
    );
}

export default Header;