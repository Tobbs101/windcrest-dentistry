"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const adultReasons = [
  {
    icon: "mdi:tooth-outline",
    title: "Bad Bite or Malocclusion",
    description:
      "A bad bite or malocclusion, causing teeth to fit together incorrectly",
  },
  {
    icon: "mdi:format-horizontal-align-center",
    title: "Crowded or Spaced Teeth",
    description:
      "Teeth are crowded or spaced apart, possibly leading to tooth decay or gum disease",
  },
  {
    icon: "mdi:head-alert-outline",
    title: "Jaw Pain or Pressure",
    description:
      "Abnormal jaw pain or pressure that is caused by crooked teeth",
  },
  {
    icon: "mdi:emoticon-happy-outline",
    title: "Confidence & Health",
    description: "Desire for a healthier mouth and a more confident smile",
  },
];

const bracesTypes = [
  {
    icon: "mdi:circle-outline",
    title: "Clear Braces",
  },
  {
    icon: "mdi:diamond-stone",
    title: "Ceramic Braces",
  },
  {
    icon: "mdi:cog-sync-outline",
    title: "Self-Ligating Braces",
  },
  {
    icon: "mdi:alpha-l-box-outline",
    title: "Lingual Braces",
  },
  {
    icon: "mdi:eye-off-outline",
    title: "Invisible Braces",
  },
  {
    icon: "mdi:cog-outline",
    title: "Traditional Metal Braces",
  },
];

const adultDifferences = [
  {
    icon: "🦷",
    title: "Gum or Bone Loss",
    description:
      "Adults are more likely than children to experience gum recession or even bone loss due to gingivitis or advanced periodontal disease. Patients with straighter teeth are less likely to get gum disease.",
  },
  {
    icon: "🔄",
    title: "Worn or Missing Teeth",
    description:
      "Over time teeth can become worn down and shift into different positions that can only be corrected with orthodontic care. Missing teeth can cause other teeth to shift and tilt, creating a bad bite and increasing the possibility of gum disease.",
  },
  {
    icon: "📋",
    title: "Incomplete Treatment as a Teen",
    description:
      "Many adults received some orthodontic treatment as a child or teen, but never completed their treatment. As an adult, they choose to complete their orthodontic treatment to achieve the healthy, beautiful smile they always wanted.",
  },
];

const whyConsider = [
  {
    icon: "mdi:heart-pulse",
    title: "Straight Teeth Are Healthy Teeth",
    description:
      "Teeth that are properly aligned are easier to keep clean with flossing and brushing, and may help prevent other health problems.",
  },
  {
    icon: "mdi:star-shooting",
    title: "A Beautiful Smile Builds Confidence",
    description:
      "Orthodontic treatment can help boost your self-confidence, giving you a better quality of life and the freedom to smile without holding back!",
  },
  {
    icon: "mdi:alert-circle-outline",
    title: "Untreated Issues Can Get Worse",
    description:
      "Not receiving orthodontic treatment when it's needed can create long-term health issues costing you more in the end.",
  },
];

const ForAdultsBody = () => {
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
            For Adults
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Orthodontic Treatment for{" "}
            <span className="text-sky-600">Adults</span>
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
              Orthodontic treatment is no longer just for teens. In fact, the
              American Association of Orthodontists states that{" "}
              <span className="font-semibold text-sky-600">
                one in five orthodontic patients is over the age of 21
              </span>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Many adults are choosing to receive treatment because they
              understand the importance of maintaining their health, and they
              want to feel better about their appearance. Adults everywhere are
              taking advantage of the opportunity to receive orthodontic care,
              and now you can too.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
            <div className="text-center p-8">
              <span className="text-7xl mb-4 block">👨‍💼👩‍💼</span>
              <p className="text-sky-700 font-semibold text-xl">
                1 in 5 Patients Are Adults
              </p>
              <p className="text-sky-600 text-sm mt-2">
                It&apos;s never too late for a perfect smile
              </p>
            </div>
          </div>
        </motion.div>

        {/* Common Reasons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🤔 Why Adults Consider{" "}
              <span className="text-sky-600">Orthodontic Treatment</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {adultReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-sky-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon icon={reason.icon} className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Treatment Options Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              🎨 Treatment Options for Adults
            </h2>
            <p className="text-lg text-sky-100 text-center max-w-3xl mx-auto">
              For many adults, the thought of having metal braces is enough to
              discourage them from receiving treatment. However, today&apos;s
              orthodontic treatment options offer a variety of braces and
              appliances that are comfortable, aesthetic, and customized to meet
              your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {bracesTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-sky-50 p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sky-100 text-center group"
              >
                <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Icon icon={type.icon} className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {type.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Adult vs Children/Teens Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📊 Adult vs. Teen{" "}
              <span className="text-sky-600">Orthodontics</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The main difference between treating adults and children or teens
              is that the jawbones of younger patients are still developing. For
              adults, these bones have stopped growing, which may make
              orthognathic surgery possible to align the jawbones.
            </p>
          </div>

          <div className="space-y-4">
            {adultDifferences.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-sky-50 p-6 rounded-2xl shadow-lg border-l-4 border-sky-500 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{diff.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-gray-600">{diff.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-sky-50 p-6 rounded-2xl mt-8 border border-sky-100"
          >
            <p className="text-lg text-gray-700 text-center">
              Our practice also recognizes that adults and children have
              different needs, and require a different level of attention and
              care. We will work with you to ensure that you receive the most
              appropriate treatments, and that your needs are met with
              understanding and respect from us.
            </p>
          </motion.div>
        </motion.div>

        {/* Why Consider Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              💡 Why Should You Consider{" "}
              <span className="text-sky-600">Orthodontic Treatment?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyConsider.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sky-100 group text-center"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-600 transition-colors">
                  <Icon
                    icon={item.icon}
                    className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
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
            Ready for Your Best Smile?{" "}
            <span className="text-3xl text-white">
              <Icon icon="mdi:emoticon-happy-outline" />
            </span>
          </h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-6">
            To learn more about the benefits of adult orthodontics, please
            contact our practice to schedule an appointment. We understand that
            you have a busy schedule, and we will work with you to make sure
            each office visit is as convenient as possible.
          </p>
          <a
            href="/contact-us?ref=appointment-request"
            className="inline-block px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors shadow-lg"
          >
            Schedule an Appointment
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ForAdultsBody;
