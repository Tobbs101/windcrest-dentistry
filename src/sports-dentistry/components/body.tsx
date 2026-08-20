"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBg from "@/assets/young-fitness-woman-sportswear-with-headband-holding-soccer-ball-smiling-confident-happy-positive-standing-purple-wall.jpg";
import { Icon } from "@iconify/react";
import { Trophy } from "lucide-react";

const knockedOutTips = [
  {
    text: "Time is crucial – get to your dentist within 30 minutes if possible.",
    important: true,
  },
  {
    text: "Do not try to re-implant the tooth yourself.",
    important: false,
  },
  {
    text: "Transport the tooth in cold milk. If unavailable, use saliva, saline, or water.",
    important: false,
  },
  {
    text: "Don't let the tooth dry out and don't wrap it in anything.",
    important: false,
  },
  {
    text: "Don't touch the tooth root if you can avoid it.",
    important: false,
  },
];

const chippedCrackedTips = [
  {
    text: "Your dentist will likely use an X-ray to determine the treatment necessary.",
  },
  {
    text: "For a serious chip that exposes the pulp of the tooth, get to your dentist as soon as possible.",
  },
  {
    text: "Sometimes the tooth can be fixed with a filling or bonding alone.",
  },
  {
    text: "Cracks affecting the nerve of the tooth may need more complicated treatment.",
  },
];

const displacedTips = [
  {
    text: "See your dentist as soon as possible.",
  },
  {
    text: "Do not try to move the tooth back on your own.",
  },
  {
    text: "For any mouth discomfort before you get to the dentist, apply ice.",
  },
];

const injuryTypes = [
  {
    id: "knocked-out",
    title: "Tooth Knocked Out",
    color: "red",
    tips: knockedOutTips,
  },
  {
    id: "chipped-cracked",
    title: "Tooth Chipped/Cracked",
    color: "amber",
    tips: chippedCrackedTips,
  },
  {
    id: "displaced",
    title: "Tooth Displaced",
    color: "violet",
    tips: displacedTips,
  },
];

const SportsDentistryBody = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-4"
            >
              Active Lifestyles
            </motion.span>
            <h1 className="text-4xl underline decoration-orange-500 md:text-5xl font-bold text-gray-800 mb-6">
              Sports <span>Dentistry</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sports dentistry is the prevention and treatment of dental
              injuries and related oral diseases, as well as the sharing of
              information and equipment designed to help protect the teeth,
              mouth, jaw, and face of athletes of all ages.
            </p>
            <p className="text-gray-700 font-medium">
              It&apos;s important to protect your child&apos;s smile if he or
              she plays sports, for aesthetics as well as health reasons.
            </p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-orange-100 via-orange-200 to-amber-200">
              <Image
                src={HeroBg}
                alt="Young athlete with healthy smile"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Injury Alert Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Injuries Are Common Among Athletes
              </h2>
              <p className="text-orange-100 leading-relaxed">
                Injuries to the teeth and mouth are common among athletes.
                Knowing what to do when an injury occurs can make the difference
                between saving and losing a tooth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Common Dental Injuries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Common Dental Injuries in Sports
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Know how to respond to different types of dental injuries to give
              your child the best chance of recovery.
            </p>
          </div>

          <div className="space-y-6">
            {injuryTypes.map((injury, index) => (
              <motion.div
                key={injury.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-sm border overflow-hidden card-treatment card-orange ${
                  injury.color === "red"
                    ? "border-red-200"
                    : injury.color === "amber"
                      ? "border-amber-200"
                      : "border-violet-200"
                }`}
              >
                {/* Header */}
                <div
                  className={`p-4 ${
                    injury.color === "red"
                      ? "bg-gradient-to-r from-red-500 to-rose-500"
                      : injury.color === "amber"
                        ? "bg-gradient-to-r from-amber-500 to-orange-500"
                        : "bg-gradient-to-r from-violet-500 to-purple-500"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white">
                      {injury.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {injury.tips.map((tip, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 ${
                          "important" in tip && tip.important
                            ? "bg-red-50 rounded-lg p-3 border border-red-100"
                            : ""
                        }`}
                      >
                        <p
                          className={`text-gray-700 ${
                            "important" in tip && tip.important
                              ? "font-medium"
                              : ""
                          }`}
                        >
                          {tip.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Preventing Injury Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold">Preventing Injury</h2>
              </div>
              <p className="text-emerald-100 leading-relaxed mb-4">
                One of the best ways to prevent injury to your child&apos;s
                teeth and mouth is to have him or her wear a mouthguard while
                playing sports.
              </p>
              <p className="text-emerald-100 leading-relaxed">
                There are several types of mouthguards to choose from, and your
                doctor can help you choose the best one for your child&apos;s
                particular needs.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 rounded-2xl p-8 backdrop-blur-sm text-center">
                <div className="flex justify-center gap-2 mb-3">
                  <Trophy className="size-8" aria-hidden="true" />
                </div>
                <p className="text-white font-bold text-lg">
                  Mouthguards for All Sports
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mouthguard Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100 mb-16 card-treatment card-orange"
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Types of Mouthguards
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200 card-treatment card-orange">
              <h4 className="font-bold text-gray-800 mb-2">
                Stock Mouthguards
              </h4>
              <p className="text-gray-600 text-sm">
                Pre-formed and ready to wear. Available at most sporting goods
                stores.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200 card-treatment card-orange">
              <h4 className="font-bold text-gray-800 mb-2">
                Boil-and-Bite Mouthguards
              </h4>
              <p className="text-gray-600 text-sm">
                Softened in hot water, then shaped around the teeth for a better
                fit.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200 card-treatment card-orange">
              <h4 className="font-bold text-gray-800 mb-2">
                Custom-Fitted Mouthguards
              </h4>
              <p className="text-gray-600 text-sm">
                Made by your dentist for the best fit, comfort, and protection.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Reference Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-16 border border-amber-200 card-treatment card-orange"
        >
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quick Reference: What to Do in an Emergency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Save this information or keep it with your child&apos;s sports
                gear. In case of a dental injury, quick action and knowing what
                to do can make all the difference in saving a tooth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-10 border border-orange-100 card-treatment card-orange">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-5xl text-white">
                <Icon icon="dashicons:smiley" />
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Protect Your Young Athlete&apos;s Smile
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Schedule an appointment to discuss mouthguard options and keep
              your child&apos;s smile safe during sports activities.
            </p>
            <Link
              href="/contact-us?ref=appointment-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-sm transition-all duration-300"
            >
              Schedule Appointment
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsDentistryBody;
