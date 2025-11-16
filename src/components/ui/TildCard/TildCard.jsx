"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { clamp } from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // spring yang halus banget
  const springConfig = { stiffness: 80, damping: 15, mass: 0.6 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;

    // nilai lebih smooth karena posisi mouse relatif terhadap container
    const rX = (posY - 0.5) * -ROTATION_RANGE;
    const rY = (posX - 0.5) * ROTATION_RANGE;

    // batasi supaya tidak ekstrim
    x.set(clamp(-HALF_ROTATION_RANGE, HALF_ROTATION_RANGE, rX));
    y.set(clamp(-HALF_ROTATION_RANGE, HALF_ROTATION_RANGE, rY));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="flex items-center justify-center bg-transparent mb-10"
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          transform,
          backgroundImage: "url(/card.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-96 w-72 rounded-xl shadow-lg overflow-hidden"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
            background: "transparent",
          }}
          className="absolute inset-0 rounded-xl"
        ></div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
