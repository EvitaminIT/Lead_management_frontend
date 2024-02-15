import { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedDiv = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className="container mx-auto mt-8">
      <button onClick={toggleVisibility} className="bg-blue-500 text-white px-4 py-2 rounded">
        Toggle Visibility
      </button>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, width: isVisible ? 'auto' : 0 }}
        transition={{ duration: 0.5 }}
        style={{ direction: "rtl" }}
        className="bg-gray-200 mt-4 p-4 overflow-hidden"
      >
        This is the animated div
      </motion.div>
    </div>
  );
};

export default AnimatedDiv;

// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const AnimatedDiv = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () => {
//     setIsVisible(prev => !prev);
//   };

//   return (
//     <div className="container mx-auto mt-8">
//       <button onClick={toggleVisibility} className="bg-blue-500 text-white px-4 py-2 rounded">
//         Toggle Visibility
//       </button>
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
//         transition={{ duration: 0.5 }}
//         className="bg-gray-200 mt-4 p-4 overflow-hidden"
//       >
//         This is the animated div
//       </motion.div>
//     </div>
//   );
// };

// export default AnimatedDiv;

