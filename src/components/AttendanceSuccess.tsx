"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import React from "react";

interface AttendanceSuccessProps {
  isVisible: boolean;
}

export const AttendanceSuccess: React.FC<AttendanceSuccessProps> = ({
  isVisible,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
        >
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 backdrop-blur-sm"
          />

          {/* Success animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="relative"
          >
            {/* Glowing circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-50"
            />

            {/* Main circle */}
            <motion.div
              className="relative w-32 h-32 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-2xl"
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(99, 102, 241, 0.4)",
                  "0 0 0 20px rgba(99, 102, 241, 0)",
                ],
              }}
              transition={{
                duration: 1,
                repeat: 3,
              }}
            >
              <Check className="w-16 h-16 text-white" />
            </motion.div>

            {/* Sparkles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.cos((i * Math.PI) / 4) * 100,
                  y: Math.sin((i * Math.PI) / 4) * 100,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3 + i * 0.1,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            ))}
          </motion.div>

          {/* Success text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-1/3 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Attendance Marked!
            </h2>
            <p className="text-gray-300">
              Welcome! Your presence has been recorded.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
