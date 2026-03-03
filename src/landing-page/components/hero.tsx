"use client";

import React, { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import background from "@/assets/hero_background.webp";
import background2 from "@/assets/images/hero/15454.jpg";
import background3 from "@/assets/images/hero/1580.jpg";
import background4 from "@/assets/images/hero/cute-siblings-posing-together.jpg";
import background5 from "@/assets/images/hero/medium-shot-smiley-kids-posing-together.jpg";

import Image, { StaticImageData } from "next/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import AnimatedBtn from "@/components/ui/animated-btn";

/* ------------------------------------------------------------------ */
/*  Slider images                                                     */
/* ------------------------------------------------------------------ */
const SLIDES: StaticImageData[] = [
  background4,
  background,
  background2,
  background5,
];

const AUTOPLAY_MS = 5000; // time per slide

/* ------------------------------------------------------------------ */
/*  Animated headline                                                 */
/* ------------------------------------------------------------------ */
const lines = ["Healthy Smiles,", "One Child at a Time"];

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" },
  }),
};

const AnimatedText = () => (
  <div className="text-left z-[2] max-w-[90%] w-full mx-auto mb-3">
    {lines.map((line, lineIndex) => (
      <motion.div key={lineIndex}>
        {line.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="text-white font-bold"
            style={{
              fontSize: "clamp(2rem, 5vw, 5rem)",
              lineHeight: "clamp(2.2rem, 5.5vw, 5.5rem)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Hero component                                                    */
/* ------------------------------------------------------------------ */
const Hero = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  /* slide navigation */
  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % SLIDES.length),
    [],
  );

  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="w-full relative lg:h-screen-minus-82 min-h-[80vh] py-[75px] overflow-hidden flex items-start justify-center flex-col gap-2">
      {/* ---------- background image slider ---------- */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={SLIDES[current]}
            alt=""
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* ---------- text content ---------- */}
      <AnimatedText />

      {/* Sub-headline — concise value prop */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        className="z-[2] w-full text-left max-w-[90%] mx-auto text-white text-sm md:text-lg font-medium leading-relaxed"
      >
        San Antonio&apos;s trusted pediatric dentists &amp; orthodontists —
        gentle care in a fun, kid-friendly environment.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
        className="max-w-[90%] w-full mx-auto mt-5 z-[2] flex flex-wrap gap-3"
      >
        <AnimatedBtn
          style={{ boxShadow: "4px 4px 0 0 #AC72AF" }}
          onClick={() => router.push("/contact-us?ref=appointment-request")}
          className="z-[7] rounded-[2px]"
          btnText="Book an Appointment"
        />
      </motion.div>

      {/* ---------- left / right arrows (lg+ only) ---------- */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden lg:flex absolute left-4 bottom-[20px] z-[3] items-center justify-center w-[75px] h-[75px] rounded-sm bg-black/30 hover:bg-black/50 text-white transition-colors duration-200"
      >
        <Icon icon="mdi:chevron-left" className="text-5xl" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden lg:flex absolute right-4 bottom-[20px] z-[3] items-center justify-center w-[75px] h-[75px] rounded-sm bg-black/30 hover:bg-black/50 text-white transition-colors duration-200"
      >
        <Icon icon="mdi:chevron-right" className="text-5xl" />
      </button>

      {/* ---------- slide indicators ---------- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
