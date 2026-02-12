"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBg from "@/assets/happy-afro-kid-regular-check-up-teeth-dental-clinic.jpg";
import { Icon } from "@iconify/react";

const idealCandidates = [
  {
    icon: "🧩",
    title: "Special Needs Children",
    description:
      "Physically, emotionally, or developmentally challenged children who are unable to hold still for dental treatment.",
  },
  {
    icon: "😮",
    title: "Severe Gag Reflex",
    description:
      "Children that have a severe gag reflex that makes traditional dental treatment difficult.",
  },
  {
    icon: "🏥",
    title: "Complex Medical Conditions",
    description:
      "Children with complex medical conditions that make it unsafe to receive dental care in an office situation.",
  },
  {
    icon: "💉",
    title: "Anesthetic Challenges",
    description:
      "Children who have allergies to local anesthetics or experience difficulty achieving numbness.",
  },
];

const preparationSteps = [
  {
    step: 1,
    icon: "🍽️",
    title: "Food & Fluid Guidelines",
    description:
      "Follow the guidelines given to you by the doctor regarding food and fluid intake before and after the procedure.",
  },
  {
    step: 2,
    icon: "💬",
    title: "Discuss with Your Child",
    description:
      "Discuss the procedure with your child using simple terms that he or she can understand.",
  },
  {
    step: 3,
    icon: "🏠",
    title: "Rest at Home",
    description:
      "Let your child rest quietly at home after the procedure. He or she will probably be ready to resume their normal schedule the next day.",
  },
];

const PediatricHospitalDentistryBody = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
              className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4"
            >
              Specialized Care
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Pediatric Hospital{" "}
              <span className="text-teal-500">Dentistry</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              If your child cannot receive dental care in a traditional dental
              office, our practice offers gentle and effective dental care to
              infants, children, and adolescents in the nurturing environment of
              our local hospital.
            </p>
            <p className="text-gray-700 font-medium">
              Through hospital dentistry, you can eliminate the struggles and
              trauma that can lead to a lifetime fear of dental treatment for
              your child.
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
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-100 via-teal-200 to-emerald-200">
              <Image
                src={HeroBg}
                alt="Child receiving hospital dental care"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Unique Service Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">🏥</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Understanding Your Child&apos;s Unique Needs
              </h2>
              <p className="text-teal-100 leading-relaxed">
                As a pediatric dentist in the area to offer this unique service,
                our pediatric dentist has the distinctive ability to understand
                the specific needs of children who need dental care but cannot
                cooperate for safe dental treatment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Is Hospital Dentistry Right for My Child */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">❓</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Is Hospital Dentistry Right for My Child?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pediatric hospital dentistry services are ideal for children in
              the following situations:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {idealCandidates.map((candidate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{candidate.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">
                      {candidate.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {candidate.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Best Option Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">💡</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Best Option</h4>
                <p className="text-gray-600">
                  For these situations, the use of general anesthesia may be the
                  best option for your family.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* General Anesthesia Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">💤</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              General Anesthesia
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
                <span>🌙</span> What is General Anesthesia?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                General anesthesia will put your child into a deep sleep. He or
                she will be unable to feel pain or move around during the
                procedure.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
                <span>👨‍⚕️</span> Professional Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                General anesthesia for dental procedures can be provided by an
                anesthesiologist or dental anesthesiologist. These professionals
                are trained to deliver medication, monitor your child during the
                procedure, and handle any complications that may occur.
              </p>
            </div>
          </div>

          {/* Safety Highlights */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🛡️</span>
              <h4 className="font-bold text-gray-800">Safety Features</h4>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-2xl block mb-2">💊</span>
                <p className="text-gray-700 text-sm font-medium">
                  Trained Medication Delivery
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-2xl block mb-2">📊</span>
                <p className="text-gray-700 text-sm font-medium">
                  Continuous Monitoring
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-2xl block mb-2">⚡</span>
                <p className="text-gray-700 text-sm font-medium">
                  Complication Handling
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Preparing Your Child */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">📋</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Preparing Your Child for General Anesthesia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these important steps to ensure your child is ready for
              their procedure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {preparationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.step}
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-4 mt-2">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reassurance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-16 border border-emerald-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-2xl">💚</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                A Gentle, Caring Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team understands the unique challenges that some children
                face when receiving dental care. We are committed to providing a
                nurturing hospital environment where your child can receive the
                treatment they need safely and comfortably.
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
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 border border-teal-100">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-5xl text-white">
                <Icon icon="dashicons:smiley" />
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Learn More About Hospital Dentistry
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              If you believe your child could benefit from pediatric hospital
              dentistry, please contact us to schedule a consultation and
              discuss your child&apos;s specific needs.
            </p>
            <Link
              href="/contact-us?ref=appointment-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
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

export default PediatricHospitalDentistryBody;
