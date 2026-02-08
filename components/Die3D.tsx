import React from 'react';
import { motion } from 'framer-motion';

interface Die3DProps {
  rolling: boolean;
}

export const Die3D: React.FC<Die3DProps> = ({ rolling }) => {
  // We use CSS transforms to build a cube
  const faceCommon = "absolute w-full h-full border-2 border-white/20 flex items-center justify-center text-4xl font-bold backface-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]";
  
  // Random rotation for the "rolling" effect
  const rollVariants = {
    idle: { 
      rotateX: -25, 
      rotateY: -25,
      transition: { duration: 0.5 }
    },
    rolling: {
      rotateX: [0, 360, 720, 1080, 1440],
      rotateY: [0, 360, 720, 1080, 1440],
      rotateZ: [0, 180, 360, 180, 0],
      transition: { 
        duration: 3, 
        ease: "linear", // Keep it spinning aggressively
        repeat: Infinity 
      }
    }
  };

  return (
    <div className="w-48 h-48 perspective-1000 mx-auto my-12">
      <motion.div
        className="relative w-full h-full transform-style-3d text-white"
        variants={rollVariants}
        animate={rolling ? "rolling" : "idle"}
      >
        {/* Front - Blitz (1) */}
        <div className={`${faceCommon} bg-blue-600 translate-z-[96px]`}>
           <span className="font-display">BLITZ</span>
        </div>

        {/* Back - Blitz (6) */}
        <div className={`${faceCommon} bg-blue-600 rotate-y-180 translate-z-[96px]`}>
           <span className="font-display">BLITZ</span>
        </div>

        {/* Right - Fire (3) */}
        <div className={`${faceCommon} bg-gradient-to-br from-yellow-500 to-red-600 rotate-y-90 translate-z-[96px]`}>
             <span className="font-display">FIRE</span>
        </div>

        {/* Left - Nature (2) */}
        <div className={`${faceCommon} bg-gradient-to-br from-green-500 to-amber-800 rotate-y-[-90deg] translate-z-[96px]`}>
            <span className="font-display text-2xl">NATURE</span>
        </div>

        {/* Top - All (5) */}
        <div className={`${faceCommon} bg-gradient-to-tr from-red-500 via-green-500 to-blue-500 rotate-x-90 translate-z-[96px]`}>
             <span className="font-display text-2xl">ALL</span>
        </div>

        {/* Bottom - Mystic (4) */}
        <div className={`${faceCommon} bg-black rotate-x-[-90deg] translate-z-[96px] border-purple-500`}>
             <span className="font-display text-purple-400">VOID</span>
        </div>
      </motion.div>
    </div>
  );
};