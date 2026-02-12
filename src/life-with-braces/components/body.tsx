"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const foodsToAvoid = [
  { icon: "🥯", category: "Chewy foods", examples: "bagels, licorice" },
  { icon: "🍿", category: "Crunchy foods", examples: "popcorn, chips, ice" },
  {
    icon: "🍬",
    category: "Sticky foods",
    examples: "caramel candies, chewing gum",
  },
  { icon: "🥜", category: "Hard foods", examples: "nuts, hard candies" },
  {
    icon: "🌽",
    category: "Foods that require biting into",
    examples: "corn on the cob, apples, carrots",
  },
];

const foodsYouCanEat = [
  {
    icon: "🧀",
    category: "Dairy",
    examples: "soft cheese, pudding, milk-based drinks",
  },
  {
    icon: "🥞",
    category: "Breads",
    examples: "soft tortillas, pancakes, muffins without nuts",
  },
  { icon: "🍝", category: "Grains", examples: "pasta, soft cooked rice" },
  {
    icon: "🍗",
    category: "Meats/poultry",
    examples: "soft cooked chicken, meatballs, lunch meats",
  },
  { icon: "🐟", category: "Seafood", examples: "tuna, salmon, crab cakes" },
  {
    icon: "🥔",
    category: "Vegetables",
    examples: "mashed potatoes, steamed spinach, beans",
  },
  {
    icon: "🍌",
    category: "Fruits",
    examples: "applesauce, bananas, fruit juice",
  },
  {
    icon: "🍦",
    category: "Treats",
    examples: "ice cream without nuts, milkshakes, Jell-O, soft cake",
  },
];

const careTips = [
  {
    icon: "mdi:tooth-outline",
    title: "Loose Teeth",
    description:
      "If your teeth begin feeling a little loose, don't worry; this is normal! Your braces must first loosen your teeth to move them into the right position. Once your teeth have been repositioned, they will no longer be loose.",
  },
  {
    icon: "mdi:wrench-outline",
    title: "Loose Wires and Bands",
    description:
      "The wires and bands on your braces may come loose. If this happens, please contact us as soon as possible so that we can check and repair your appliance. If any piece of your appliance comes off, be sure to save it and bring it to the office with you.",
  },
  {
    icon: "mdi:shield-check-outline",
    title: "Take Care of Your Appliances",
    description:
      "Damaged appliances can increase the length of your treatment process, so be sure to take care of all your appliances. Your teeth and jaw can only move into their correct positions if you consistently wear the rubber bands, headgear, retainer, or other appliances prescribed by your doctor.",
  },
];

