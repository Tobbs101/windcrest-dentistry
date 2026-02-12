"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const treatmentFactors = [
  {
    icon: "mdi:calendar-clock",
    title: "Early Treatment",
    description:
      "Early treatment allows orthodontists to monitor the growth of the jaw and recommend further orthodontic treatment if it becomes necessary. Not everybody receives early orthodontic treatment, and in some cases it may be recommended that a patient wait until they are older to receive treatment.",
  },
  {
    icon: "mdi:tooth-outline",
    title: "What Needs Correction",
    description:
      "The amount of treatment needed to correct a problem will determine how long the process takes. Different patients react to treatments differently, so while it may take one patient only 12 months to complete their treatment, it may take another patient 24 months. Treatment times can vary depending on how quickly your body responds and how much work is needed to give you the show-stopping smile you expect.",
  },
  {
    icon: "mdi:account-star",
    title: "YOU!",
    description:
      "Your willingness to use the appliances your orthodontist gives you plays a major role in the length of time it takes to complete your treatment. Always remember to take care of your braces and appliances; this truly will help make your treatment shorter!",
  },
];

const bracesTypes = [
  {
    icon: "mdi:diamond-stone",
    title: "Ceramic Braces",
    description:
      "Tooth-colored brackets that blend in with your natural smile for a more discreet look.",
  },
  {
    icon: "mdi:eye-off-outline",
    title: "Invisible Braces",
    description:
      "Clear aligners that are virtually invisible, perfect for teens who want a subtle treatment option.",
  },
  {
    icon: "mdi:alpha-l-box-outline",
    title: "Lingual Braces",
    description:
      "Braces placed on the back of your teeth, completely hidden from view.",
  },
  {
    icon: "mdi:cog-outline",
    title: "Traditional Metal Braces",
    description:
      "Classic and effective, now smaller and more comfortable than ever, with fun color options!",
  },
];

const ForTeensBody = () => {
  return (
    <div className="bg-gradient-to-b from-sky-10 via-white to-blue-10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            For Teens
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Orthodontics for <span className="text-sky-600">Teens</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Braces, retainers, and everything else that you want to know about
            orthodontics!
          </p>
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
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-2xl border border-sky-100">
              <p className="text-xl text-gray-700 italic mb-4">
                You&apos;ve just heard the three words that every teen dreads:
              </p>
              <p className="text-3xl font-bold text-sky-600">
                &quot;YOU NEED BRACES!&quot;
              </p>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Braces! What now? 🤔
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Don&apos;t worry! Braces aren&apos;t nearly as scary as you may
              think. In fact, braces today come in a variety of styles,
              materials, and colors, making life with braces much easier, more
              comfortable, and even more stylish than in the past.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
            <div className="text-center p-8">
              <span className="text-8xl mb-4 block">😁</span>
              <p className="text-sky-700 font-semibold text-xl">
                Your Perfect Smile Awaits
              </p>
              <p className="text-sky-600 text-sm mt-2">
                Modern braces are stylish & comfortable
              </p>
            </div>
          </div>
        </motion.div>

        {/* Treatment Duration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              ⏱️ How Long Will I Have to Wear Braces?
            </h2>
            <p className="text-xl text-sky-100 text-center max-w-3xl mx-auto">
              The amount of time it takes to treat your smile with braces
              depends on three key factors:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {treatmentFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sky-100 group"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Icon
                    icon={factor.icon}
                    className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {factor.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Braces Types Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎨 Braces <span className="text-sky-600">Your Way!</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our practice offers a variety of braces, types, and styles to
              choose from. Some common options include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {bracesTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-sky-50 p-6 rounded-2xl shadow-lg border-l-4 border-sky-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon icon={type.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
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
          className="bg-gradient-to-r from-sky-500 via-blue-600 to-sky-700 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl gap-2 flex items-center justify-center md:text-3xl font-bold mb-4">
            Look Good, Feel Good!{" "}
            <span className="text-3xl text-white">
              <Icon icon="mdi:emoticon-cool-outline" />
            </span>
          </h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-6">
            Orthodontic braces are a big part of life for many people your age.
            While braces may have had a bad reputation in the past, today&apos;s
            braces make it easy to look good and feel good! Please contact our
            practice to schedule your next orthodontic checkup.
          </p>
          <a
            href="/contact-us?ref=appointment-request"
            className="inline-block px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors shadow-lg"
          >
            Schedule Your Checkup
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ForTeensBody;
