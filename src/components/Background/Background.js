import './Background.css';
import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {

    const backgroundVariants = {
        initial: {
            opacity: 0,
            scale: 0.8,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={backgroundVariants}
            style={{
                background: 'rgb(63,94,251)',
                background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(13,2,12,1) 100%)',
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    );
};

export default Background;