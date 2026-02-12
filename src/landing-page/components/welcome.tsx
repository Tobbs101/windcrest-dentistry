"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";

const PediatricSections = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.4, // Trigger when 20% of the element is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and 50px below
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Animate into view
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="w-full grid grid-cols-1 gap-10 mt-[30px] lg:grid-cols-2"
    >
      <div className="">
        <h1
          className={cn(
            "w-full text-[24px] md:text-[30px] font-[700] text-left",
          )}
        >
          Pediatric Dentistry
        </h1>
        <p>
          At{" "}
          <a
            className="text-[#AC72AF] hover:underline"
            href="/what-sets-us-apart"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Windcrest Pediatric Dentistry
          </a>
          , our goal is to help your little one learn good oral hygiene skills
          for a lifetime of healthy, happy smiles. We specialize in{" "}
          <a
            className="text-[#AC72AF] hover:underline"
            href="/pediatric-dentistry"
            // target="_blank"
            rel="noopener noreferrer"
          >
            pediatric dentistry
          </a>{" "}
          for infants, children, adolescents, and patients with special needs
          making us uniquely able to work with young patients in a way that
          meets their unique dental needs during the early years of their lives.
          Our office is completely child friendly with televisions above the
          exam chairs, video games in the waiting area, and a treasure trove of
          surprises. This inviting atmosphere, along with our cheerful and
          professional office staff, helps ensure that your children will have a
          fun, memorable and relaxing dental visit experience.
        </p>
      </div>
      <div className="">
        <h1
          className={cn(
            "w-full text-[24px] md:text-[30px] font-[700] text-left",
          )}
        >
          Early Orthodontic Care
        </h1>
        <p>
          Early orthodontic evaluations provide both timely detection of
          problems and greater opportunity for more effective treatment. Prudent
          intervention guides growth and development, preventing serious
          problems later. Following a thorough orthodontic evaluation,{" "}
          <a
            className="text-[#AC72AF] hover:underline"
            href="/meet-dr-patrick-moore"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Dr. Patrick Moore
          </a>{" "}
          can determine if orthodontic treatment is necessary. If early
          orthodontic care is not needed, we will continue to monitor your
          child’s growth and development and begin treatment at the most
          appropriate time. Please contact our{" "}
          <a
            className="text-[#AC72AF] hover:underline"
            href="/contact-us"
            // target="_blank"
            rel="noopener noreferrer"
          >
            San Antonio pediatric dental office
          </a>{" "}
          to schedule an exam and consultation with Drs. Awagu & Moore today!
        </p>
      </div>
    </motion.div>
  );
};

const Welcome = ({ headerClass }: { headerClass?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div className="px-5 bg-white">
      <Container className="py-[50px] sm:py-[70px]">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <h1
              className={cn(
                "w-full text-[36px] tracking-tight leading-none md:text-[48px] font-[700] text-center",
                headerClass,
              )}
            >
              Welcome to Windcrest Pediatric Dentistry
            </h1>
            <p className="mb-[40px] text-[14px] mx-auto text-center font-[400] md:text-base">
              Proudly providing gentle, trusted pediatric dental care to
              families across San Antonio.
            </p>
            <p className="text-[16px] text-center">
              <a
                className="text-[#AC72AF] hover:underline"
                href="/meet-dr-sylvester-awagu"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Sylvester Awagu
              </a>
              ,{" "}
              <a
                className="text-[#AC72AF] hover:underline"
                href="/meet-dr-patrick-moore"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Patrick Moore
              </a>{" "}
              and{" "}
              <a
                className="text-[#AC72AF] hover:underline"
                href="/meet-dr-donald-mills"
                // target="_blank"
                rel="noopener noreferrer"
              >
                Donald Mills
              </a>{" "}
              are your trusted and experienced San Antonio, TX are your trusted
              and experienced San Antonio, TX pediatric dentists and
              orthodontists. Our doctors and{" "}
              <a
                className="text-[#AC72AF] hover:underline"
                href="/meet-the-team"
                // target="_blank"
                rel="noopener noreferrer"
              >
                team
              </a>{" "}
              care about the health and happiness of our patients of all ages,
              and we want them to have a wonderful pediatric dental or
              orthodontic experience. We understand the importance of
              establishing a good oral hygiene regimen early in a child’s life
              and we provide children’s parents with the necessary knowledge and
              treatment to maintain a healthy smile.
            </p>
            <PediatricSections />
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
