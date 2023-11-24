"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.main
      initial={{ y: 30, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ y: 30, opacity: 0 }}
      className="flex min-h-screen flex-col 
    justify-center p-24 items-center"
    >
      <div className="">
        <h1 className="text-[50px]">Frank Jordan Zone&apos;s Portfolio</h1>
      </div>
    </motion.main>
  );
}
