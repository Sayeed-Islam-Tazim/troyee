"use client";
import { ImagesSlider } from "@/components/ui/image-slider";
import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Header = () => {
  return (
    <ImagesSlider
      className="h-160 flex flex-col items-start justify-center px-20"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 "
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </motion.p> */}
        <motion.p
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" text-xl md:text-2xl text-start bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400"
        >
          New Arrivals
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-semibold text-xl md:text-6xl text-start bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400 py-4"
        >
          New Spring Collection <br /> 2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=" text-xl md:text-2xl text-start bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400"
        >
          STARTING FROM ৳ 799
        </motion.p>
        <div>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 me-4">
            <span>Explore Now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-linear-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Shop Now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-linear-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
};

export default Header;
