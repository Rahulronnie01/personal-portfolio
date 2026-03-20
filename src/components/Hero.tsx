"use client";

import ScrollyVideo from "@/components/ScrollyVideo";
import Overlay from "@/components/Overlay";
import Image from "next/image";
import { useMotionValue, motion } from "framer-motion";

export default function Hero() {
  const staticProgress = useMotionValue(0);

  return (
    <div className="relative w-full" id="home">
      {/* Desktop View: Scrolly Video */}
      <div className="hidden md:block">
        <ScrollyVideo src="/hero-video.mp4">
          {(progress: any) => <Overlay scrollYProgress={progress} />}
        </ScrollyVideo>
      </div>

      {/* Mobile View: Highly Optimized Static Image */}
      <div className="block md:hidden relative h-[100dvh] w-full overflow-hidden bg-black pt-16">
        <Image
          src="/herrrrooo banner.png"
          alt="Rahul Kumar Hero Background"
          fill
          className="object-cover opacity-85 object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30" />
        <Overlay scrollYProgress={staticProgress} />
      </div>

      {/* Mobile View: Scrollable Mission Statements */}
      <div className="block md:hidden px-6 py-24 space-y-32 bg-[#0a0a0a]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[2.75rem] leading-[1.2] font-bold text-white tracking-tight drop-shadow-lg">
            Building high-growth <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Social Media</span> ecosystems.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-right"
        >
          <h2 className="text-[2.75rem] leading-[1.2] font-bold text-white tracking-tight drop-shadow-lg">
            Scaling brands with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">content, community</span> & analytics.
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
