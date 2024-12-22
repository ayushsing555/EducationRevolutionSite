import React from 'react';
import {ArrowRight} from 'lucide-react';
import {motion} from 'framer-motion';
import book from '../assests/book.png';


const Intro = () => {
  return (
    <div className="bg-[#69B0FC] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="md:flex md:items-center md:justify-between">
          <motion.div
            className="md:w-1/2"
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#FFE599]">
              Elevate Your Learning with Interactive Quizzes
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#FFE599]">
              Engage, learn, and excel with our adaptive quiz platform. Perfect for students, educators, and lifelong learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition duration-300 flex items-center justify-center"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300"
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className="mt-12 md:mt-0 md:w-1/2"
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <motion.img
              src={book}
              alt="Quiz Platform"
              className="w-full h-auto"
              animate={{y: [0, -10, 0]}}
              transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;