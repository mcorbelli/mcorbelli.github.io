"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
}

function Animation(props: AnimationProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "easeIn", duration: 0.5 }}
    >
      {props.children}
    </motion.div>
  );
}

export default Animation;
