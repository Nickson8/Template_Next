'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';

const stl_but = 'flex flex-row space-x-2 items-center justify-center md:justify-start md:px-4 w-11/12 py-3 rounded-lg bg-indigo-800 bg-opacity-20 hover:bg-indigo-700 transition-all';

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Update isDesktop based on window size once on component mount
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        handleResize(); // Set the initial state

        // Listen for resize events
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Hamburger button for mobile screens */}
            <button onClick={toggleMenu} className="md:hidden fixed top-4 left-4 z-20">
                <Icon icon={isOpen ? 'carbon:close' : 'carbon:menu'} width={24} height={24} />
            </button>

            {/* Sidebar */}
            <AnimatePresence>
                {(isOpen || isDesktop) && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className={`w-40 md:w-60 bg-indigo-950 h-screen flex-1 fixed md:flex text-white z-10`}
                    >
                        <div className='flex flex-col space-y-6 w-full pt-10'>
                            <Link href='/contas' className='flex flex-row items-center justify-center md:justify-start md:px-6'>
                                <span className='px-2'>
                                    <Icon icon='carbon:user' width={21} height={21}></Icon>
                                </span>
                                <p className='text-2xl'>José</p>
                            </Link>

                            <div className='pt-10'>
                                <div className='px-2 py-2'>
                                    <Link href='/home' className={stl_but}>
                                        <span><Icon icon='carbon:document' width={22} height={22}></Icon></span>
                                        <p className='text-md'>Op 1</p>
                                    </Link>
                                </div>

                                <div className='px-2 py-2'>
                                    <Link href='/home' className={stl_but}>
                                        <span><Icon icon='carbon:tools' width={21} height={21}></Icon></span>
                                        <p className='text-md'>Op 2</p>
                                    </Link>
                                </div>

                                <div className='px-2 py-2'>
                                    <Link href='/home' className={stl_but}>
                                        <span><Icon icon='carbon:gears' width={21} height={21}></Icon></span>
                                        <p className='text-md'>Op 3</p>
                                    </Link>
                                </div>

                                <form className='absolute bottom-2 right-2 px-2 py-2'>
                                    <button className='flex flex-row space-x-2 items-center justify-center md:justify-start md:px-4 w-36 py-3 rounded-lg bg-indigo-800 bg-opacity-20 hover:bg-red-500 transition-all'>
                                        <p className='text-md'>Encerrar Sessão</p>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SideNav;