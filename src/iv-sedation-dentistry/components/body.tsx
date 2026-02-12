"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBg from "@/assets/happy-afro-kid-regular-check-up-teeth-dental-clinic.jpg";
import { Icon } from "@iconify/react";

const processSteps = [
  {
    step: 1,
    icon: "💊",
    title: "Pre-Treatment Relaxation",
    description:
      "About an hour before treatment begins, your child will be given a small pill to help him or her relax.",
  },
  {
    step: 2,
    icon: "🏥",
    title: "Arrival at Our Practice",
    description:
      "When you arrive, our staff will be waiting and will escort you and your child to a private treatment room.",
  },
  {
    step: 3,
    icon: "💉",
    title: "IV Administration",
    description:
      "Your doctor will gently place an IV and administer medication to help your child into a deeper state of relaxation.",
  },
  {
    step: 4,
    icon: "😊",
    title: "Wake Up Refreshed",
    description:
      "Once treatment is complete, your child will wake up feeling refreshed, with little or no memory of the appointment and a beautiful new smile.",
  },
];

const faqs = [
  {
    question: "Will my child feel anything during treatment?",
    answer:
      "In most cases, patients do not feel anything. There is very little discomfort, and many patients wake up feeling relaxed and comfortable with almost no memory of the treatment.",
  },
  {
    question: "Is IV sedation dentistry the same as being unconscious?",
    answer:
      "No. Your child will still be conscious and responsive, however, he or she will be in a deep state of relaxation.",
  },
  {
    question: "Is IV sedation dentistry safe?",
    answer:
      "IV sedation dentistry is a safe and effective way for many patients to receive dental treatment. Before starting treatment with IV sedation, the doctor will talk with you and help you decide if IV sedation is right for your child's treatment.",
  },
  {
    question: "How long will it take the sedation to wear off?",
    answer:
      "The time it takes for the sedatives to wear off depends on the dose received, how long the treatment is, and how quick your child's body can recover.",
  },
];

const candidateCriteria = [
  {
    icon: "😰",
    text: "Extreme dental anxiety or fear of visiting the dentist",
  },
  {
    icon: "💉",
    text: "Fear of needles and/or shots",
  },
  {
    icon: "😢",
    text: "Past traumatic dental experience",
  },
  {
    icon: "👃",
    text: "Can't handle the smells or noises of being at a dentist's office",
  },
  {
    icon: "🦷",
    text: "Has overly sensitive teeth, a strong gag reflex, or trouble getting numb",
  },
  {
    icon: "🔧",
    text: "Requires a more complex dental treatment",
  },
  {
    icon: "✨",
    text: "Wishes to have a more comfortable dental treatment",
  },
];

const IVSedationDentistryBody = () => {
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
              className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4"
            >
              Advanced Comfort
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              IV Sedation <span className="text-sky-500">Dentistry</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We recognize that some of our young patients may feel anxious or
              apprehensive about receiving dental care. Our doctors and staff
              work hard to make sure that your child has a comfortable, positive
              experience.
            </p>
            <p className="text-gray-700 font-medium">
              Feeling anxious about receiving dental care should never prevent
              having a beautiful, healthy smile.
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
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-sky-100 via-sky-200 to-blue-200">
              <Image
                src={HeroBg}
                alt="Child relaxed during IV sedation dental treatment"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Safe & Effective Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-5xl">🛡️</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Customized IV Sedation That is Safe and Effective
              </h2>
              <p className="text-sky-100 leading-relaxed">
                There are different types of sedation dentistry, and working
                together, you and your doctor will decide on a personalized
                treatment plan that will give your child the care he or she
                needs while ensuring comfort every step of the way.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How IV Sedation Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">⚙️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How IV Sedation Dentistry Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures your child&apos;s comfort from
              start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 relative"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.step}
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 mt-2">
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

          {/* Benefit Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">
                  Multiple Procedures in One Visit
                </h4>
                <p className="text-gray-600">
                  Using sedation dentistry, we are able to complete many
                  different procedures, including complex smile makeovers, in
                  just one office visit.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Common Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">❓</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Common Questions About IV Sedation Dentistry
              </h2>
              <p className="text-gray-600 text-sm">
                We understand you may have questions before receiving treatment.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100"
              >
                <h4 className="font-bold text-gray-800 mb-3 flex items-start gap-2">
                  <span className="text-amber-500 flex-shrink-0">Q:</span>
                  {faq.question}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed pl-6">
                  <span className="text-amber-600 font-medium">A:</span>{" "}
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Is My Child a Good Candidate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">✅</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Is My Child a Good Candidate for IV Sedation?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Any patients who experience dental anxiety are good candidates for
              IV sedation dentistry. If your child has any of the following
              fears or concerns, ask your doctor about IV sedation dentistry as
              an option:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {candidateCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-4 border border-gray-100 flex items-center gap-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{criteria.icon}</span>
                </div>
                <p className="text-gray-700 text-sm">{criteria.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personalized Care Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 mb-16 border border-pink-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-2xl">💝</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Personalized Care for Your Family
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Before starting treatment with IV sedation, the doctor will talk
                with you and help you decide if IV sedation is right for your
                child&apos;s treatment. We take the time to understand your
                child&apos;s unique needs and create a customized plan for their
                comfort.
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
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-10 border border-sky-100">
            <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-5xl text-white">
                <Icon icon="dashicons:smiley" />
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Could Your Child Benefit from IV Sedation?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              If you feel that your child could benefit from IV sedation
              dentistry, please contact us and let us know how we can better
              accommodate your family&apos;s needs.
            </p>
            <Link
              href="/contact-us?ref=appointment-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
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

export default IVSedationDentistryBody;
