"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Value pillars — scannable at-a-glance cards                       */
/* ------------------------------------------------------------------ */
const PILLARS = [
  {
    icon: "mdi:tooth-outline",
    title: "Pediatric Dentistry",
    description:
      "Comprehensive dental care for infants, children, adolescents, and patients with special needs — from first tooth to teen years.",
    link: "/pediatric-dentistry",
  },
  {
    icon: "mdi:emoticon-happy-outline",
    title: "Kid-Friendly Office",
    description:
      "TVs above every chair, video games in the lobby, and a treasure chest of surprises make every visit fun and stress-free.",
    link: "/what-sets-us-apart",
  },
  {
    icon: "boxicons:child",
    title: "Early Orthodontics",
    description:
      "Early evaluations catch issues sooner, guiding healthy growth so your child can avoid bigger problems down the road.",
    link: "/about-orthodontics",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

/* ------------------------------------------------------------------ */
/*  Service cards grid                                                */
/* ------------------------------------------------------------------ */
const ServicePillars = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="w-full grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {PILLARS.map((pillar, i) => (
        <motion.a
          key={pillar.title}
          href={pillar.link}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ boxShadow: "3px 3px 0 0 #AC72AF" }}
          className="group relative flex flex-col rounded-[2px] items-start gap-4 border border-black bg-white p-6 transition-shadow duration-300 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EAF6]">
            <Icon icon={pillar.icon} className="text-[24px] text-[#AC72AF]" />
          </div>
          <h3 className="text-[20px] font-[700] leading-tight">
            {pillar.title}
          </h3>
          <p className="text-[16px] leading-normal text-gray-600">
            {pillar.description}
          </p>
          <span className="mt-auto inline-flex items-center gap-1 text-[12px] font-semibold text-[#AC72AF] group-hover:underline">
            Learn more
            <Icon icon="mdi:arrow-right" className="text-base" />
          </span>
        </motion.a>
      ))}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Meet the doctors — concise blurb                                  */
/* ------------------------------------------------------------------ */
const DoctorsBlurb = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mt-14 rounded-lg bg-[#FAF5FB] p-8 text-center"
    >
      <h2 className="text-[24px] font-[700] md:text-[28px]">
        Meet Your Doctors
      </h2>
      <p className="mx-auto mt-3 max-w-[700px] text-[15px] leading-relaxed text-gray-600">
        <a
          className="font-semibold text-[#AC72AF] hover:underline"
          href="/meet-dr-sylvester-awagu"
        >
          Dr. Sylvester Awagu
        </a>
        ,{" "}
        <a
          className="font-semibold text-[#AC72AF] hover:underline"
          href="/meet-dr-patrick-moore"
        >
          Dr. Patrick Moore
        </a>{" "}
        &amp;{" "}
        <a
          className="font-semibold text-[#AC72AF] hover:underline"
          href="/meet-dr-donald-mills"
        >
          Dr. Donald Mills
        </a>{" "}
        are board-experienced pediatric dentists and orthodontists serving San
        Antonio families. Together with our friendly{" "}
        <a
          className="font-semibold text-[#AC72AF] hover:underline"
          href="/meet-the-team"
        >
          team
        </a>
        , they make every visit positive, educational, and fun.
      </p>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Welcome section                                                   */
/* ------------------------------------------------------------------ */
const Welcome = ({ headerClass }: { headerClass?: string }) => {
  const router = useRouter();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="px-5 bg-white">
      <Container className="py-[50px] sm:py-[70px]">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="flex flex-col items-center"
        >
          {/* Headline */}
          <h1
            className={cn(
              "w-full text-[32px] tracking-tight leading-tight md:text-[44px] font-[700] text-center",
              headerClass,
            )}
          >
            Welcome to Windcrest Pediatric Dentistry
          </h1>
          <p className="mt-2 mb-2 max-w-[600px] text-[15px] mx-auto text-center text-gray-600 md:text-base">
            Proudly providing gentle, trusted pediatric dental care to families
            across San Antonio.
          </p>

          {/* Scannable service pillars */}
          <ServicePillars />

          {/* Doctors blurb */}
          <DoctorsBlurb />

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <button
              onClick={() => router.push("/contact-us?ref=appointment-request")}
              style={{ boxShadow: "4px 4px 0 0 #AC72AF" }}
              className="duration-300 rounded-[2px] outline-none focus:ring-0 focus-visible:ring-0 cursor-pointer px-10 py-4 relative overflow-hidden border border-black"
            >
              <div
                className={cn(
                  "flex items-center font-normal justify-center gap-1",
                )}
              >
                Schedule a Visit <ArrowRight />
              </div>
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Welcome;
