"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

import TraditionalMetal from "@/assets/braces/traditional-metal.jpg";
import SelfLitigating from "@/assets/braces/self-ligating-braces.jpg";
import Clear from "@/assets/braces/clear.jpg";
import Invisalign from "@/assets/braces/invisalign.jpg";
import Lingual from "@/assets/braces/lingual.jpg";

// TODO: Import your images here
// import MetalBracesImage from "@/assets/images/metal-braces.jpg";
// import SelfLigatingImage from "@/assets/images/self-ligating-braces.jpg";
// import CeramicBracesImage from "@/assets/images/clear-braces.jpg";
// import ClearAlignersImage from "@/assets/images/invisalign.jpg";
// import LingualBracesImage from "@/assets/images/lingual-braces.jpg";

const bracesTypes = [
  {
    id: "metal-braces",
    title: "Traditional Metal Braces",
    subtitle: "metal braces",
    icon: "mdi:cog-outline",
    color: "from-gray-500 to-gray-700",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-300",
    // image: MetalBracesImage,
    image: TraditionalMetal,
    imagePlaceholder: "",
    description:
      "Traditional metal braces are the most common type of braces and are more comfortable today than ever before. Made of high-grade stainless steel, metal braces straighten your teeth using metal brackets and archwires. With metal braces, you have the option of adding colored elastics (rubber bands) for a more unique and colorful smile.",
    highlights: [
      "Most common type",
      "High-grade stainless steel",
      "Colorful elastics available",
    ],
  },
  {
    id: "self-ligating",
    title: "Self-Ligating Braces",
    subtitle: "self-ligating braces",
    icon: "mdi:cog-sync-outline",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    // image: SelfLigatingImage,
    imagePlaceholder: "",
    image: SelfLitigating,
    description:
      "Self-ligating braces are made from the same materials as traditional braces. However, self-ligating braces do not require the use of elastics, meaning fewer appointments and less friction being placed on the tooth. Self-ligating braces come with traditional metal, ceramic, or clear brackets. They are the same size as metal braces, but use a specialized clip in place of elastics to help the archwire guide teeth into place. The clip helps reduce the amount of pressure being placed on the tooth, and requires fewer adjustments because there are no elastics to replace.",
    highlights: [
      "No elastics needed",
      "Fewer appointments",
      "Less friction on teeth",
    ],
  },
  {
    id: "ceramic-braces",
    title: "Clear (Ceramic) Braces",
    subtitle: "clear braces",
    icon: "mdi:diamond-stone",
    color: "from-amber-400 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    image: Clear,
    // image: CeramicBracesImage,
    imagePlaceholder: "",
    description:
      "Ceramic braces are made of clear materials and are therefore less visible on your teeth than metal braces. For this reason, ceramic braces are used mainly on older teenagers and adult patients who have cosmetic concerns. While they are visually less prominent, they do require more attention to oral hygiene as ceramic braces are larger and are more brittle than their metal counterparts. For these reasons, ceramic braces tend to be used more on upper front teeth than on lower teeth.",
    highlights: [
      "Less visible on teeth",
      "Great for cosmetic concerns",
      "Popular with teens & adults",
    ],
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners",
    subtitle: "invisalign",
    icon: "mdi:eye-off-outline",
    color: "from-sky-500 to-sky-700",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-300",
    // image: ClearAlignersImage,
    imagePlaceholder: "",
    image: Invisalign,
    description:
      "Clear aligners are a series of invisible, removable, and comfortable acrylic trays that straighten your teeth like braces. Not only are the aligners invisible, they are removable, so you can eat and drink what you want while in treatment, plus brushing and flossing are less of a hassle. The aligners are comfortable and have no metal to cause mouth abrasions during treatment.",
    highlights: [
      "Invisible & removable",
      "Eat what you want",
      "No metal abrasions",
    ],
  },
  {
    id: "lingual-braces",
    title: "Lingual Braces",
    subtitle: "lingual braces",
    icon: "mdi:alpha-l-box-outline",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    // image: LingualBracesImage,
    imagePlaceholder: "",
    image: Lingual,
    description:
      'Lingual braces are hidden behind the teeth and are therefore "invisible" when you smile. Lingual braces are 100% customized to match the shape of your teeth; the metal appliances are created uniquely for you. Lingual braces are a very reasonable option for athletes, models, actors/actresses, musicians who play wind instruments, and adult professionals.',
    highlights: [
      "Hidden behind teeth",
      "100% customized",
      "Great for professionals",
    ],
  },
];

const TypesOfBracesBody = () => {
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
            Orthodontic Options
          </span>
          <h1 className="text-4xl underline decoration-sky-500 md:text-5xl font-bold text-gray-800 mb-6">
            Types of <span>Braces</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a variety of braces to fit your lifestyle and treatment
            needs. Explore our options to find the perfect fit for your smile
            journey.
          </p>
        </motion.div>

        {/* Braces Types List */}
        <div className="space-y-16">
          {bracesTypes.map((braces, index) => (
            <motion.div
              key={braces.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div
                className={`${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              >
                <div
                  className={`relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-md ${braces.bgColor} border-2 ${braces.borderColor} flex items-center justify-center`}
                >
                  {/* TODO: Replace with actual image */}

                  {/* Placeholder - Remove when adding actual images */}
                  <div className="text-center p-8">
                    <span className="text-7xl mb-4 block">
                      {braces.imagePlaceholder}
                    </span>
                    <p className="text-gray-600 font-medium text-lg">
                      {braces.subtitle}
                    </p>
                    <Image
                      src={braces.image}
                      alt={braces.title}
                      // fill
                      className="object-contain mt-4 rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
              >
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${braces.color} text-white text-sm font-medium mb-4`}
                >
                  <Icon icon={braces.icon} className="w-5 h-5" />
                  <span>{braces.subtitle}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {braces.title}
                </h2>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {braces.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3">
                  {braces.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-2 px-4 py-2 ${braces.bgColor} rounded-full text-gray-700 text-sm font-medium border ${braces.borderColor}`}
                    >
                      <Icon
                        icon="mdi:check-circle"
                        className="w-4 h-4 text-green-500"
                      />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-sky-700 rounded-2xl p-8 md:p-12 text-center text-white mt-20"
        >
          <h2 className="text-2xl gap-2 flex items-center justify-center md:text-3xl font-bold mb-4">
            Find the Right Braces for You{" "}
            <span className="text-3xl text-white">
              <Icon icon="mdi:emoticon-happy-outline" />
            </span>
          </h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-6">
            Not sure which type of braces is right for you? Schedule a
            consultation with our orthodontic specialists and we&apos;ll help
            you find the perfect solution for your smile.
          </p>
          <a
            href="/contact-us?ref=appointment-request"
            className="inline-block px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors shadow-sm"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default TypesOfBracesBody;
