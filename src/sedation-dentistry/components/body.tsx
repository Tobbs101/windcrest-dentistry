"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBg from "@/assets/happy-afro-kid-regular-check-up-teeth-dental-clinic.jpg";
import { Icon } from "@iconify/react";
import { Pill, Wind } from "lucide-react";

const sedationBenefits = [
  {
    title: "No Memory of Procedure",
    description: "Your child will have no recollection of the treatment.",
  },
  {
    title: "No Sense of Time",
    description: "Time passes quickly while under sedation.",
  },
  {
    title: "No Sense of Smell or Sound",
    description: "Sensory experiences are minimized during treatment.",
  },
  {
    title: "No Fear or Anxiety",
    description: "Your child remains calm and relaxed throughout.",
  },
];

const whoCanBenefit = [
  {
    title: "Fear or Anxiety",
    description:
      "Children who experience fear or anxiety about visiting the dentist.",
  },
  {
    title: "Difficulty Sitting Still",
    description:
      "Children who have a hard time sitting still for long periods.",
  },
  {
    title: "Anesthetic Challenges",
    description:
      "Children who have difficulty getting or staying numb from anesthetics.",
  },
];

const sedationLevels = [
  {
    level: "Mild",
    title: "Mild Sedation (Anxiolysis)",
    color: "emerald",
    description:
      "The lightest form of sedation dentistry, often used for children with mild anxiety, longer procedures, or more complex situations. Usually administered orally.",
    details: [
      "Child remains awake or very sleepy",
      "Able to breathe normally",
      "Feels a great sense of relaxation",
      "Recovery within a few hours",
    ],
    note: "Nitrous oxide (laughing gas) is another form of mild to moderate sedation.",
  },
  {
    level: "Moderate",
    title: "Moderate Sedation",
    color: "amber",
    description:
      "Used for patients with moderate dental anxiety and for those who need longer or more complex procedures. Often involves light IV sedation.",
    details: [
      "Child remains awake throughout",
      "Deep state of relaxation",
      "Responsive to verbal cues",
      "Reduced awareness of surroundings",
    ],
    note: null,
  },
  {
    level: "Deep",
    title: "Deep Sedation",
    color: "violet",
    description:
      "Patients go between consciousness and unconsciousness during their dental procedure.",
    details: [
      "No recollection of treatment",
      "Unable to respond to commands",
      "May be awake at times during procedure",
      "Closely monitored throughout",
    ],
    note: null,
  },
];

const administrationMethods = [
  {
    title: "Inhalation",
    subtitle: "Nitrous Oxide (Laughing Gas)",
    description:
      "The most frequently used method for easing mild to moderate anxiety. Recovery is quick so your child can resume normal activities immediately.",
    color: "sky",
  },
  {
    title: "Oral",
    subtitle: "Prescription Medication",
    description:
      "An extremely common technique for dental sedation. It is easy and does not require the use of needles. Your child will be given a prescription pill which, taken about an hour before the appointment, will have your child fully relaxed by the time you arrive.",
    color: "pink",
  },
];

const SedationDentistryBody = () => {
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
              className="inline-block px-4 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-bold mb-4"
            >
              Comfortable Care
            </motion.span>
            <h1 className="text-4xl underline decoration-violet-500 md:text-5xl font-bold text-gray-800 mb-6">
              Sedation <span>Dentistry</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Imagine your child undergoing a complex dental treatment like a
              root canal, extraction, or oral surgery. When treatment is
              complete, your child will have no recollection of the time it
              took, the pain, the noise, or the discomfort.
            </p>
            <p className="text-gray-700 font-medium">
              We are pleased to offer your child the option of comfortable,
              safe, and effective sedation dentistry.
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
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-violet-100 via-violet-200 to-purple-200">
              <Image
                src={HeroBg}
                alt="Child relaxed during dental treatment"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Who Can Benefit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who Can Benefit from Sedation Dentistry?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our pediatric dental patients who benefit from sedation dentistry
              include:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whoCanBenefit.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow text-center card-treatment card-violet"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What is Sedation Dentistry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                What is Sedation Dentistry?
              </h2>
            </div>
            <p className="text-violet-100 text-lg leading-relaxed mb-8 max-w-3xl">
              Sedation dentistry allows your pediatric dentist to provide a
              variety of dental treatments safely and comfortably for children
              who experience anxiety when visiting the dentist.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sedationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                >
                  <h4 className="font-bold text-white mb-1">{benefit.title}</h4>
                  <p className="text-violet-200 text-sm">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Levels of Sedation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Levels of Sedation
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Sedation dentistry is closely regulated by law, and there are
              three sedative states at which your child&apos;s dentist can
              administer treatment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {sedationLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-sm border overflow-hidden card-treatment card-violet ${
                  level.color === "emerald"
                    ? "border-emerald-200"
                    : level.color === "amber"
                      ? "border-amber-200"
                      : "border-violet-200"
                }`}
              >
                {/* Header */}
                <div
                  className={`p-4 ${
                    level.color === "emerald"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                      : level.color === "amber"
                        ? "bg-gradient-to-r from-amber-500 to-orange-500"
                        : "bg-gradient-to-r from-violet-500 to-purple-500"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="text-white/80 text-sm font-medium">
                        {level.level} Sedation
                      </span>
                      <h3 className="text-white font-bold">{level.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {level.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {level.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <span
                          className={`mt-1 ${
                            level.color === "emerald"
                              ? "text-emerald-500"
                              : level.color === "amber"
                                ? "text-amber-500"
                                : "text-violet-500"
                          }`}
                        >
                          <span className="block size-1.5 rounded-full bg-current" />
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  {level.note && (
                    <div
                      className={`rounded-lg p-3 text-sm ${
                        level.color === "emerald"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                          : level.color === "amber"
                            ? "bg-amber-50 text-amber-700 border border-amber-100"
                            : "bg-violet-50 text-violet-700 border border-violet-100"
                      }`}
                    >
                       {level.note}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How are Sedatives Administered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100 mb-16 card-treatment card-violet"
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              How Are Sedatives Administered?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {administrationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-6 ${
                  method.color === "sky"
                    ? "bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200"
                    : "bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      method.color === "sky"
                        ? "bg-gradient-to-br from-sky-400 to-blue-500"
                        : "bg-gradient-to-br from-pink-400 to-rose-500"
                    }`}
                  >
                    {method.color === "sky" ? (
                      <Wind className="size-7 text-white" aria-hidden="true" />
                    ) : (
                      <Pill className="size-7 text-white" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {method.title}
                    </h3>
                    <p
                      className={`text-sm font-medium mb-2 ${
                        method.color === "sky"
                          ? "text-sky-600"
                          : "text-pink-600"
                      }`}
                    >
                      {method.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-16 border border-emerald-200 card-treatment card-violet"
        >
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Safe & Regulated
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sedation dentistry is closely regulated by law to ensure your
                child&apos;s safety. Our team is fully trained and certified to
                administer sedation, and we carefully monitor your child
                throughout the entire procedure to ensure their comfort and
                well-being.
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
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-10 border border-violet-100 card-treatment card-violet">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-5xl text-white">
                <Icon icon="dashicons:smiley" />
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Learn More About Sedation Options
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Please contact our practice to schedule a consultation, learn more
              about sedation dentistry, and find out which sedation method may
              be right for your child.
            </p>
            <Link
              href="/contact-us?ref=appointment-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-sm transition-all duration-300"
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

export default SedationDentistryBody;
