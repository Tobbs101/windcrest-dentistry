"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroBg from "@/assets/happy-afro-kid-regular-check-up-teeth-dental-clinic.jpg";
import { Icon } from "@iconify/react";

const babyCareSteps = [
  {
    icon: "🧤",
    title: "Caring for Gums",
    description:
      "Even before your baby's first tooth appears, the gums can benefit from your careful attention. After breast- or bottle-feeding, wrap one finger with a clean, damp washcloth or piece of gauze and gently rub it across your baby's gum tissue. This practice both clears your little one's mouth of any fragments of food and begins the process for building good daily oral care habits.",
  },
  {
    icon: "🦷",
    title: "Baby's First Tooth",
    description:
      "When that first tooth makes an entrance, it's time to upgrade to a baby toothbrush. There are usually two options: a long-handled toothbrush that you and your baby can hold at the same time, and a finger-puppet-like brush that fits over the tip of your pointer finger. In each case, the bristles are soft and few.",
  },
  {
    icon: "🪥",
    title: "Brushing with Toothpaste",
    description:
      "When a few more teeth appear, you can start using toothpaste with your child's brush. At this stage, use only a tiny amount of fluoridated toothpaste (the size of a grain of rice). From the beginning, have your little one practice spitting the toothpaste out after brushing, which should not be swallowed at any age.",
  },
];

const cavityPreventionTips = [
  {
    icon: "🚫",
    title: "No Sweetened Liquids",
    description:
      "Avoid giving your baby sweetened drinks, flavored drinks, or soda.",
  },
  {
    icon: "🍼",
    title: "No Bottle in Bed",
    description:
      "Never let your baby go to bed with a bottle to prevent baby-bottle caries.",
  },
  {
    icon: "🧹",
    title: "Regular Cleaning",
    description:
      "Clean teeth and gums regularly as even natural sugars can cause decay.",
  },
];

const DentalCareForYourBabyBody = () => {
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
              className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-4"
            >
              For New Parents
            </motion.span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Dental Care For <span className="text-pink-500">Your Baby</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Congratulations on the arrival of your baby! Are you prepared for
              the arrival of your baby&apos;s first tooth? Follow these
              guidelines and your son or daughter will be on the way to a
              lifetime of healthy smiles!
            </p>
            <p className="text-gray-700 font-medium">
              Starting early is the key to building good oral health habits that
              last a lifetime.
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
            <div className="aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200">
              <Image
                src={HeroBg}
                alt="Happy baby at dental checkup"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-rose-400 rounded-full opacity-20 blur-xl" />
          </motion.div>
        </motion.div>

        {/* Baby Care Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">👶</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Getting Started with Baby&apos;s Oral Care
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these essential steps to ensure your baby develops healthy
              teeth and gums from the very beginning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {babyCareSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* First Toothbrush Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mb-16 border border-amber-200"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Toothbrush Tips for Beginners
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                At this stage, toothpaste isn&apos;t necessary; just dip the
                brush in water before brushing. If your little one doesn&apos;t
                react well to the introduction of a toothbrush, don&apos;t give
                up.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Switch back to a damp washcloth for a few months and try the
                toothbrush again. During the teething process, your child will
                want to chew on just about anything, and a baby toothbrush with
                a teether can become a favorite toy during this period.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span>🪥</span> Baby Toothbrush Options
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">
                      Long-handled toothbrush
                    </p>
                    <p className="text-gray-600 text-sm">
                      You and your baby can hold it at the same time
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-500 mt-1">✓</span>
                  <div>
                    <p className="font-medium text-gray-800">
                      Finger-puppet brush
                    </p>
                    <p className="text-gray-600 text-sm">
                      Fits over the tip of your pointer finger
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Avoiding Cavities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">🛡️</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Avoiding Cavities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Don&apos;t give your baby any sort of sweetened liquids such as
              flavored drinks or soda. Even the sugars present in fruit juice,
              formula, and milk (this goes for breast milk as well) can cause
              decay, so regular teeth and gum cleaning is vital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {cavityPreventionTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{tip.icon}</span>
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Warning Box */}
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">
                  Baby-Bottle Caries Warning
                </h4>
                <p className="text-gray-600">
                  Make sure your baby never goes to bed with a bottle; sugary
                  liquids in prolonged contact with teeth are a guarantee for
                  early-childhood decay, also called baby-bottle caries.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* First Visit to the Dentist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🏥</span>
                </div>
                <p className="text-sky-100 font-medium">
                  First Visit to the Dentist
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visit Within 6 Months of First Tooth
              </h2>
              <p className="text-sky-100 leading-relaxed mb-4">
                It&apos;s recommended that you bring your baby in for a visit
                within six months of the first tooth&apos;s eruption – usually
                around his or her first birthday. Since decay can occur in even
                the smallest of teeth, the earlier your baby visits us, the more
                likely he or she is to avoid problems.
              </p>
              <p className="text-sky-100 leading-relaxed">
                We&apos;ll look for any signs of early problems with your
                baby&apos;s oral health, and check in with you about the best
                way to care for your little one&apos;s teeth.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl block mb-2">🎂</span>
                  <p className="text-white font-bold">1st Birthday</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Positive Attitude Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 mb-16 border border-emerald-200"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-2xl">😊</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Preparing for Dental Visits
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Remember that preparing for each dental visit with a positive
                attitude goes a long way toward making your child comfortable
                with regular checkups. Your calm and cheerful demeanor will help
                your baby feel at ease during their first dental experiences.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Setting a Good Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🌟</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Setting a Good Example
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
                <span>👨‍👩‍👧</span> Be a Role Model
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As part of the natural learning process, little ones are expert
                mimics, and you can take advantage of this talent. Brush and
                floss daily while your child is watching, and he or she will
                intuit at an early age the importance of your good habits.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As soon as your child shows interest, offer a toothbrush of his
                or her own and encourage your toddler to &quot;brush&quot; with
                you. (You&apos;ll find toothbrushes with chunky, short handles
                that are easy to grip.)
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 text-lg mb-3 flex items-center gap-2">
                <span>🎨</span> Make Brushing Fun
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most children don&apos;t have the dexterity necessary to
                thoroughly clean their own teeth until they&apos;re about six or
                seven, so you&apos;ll have to do that part of the job.
              </p>
              <div className="bg-violet-50 rounded-xl p-4 border border-violet-100">
                <p className="text-violet-700 font-medium mb-2">
                  Try these tactics to make brushing fun:
                </p>
                <ul className="text-violet-600 text-sm space-y-1">
                  <li>• Flavored toothpaste</li>
                  <li>• Toothbrush with a favorite character</li>
                  <li>• Singing songs about brushing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Goal Highlight */}
          <div className="mt-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <p className="text-violet-100">
                <span className="font-bold text-white">The primary goal:</span>{" "}
                Instill healthy oral habits at an early age to set your child up
                for a lifetime of healthy, cavity-free teeth!
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
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-10 border border-pink-100">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-5xl text-white">
                <Icon icon="dashicons:smiley" />
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Schedule Your Baby&apos;s First Visit?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              Let us help you build healthy dental habits for your little one
              from the very beginning. Contact us today to schedule an
              appointment!
            </p>
            <Link
              href="/contact-us?ref=appointment-request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
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

export default DentalCareForYourBabyBody;
