"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBg from "@/assets/happy-afro-kid-regular-check-up-teeth-dental-clinic.jpg";
import { Icon } from "@iconify/react";
import { Check, CircleCheck, TriangleAlert } from "lucide-react";

const quitTips = [
  {
    title: "Be Supportive & Positive",
    description:
      "Instead of punishing your child for thumb-sucking, give praise when he or she doesn't.",
  },
  {
    title: "Use Gentle Reminders",
    description:
      "Put a band-aid on your child's thumb or a sock over the hand at night. Let your little one know this is not a punishment, but a way to help remember to avoid sucking.",
  },
  {
    title: "Start a Progress Chart",
    description:
      "Let your child put a sticker up every day that he or she doesn't suck. If your child makes it through a week without sucking, he or she gets to choose a prize.",
  },
  {
    title: "Address the Anxiety",
    description:
      "If you notice your child sucking when anxious, work on alleviating the anxiety rather than focusing on the thumb-sucking.",
  },
  {
    title: "Create Diversions",
    description:
      "Take note of the times your child tends to suck (long car rides, while watching movies) and create diversions during these occasions.",
  },
  {
    title: "Explain the Consequences",
    description:
      "Explain clearly what might happen to the teeth if he or she keeps thumb-sucking.",
  },
];

const warningSignsData = [
  {
    type: "passive",
    title: "Passive Sucking",
    description:
      "Thumb gently resting inside the mouth – less likely to cause damage.",
    color: "emerald",
  },
  {
    type: "aggressive",
    title: "Aggressive Sucking",
    description:
      "Placing pressure on the mouth or teeth – may cause problems with tooth alignment and proper mouth growth.",
    color: "amber",
  },
];

const ThumbSuckingBody = () => {
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
              className="inline-block px-4 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold mb-4"
            >
              Childhood Habits
            </motion.span>
            <h1 className="text-4xl underline decoration-pink-500 md:text-5xl font-bold text-gray-800 mb-6">
              Thumb <span>Sucking</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Along with favorite blankets, teddy bears, and nap time,
              thumb-sucking can be one of the most comforting aspects of
              childhood. According to a recent report, between 75% and 95% of
              infants suck their thumbs, so chances are there&apos;s a
              thumb-sucker (or a former thumb-sucker) in your family.
            </p>
            <p className="text-gray-700 font-medium">
              In most cases, this is no cause for worry. However, it&apos;s
              important to pay attention to your child&apos;s habits in case
              their behavior has the potential to affect overall oral health.
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
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200">
              <Image
                src={HeroBg}
                alt="Happy child at dental checkup"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-rose-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* What is Normal Thumb-Sucking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100 mb-16 card-treatment card-pink"
        >
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              What is Normal Thumb-Sucking Behavior?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most children begin sucking their thumbs or fingers from a very
                young age; many even start inside the womb. Sucking is a natural
                reflex for an infant and it serves an important purpose.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sucking often provides a sense of security and contentment for a
                young one. It can also be relaxing, which is why many children
                suck their thumbs as they fall asleep.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl p-6 border border-sky-100 card-treatment card-pink">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="font-bold text-gray-800">
                  American Dental Association
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most children stop thumb-sucking on their own between the ages
                of two and four. They simply grow out of a habit that is no
                longer useful to them. However, some children continue sucking
                beyond the preschool years.
              </p>
              <div className="mt-4 bg-white rounded-lg p-3 border border-sky-200 card-treatment card-pink">
                <p className="text-sky-700 font-medium text-sm">
                   Studies show that the older a child gets, the lower the
                  chances are of continuing the habit.
                </p>
              </div>
            </div>
          </div>

          {/* When to Take Action */}
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 card-treatment card-pink">
            <div className="flex items-start gap-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  When to Take Action
                </h4>
                <p className="text-gray-600">
                  If your child is still sucking when his or her permanent teeth
                  start to erupt, it may be time to take action to break the
                  habit.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What Signs Should I Watch For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Signs Should I Watch For?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              First, take note of how your child sucks his or her thumb. The
              intensity of the sucking can make a significant difference in
              potential effects on oral health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {warningSignsData.map((sign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl shadow-sm p-6 border card-treatment card-pink ${
                  sign.type === "passive"
                    ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
                    : "bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      sign.type === "passive"
                        ? "bg-emerald-100"
                        : "bg-amber-100"
                    }`}
                  >
                    {sign.type === "passive" ? (
                      <CircleCheck className="size-7 text-emerald-700" aria-hidden="true" />
                    ) : (
                      <TriangleAlert className="size-7 text-amber-700" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">
                      {sign.title}
                    </h3>
                    <p className="text-gray-600">{sign.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Extended Sucking Warning */}
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 border border-red-200 card-treatment card-pink">
            <div className="flex items-start gap-4">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Extended Sucking Effects
                </h4>
                <p className="text-gray-600 mb-3">
                  Extended sucking affects both the teeth and the shape of the
                  face and may lead to a need for orthodontic treatment in the
                  future.
                </p>
                <p className="text-gray-700 font-medium">
                  If at any time you suspect your child&apos;s thumb-sucking may
                  be affecting his or her oral health, please give us a call and
                  schedule a visit. We can help you assess the situation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How Can I Help My Child Quit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Can I Help My Child Quit Thumb-Sucking?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Should you need to help your child end the habit, follow these
              guidelines:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quitTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow card-treatment card-pink"
              >
                <h3 className="font-bold text-gray-800 text-lg mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Chart Reward System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-violet-100 font-medium">
                  Reward System That Works
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Progress Chart Method
              </h2>
              <p className="text-violet-100 leading-relaxed">
                Let your child put a sticker up every day that he or she
                doesn&apos;t suck. If your child makes it through a week without
                sucking, he or she gets to choose a prize. When the whole month
                is full, reward your child with something great – by then the
                habit should be over!
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center text-lg"
                    >
                      <Check className="size-5" aria-hidden="true" />
                    </div>
                  ))}
                </div>
                <p className="text-white font-bold text-center">
                  = Weekly Prize!
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 bg-white/10 rounded-xl p-4">
            <p className="text-violet-100 text-center">
              <span className="font-bold text-white">Pro Tip:</span> Making your
              child an active participant in his or her treatment will increase
              the willingness to break the habit.
            </p>
          </div>
        </motion.div>

        {/* Support Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-16 border border-emerald-200 card-treatment card-pink"
        >
          <div className="flex items-start gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Remember: Support is Key
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whatever your method, always remember that your child needs your
                support and understanding during the process of breaking the
                habit of thumb-sucking. Patience and encouragement go a long way
                in helping your child succeed.
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
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-10 border border-pink-100 card-treatment card-pink">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-5xl text-white">
                <Icon icon="dashicons:smiley" />
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Concerned About Your Child&apos;s Thumb-Sucking?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              We&apos;re here to help you assess whether your child&apos;s
              thumb-sucking habit may be affecting their oral health. Schedule a
              visit today!
            </p>
            <Link
              href="/contact-us?ref=appointment-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full hover:shadow-sm transition-all duration-300"
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

export default ThumbSuckingBody;
