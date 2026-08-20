"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const earlyTreatmentBenefits = [
  {
    icon: "mdi:tooth-outline",
    title: "Guide Jaw Growth",
    description:
      "Correct and guide the growth of your child's jaw to help the permanent teeth come in straight",
  },
  {
    icon: "mdi:arrow-expand-horizontal",
    title: "Regulate Arch Width",
    description: "Regulate the width of the upper and lower arches",
  },
  {
    icon: "mdi:format-horizontal-align-center",
    title: "Create Space",
    description: "Create more space for crowded teeth",
  },
  {
    icon: "mdi:tooth",
    title: "Avoid Extractions",
    description: "Avoid the need for permanent tooth extractions later in life",
  },
  {
    icon: "mdi:hand-back-left-off",
    title: "Correct Habits",
    description: "Correct thumb sucking and help improve minor speech problems",
  },
];

const warningSignsList = [
  {
    text: "Early or late loss of baby teeth",
  },
  {
    text: "A hard time chewing or biting food",
  },
  {
    text: "Mouth breathing",
  },
  {
    text: "Finger or thumb sucking",
  },
  {
    text: "Crowded, misplaced, or blocked teeth",
  },
  {
    text: "Jaws that pop or make sounds when opening and closing",
  },
  {
    text: "Teeth that come together abnormally, or do not come together at all",
  },
  {
    text: "Jaws and teeth that are not proportionate to the rest of the face",
  },
  {
    text: "Crowded front teeth around age seven or eight",
  },
];

const ForChildrenBody = () => {
  return (
    <div className="bg-gradient-to-b from-sky-10 via-white to-blue-10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-sky-100 text-sky-700 rounded-full text-xs font-bold mb-4">
            For Children
          </span>
          <h1 className="text-4xl underline decoration-sky-500 md:text-5xl font-bold text-gray-800 mb-6">
            Orthodontics for <span>Children</span>
          </h1>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              While there is no exact age for children to begin orthodontic
              treatment, the American Association of Orthodontists recommends
              visiting the orthodontist around age seven.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              By this age, most children have a mix of baby teeth and adult
              teeth, making it easier for the orthodontist to diagnose and
              correct tooth and jaw problems sooner and without surgery.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-sky-700 font-semibold text-xl">
                Age 7 is Ideal
              </p>
              <p className="text-sky-600 text-sm mt-2">
                Recommended by the American Association of Orthodontists
              </p>
            </div>
          </div>
        </motion.div>

        {/* Early Treatment Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-sky-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
               Early Treatment Benefits
            </h2>
            <p className="text-xl text-sky-100 text-center max-w-3xl mx-auto">
              Early treatment allows your orthodontist to address issues before
              they become more complex.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earlyTreatmentBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-sky-100 group card-treatment card-sky"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Icon
                    icon={benefit.icon}
                    className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning Signs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               Signs Your Child May Need an{" "}
              <span className="text-sky-600">Orthodontist</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              For parents, it&apos;s not always easy to know if your child may
              need orthodontic treatment. Here are a few things to look for:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {warningSignsList.map((sign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-sky-50 p-5 rounded-xl shadow-sm border-l-4 border-sky-500 hover:shadow-md transition-shadow flex items-center gap-4 card-treatment card-sky"
              >
                <p className="text-gray-700 font-medium">{sign.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-sky-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl gap-2 flex items-center justify-center md:text-3xl font-bold mb-4">
            Give Your Child a Beautiful Smile{" "}
            <span className="text-3xl text-white">
              <Icon icon="mdi:emoticon-happy-outline" />
            </span>
          </h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-6">
            Please contact our practice to schedule an appointment for an
            orthodontic evaluation. Early treatment now will give your child a
            healthy, beautiful smile for the future.
          </p>
          <a
            href="/contact-us?ref=appointment-request"
            className="inline-block px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors shadow-sm"
          >
            Schedule an Evaluation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ForChildrenBody;
