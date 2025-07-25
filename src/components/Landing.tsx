"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Sparkles,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AttendanceSuccess } from "@/components/AttendanceSuccess";
import Tilt from "react-parallax-tilt";

export default function Landing() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAttendance = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setShowSuccess(true);

    // Hide success animation after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Effortlessly manage your attendance with intelligent scheduling",
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description: "Track attendance in real-time with instant notifications",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Connect with your team and stay synchronized",
    },
  ];

  return (
    <>
      <AnimatedBackground />
      <AttendanceSuccess isVisible={showSuccess} />

      <div className="relative min-h-screen overflow-hidden">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 px-6 py-6"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="w-8 h-8 text-gradient" />
              <span className="text-2xl font-bold text-gradient">
                AttendEase
              </span>
            </motion.div>

            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="sm">
                Features
              </Button>
              <Button variant="ghost" size="sm">
                About
              </Button>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="relative z-10 px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full card-gradient border border-[var(--border-color)] mb-8"
            >
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-[var(--text-secondary)]">
                Premium Attendance Management
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient animate-gradient">Transform</span>
              <br />
              Your Attendance Experience
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12"
            >
              Experience the future of attendance management with our
              cutting-edge platform. Simple, elegant, and powerful.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-20"
            >
              <Button
                size="lg"
                onClick={handleAttendance}
                disabled={isLoading}
                className="group relative overflow-hidden glow"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    <span className="relative z-10">Mark Attendance</span>
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}
              </Button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    glareEnable={true}
                    glareMaxOpacity={0.3}
                    glareColor="#ffffff"
                    glarePosition="all"
                    glareBorderRadius="16px"
                  >
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="p-6 rounded-2xl card-gradient border border-[var(--border-color)] hover:border-[var(--accent-primary)] transition-colors h-full"
                    >
                      <feature.icon className="w-12 h-12 text-gradient mb-4 mx-auto" />
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--text-secondary)]">
                        {feature.description}
                      </p>
                    </motion.div>
                  </Tilt>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 blur-2xl opacity-50"
        />
      </div>
    </>
  );
}