const LifeWithBracesBody = () => {
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
            Life with Braces
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Life with <span className="text-sky-600">Braces</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Now that you have your braces, how do you take care of them?
            It&apos;s important for you to know how to properly take care of
            your braces throughout your entire orthodontic treatment.
          </p>
        </motion.div>

        {/* Eating with Braces Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              🍽️ Eating with Braces
            </h2>
            <p className="text-lg text-sky-100 text-center max-w-3xl mx-auto">
              Don&apos;t worry, you&apos;ll be eating popcorn and snacking on
              potato chips again in no time! However, before you can start
              enjoying some of the treats you love, you will need to take
              special care to avoid any foods that could damage your new
              appliances.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Foods to Avoid */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-2xl p-6 border border-red-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <Icon
                    icon="mdi:close-circle"
                    className="w-7 h-7 text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-red-700">
                  Foods to Avoid
                </h3>
              </div>
              <div className="space-y-3">
                {foodsToAvoid.map((food, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-400 flex items-center gap-3"
                  >
                    <span className="text-2xl">{food.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {food.category}
                      </p>
                      <p className="text-gray-600 text-sm">{food.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Foods You CAN Eat */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-6 border border-green-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Icon
                    icon="mdi:check-circle"
                    className="w-7 h-7 text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-green-700">
                  Foods You CAN Eat
                </h3>
              </div>
              <div className="space-y-3">
                {foodsYouCanEat.map((food, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-green-400 flex items-center gap-3"
                  >
                    <span className="text-2xl">{food.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {food.category}
                      </p>
                      <p className="text-gray-600 text-sm">{food.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Soreness Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              😣 Soreness from Braces{" "}
              <span className="text-sky-600">and Appliances</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-lg border border-sky-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  When you first get your braces, you may notice that your teeth
                  and mouth feel a little tender or sore. This is perfectly
                  normal and we promise your mouth will not be sore forever!
                </p>
                <div className="bg-sky-100 p-4 rounded-xl">
                  <p className="text-sky-800 font-medium">
                    💡 <strong>Quick Relief Tip:</strong> Dissolve one teaspoon
                    of salt in eight ounces of lukewarm water. Swish and gargle
                    this solution in your mouth for just a couple of minutes (do
                    not swallow the saltwater).
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  If the pain is more severe and does not go away after rinsing,
                  you can also try taking a pain reliever. It is also not
                  uncommon for your lips, cheeks, and tongue to become irritated
                  for one to two weeks as they toughen and become used to the
                  braces.
                </p>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                  <p className="text-amber-800 font-medium">
                    🕯️ <strong>Wax Tip:</strong> We would be happy to give you
                    some wax that you can put over the braces to lessen the
                    tenderness. If you need some wax, please let us know.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Care Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🔧 Braces <span className="text-sky-600">Care Tips</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {careTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-sky-100 group"
              >
                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors">
                  <Icon
                    icon={tip.icon}
                    className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Wire Fix Tip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-sky-50 p-6 rounded-2xl mt-8 border border-sky-100"
          >
            <p className="text-lg text-gray-700">
              <strong>🔩 Temporary Wire Fix:</strong> You can temporarily fix a
              loose wire by using the back of a spoon or the eraser end of a
              pencil to carefully and gently push the wire back into place. If
              the loose wire is causing irritation to your lips or cheeks, put
              wax or a wet cotton ball over the broken wire to relieve the pain.
            </p>
          </motion.div>
        </motion.div>

        {/* Sports Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🏆 Playing Sports with Braces
                </h2>
                <p className="text-lg text-green-100 mb-4">
                  Game, Set, Match — we have great news for athletes! You can
                  still play sports even while undergoing orthodontic treatment!
                </p>
                <p className="text-lg text-green-100">
                  If you do play sports, it&apos;s recommended that you wear a
                  mouthguard to protect your teeth and your appliance. Let your
                  doctor know if you need help finding the right mouthguard for
                  the best protection.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">
                  🚨 Sports Emergency?
                </h3>
                <ul className="space-y-3 text-green-100">
                  <li className="flex items-start gap-2">
                    <Icon
                      icon="mdi:check"
                      className="w-5 h-5 mt-1 flex-shrink-0"
                    />
                    <span>
                      Immediately check your mouth and appliance for damage
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      icon="mdi:check"
                      className="w-5 h-5 mt-1 flex-shrink-0"
                    />
                    <span>
                      If you notice loose teeth or damage, contact our office
                      right away
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon
                      icon="mdi:check"
                      className="w-5 h-5 mt-1 flex-shrink-0"
                    />
                    <span>
                      Temporarily relieve discomfort by applying wax or rinsing
                      with warm saltwater
                    </span>
                  </li>
                </ul>
              </div>
            </div>
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
            Questions About Your Braces?{" "}
            <span className="text-3xl text-white">
              <Icon icon="mdi:help-circle-outline" />
            </span>
          </h2>
          <p className="text-lg text-sky-100 max-w-2xl mx-auto mb-6">
            If you have any questions or concerns about caring for your braces,
            don&apos;t hesitate to reach out. We&apos;re here to help make your
            orthodontic journey as smooth as possible!
          </p>
          <a
            href="/contact-us?ref=appointment-request"
            className="inline-block px-8 py-4 bg-white text-sky-600 font-semibold rounded-full hover:bg-sky-50 transition-colors shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LifeWithBracesBody;
