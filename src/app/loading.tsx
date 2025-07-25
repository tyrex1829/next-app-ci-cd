"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--gradient-start)] via-[var(--gradient-mid)] to-[var(--gradient-end)]">
      <motion.div
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 rounded-full border-4 border-indigo-500/20 border-t-indigo-500" />
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-purple-500/20 border-r-purple-500 rotate-45" />
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-pink-500/20 border-b-pink-500 rotate-90" />
      </motion.div>
    </div>
  );
}
