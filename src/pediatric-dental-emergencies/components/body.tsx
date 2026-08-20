"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBg from "@/assets/little-baby-girl-dentist-chair-children-dental.jpg";
import { Icon } from "@iconify/react";

const emergencyTypes = [
  {
    id: "bitten-lip-tongue",
    title: "Bitten Lip or Tongue",
    color: "pink",
    steps: [
      "Clean the bite gently with water",
      "Use a cold compress (cold, wet towel or washcloth pressed firmly against the area)",
      "This helps reduce or avoid swelling",
      "Give us a call to help determine how serious the bite is",
    ],
  },
  {
    id: "object-caught",
    title: "Object Caught In Teeth",
    color: "amber",
    steps: [
      "Use dental floss to gently remove the object",
      "Never use a metal, plastic, or sharp tool to remove a stuck object",
      "If you are unable to remove the item with dental floss, give us a call",
    ],
  },
  {
    id: "broken-chipped",
    title: "Broken, Chipped, or Fractured Tooth",
    color: "violet",
    steps: [
      "Have your child rinse their mouth with warm water",
      "Use a cold compress to reduce swelling",
      "Try to locate and save the tooth fragment that broke off",
      "Call us immediately",
    ],
  },
  {
    id: "knocked-out",
    title: "Knocked Out Tooth",
    color: "red",
    steps: [
      "Find the tooth and rinse it with water (no soap)",
      "Only touch the crown of the tooth (the part you can see when it's in place)",
      "Place the tooth in a clean container with milk",
      "Call us immediately and/or head to the hospital",
      "If you act quickly it's possible to save the tooth",
    ],
  },
  {
    id: "loose-tooth",
    title: "Loose Tooth",
    color: "teal",
    steps: [
      "If your child has a very loose tooth, it should be removed",
      "This avoids the risk of being swallowed or inhaled",
    ],
  },
  {
    id: "toothache",
    title: "Toothache",
    color: "orange",
    steps: [
      "Rinse their mouth with warm water",
      "Inspect the teeth to be sure there is nothing caught between them",
      "If pain continues, use a cold compress to ease the pain",
      "Do not apply heat or any kind of aspirin or topical pain reliever directly to the affected area",
      "Children's pain relievers may be taken orally",
      "Schedule an appointment immediately",
    ],
  },
  {
    id: "broken-jaw",
    title: "Broken Jaw",
    color: "rose",
    steps: [
      "Use a cold compress to reduce swelling",
      "Call our emergency number and/or head to the hospital immediately",
      "Severe blows to the head can be dangerous and even life-threatening",
    ],
  },
];

const preventionTips = [
  {
    title: "Child-Proof Your House",
    description: "Prevent falls by making your home safe for children.",
  },
  {
    title: "Avoid Hard Foods",
    description:
      "Don't let your child chew on ice, popcorn kernels, or other hard foods.",
  },
  {
    title: "Car Safety",
    description:
      "Always use car seats for young children and require seat belts for older children.",
  },
  {
    title: "Wear a Mouthguard",
    description:
      "If your child plays contact sports, have them wear a mouthguard.",
  },
  {
    title: "Regular Oral Care",
    description:
      "Prevent toothaches with regular brushing, flossing, and visits to our office.",
  },
];

const getColorClasses = (color: string) => {
  const colorMap: Record<
    string,
    { bg: string; border: string; header: string }
  > = {
    pink: {
      bg: "from-pink-50 to-rose-50",
      border: "border-pink-200",
      header: "from-pink-500 to-rose-500",
    },
    amber: {
      bg: "from-amber-50 to-orange-50",
      border: "border-amber-200",
      header: "from-amber-500 to-orange-500",
    },
    violet: {
      bg: "from-violet-50 to-purple-50",
      border: "border-violet-200",
      header: "from-violet-500 to-purple-500",
    },
    red: {
      bg: "from-red-50 to-rose-50",
      border: "border-red-200",
      header: "from-red-500 to-rose-500",
    },
    teal: {
      bg: "from-teal-50 to-emerald-50",
      border: "border-teal-200",
      header: "from-teal-500 to-emerald-500",
    },
    orange: {
      bg: "from-orange-50 to-amber-50",
      border: "border-orange-200",
      header: "from-orange-500 to-amber-500",
    },
    rose: {
      bg: "from-rose-50 to-red-50",
      border: "border-rose-200",
      header: "from-rose-500 to-red-500",
    },
  };
  return colorMap[color] || colorMap.pink;
};

const PediatricDentalEmergenciesBody = () => {
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
              className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold mb-4"
            >
              Emergency Care
            </motion.span>
            <h1 className="text-4xl underline decoration-red-500 md:text-5xl font-bold text-gray-800 mb-6">
              Pediatric Dental <span>Emergencies</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              If you face a dental emergency, give us a call immediately. If you
              need urgent treatment after hours, you can call our emergency
              number. We are always here to assist when your child&apos;s dental
              health is at risk.
            </p>
            <p className="text-gray-700 font-medium">
              Below are tips on dealing with urgent dental situations. You may
              want to display this list on your refrigerator or store it near
              your emergency phone numbers for easy reference.
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
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-red-100 via-red-200 to-rose-200">
              <Image
                src={HeroBg}
                alt="Pediatric dental emergency care"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-rose-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Emergency Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500 to-rose-600 rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  Dental Emergency?
                </h2>
                <p className="text-red-100">
                  Call us immediately. We&apos;re here to help 24/7.
                </p>
              </div>
            </div>
            <Link
              href="/contact-us?ref=emergency"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-full hover:shadow-sm transition-all duration-300"
            >
              Contact Us Now
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

        {/* Emergency Types Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Emergency Situations & What To Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quick reference guide for handling common pediatric dental
              emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {emergencyTypes.map((emergency, index) => {
              const colors = getColorClasses(emergency.color);
              return (
                <motion.div
                  key={emergency.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${colors.bg} rounded-2xl border ${colors.border} overflow-hidden card-treatment card-red`}
                >
                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${colors.header} px-5 py-3`}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-white">
                        {emergency.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <ul className="space-y-2">
                      {emergency.steps.map((step, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-700 text-sm"
                        >
                          <span className="text-gray-400 mt-1">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
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

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-3xl font-bold">Avoiding Injury</h2>
            </div>

            <p className="text-emerald-100 leading-relaxed mb-8 max-w-3xl">
              You can help your child avoid dental emergencies with these
              preventive measures:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {preventionTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <h4 className="font-bold text-white mb-1">{tip.title}</h4>
                  <p className="text-emerald-200 text-sm">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Custom Mouthguard Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 mb-16 border border-sky-200 card-treatment card-red"
        >
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Custom-Fitted Mouthguards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ask us about creating a custom-fitted mouthguard for your child.
                Custom mouthguards provide superior protection and comfort
                compared to store-bought options, especially for children who
                play contact sports.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Print Reference Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-16 border border-amber-200 card-treatment card-red"
        >
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Keep This Reference Handy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Consider printing this emergency guide and displaying it on your
                refrigerator or storing it near your emergency phone numbers for
                easy reference when you need it most.
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
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-10 border border-red-100 card-treatment card-red">
            <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-5xl text-white">
                <Icon icon="dashicons:smiley" />
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              We&apos;re Here When You Need Us
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Don&apos;t hesitate to call us for any dental emergency. Our team
              is ready to provide immediate care and guidance for your child.
            </p>
            <Link
              href="/contact-us?ref=emergency"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold rounded-full hover:shadow-sm transition-all duration-300"
            >
              Contact Emergency Line
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

export default PediatricDentalEmergenciesBody;
