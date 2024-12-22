import React from 'react';
import {motion} from 'framer-motion';

const FeatureCard = ({icon, title, description}) => {
  return (
    <motion.div
      className="bg-[#FFFFFF] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
      variants={{
        initial: {opacity: 0, y: 50},
        animate: {opacity: 1, y: 0}
      }}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-[#dce0d9] rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#69B0FC]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;