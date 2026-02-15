"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const FollowPointer = ({
  children,
  // revealText,
  // size = 10,
  // revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  // revealText?: string | React.ReactNode;
  // size?: number;
  // revealSize?: number;
  className?: string;
}) => {
  // const [isHovered, setIsHovered] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateMousePosition = (e: any) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);
  const maskSize = 10;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative h-screen", className)}
      transition={{
        backgroundColor: { duration: 0.3 },
      }}
    >
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-black shadow-5xl text-6xl mask-[url(/mask.svg)] mask-no-repeat mask-size-[40px] dark:bg-white"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      ></motion.div>

      <div className="flex h-full w-full items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
};
