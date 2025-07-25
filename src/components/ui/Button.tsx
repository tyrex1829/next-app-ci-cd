"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    MotionProps {
  asChild?: boolean;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : motion.button;
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
          {
            default:
              "button-gradient text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
            ghost: "hover:bg-white/10 hover:text-white",
            outline:
              "border border-[var(--border-color)] bg-transparent hover:bg-white/10 hover:text-white",
          }[variant],
          {
            default: "h-12 px-8 py-3 text-base",
            sm: "h-9 px-4 py-2",
            lg: "h-14 px-10 py-4 text-lg",
            icon: "h-10 w-10",
          }[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
