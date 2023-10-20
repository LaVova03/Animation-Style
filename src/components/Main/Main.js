import './Main.css';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '../../assets/header.jpg';
import First from '../../assets/first.jpg';
import Second from '../../assets/second.jpg';
import Third from '../../assets/third.jpg';
import Fourth from '../../assets/fourth.jpg';
import Background from '../Background/Background';

const Main = () => {
    const [color, setColor] = useState(false);

    useEffect(() => {
        setInterval(function () {
            if (!color) {
                setColor(true)
            }
            if (color) {
                setColor(false)
            }
        }, 1000)
    })

    const arr = [First, Second, Third, Fourth];

    const listVariants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5,
                duration: 1,
            }
        }),
        hidden: { opacity: 0, y: -1000 }
    }

    return (
        <div className='wrap'>
            <Background />
            <motion.img
                className={!color ? 'img-header-yellow' : 'img-header-red'}
                src={Header}
                alt="logo"
                initial={{
                    x: -1000,
                }}
                animate={{
                    x: 0,
                }}
                transition={{
                    duration: 1,
                }}
            />
            <div className='grid'>
                {arr.map((el, i) => (
                    <motion.img className='img-grid' src={el} alt="logo" key={el}
                        variants={listVariants}
                        initial='hidden'
                        animate='visible'
                        custom={i}
                        whileHover={{
                            scale: 1.1,
                        }} />
                ))}
            </div>
        </div>
    )
}

export default Main;
