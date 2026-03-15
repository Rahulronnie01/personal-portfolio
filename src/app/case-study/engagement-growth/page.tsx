"use client";

import { motion } from "framer-motion";

const METRICS = [
  { value: "120%", label: "Engagement Growth" },
  { value: "4.8M", label: "Total Interactions" },
  { value: "3.2X", label: "Audience Retention" },
  { value: "2.1X", label: "Profile Visits" },
];

const PILLARS = [
  {
    title: "Storytelling Reels",
    desc: "Short narrative-driven reels designed to emotionally connect with the audience.",
  },
  {
    title: "Relatable Content",
    desc: "Posts reflecting real audience experiences to increase shares and saves.",
  },
  {
    title: "Educational Micro Content",
    desc: "Quick insights and tips that deliver value in under 10 seconds.",
  },
  {
    title: "Trend Adaptation",
    desc: "Leveraging viral audio and trends while maintaining brand identity.",
  },
];

export default function EngagementGrowth() {
  return (
    <section className="bg-[#0a0a0a] text-white px-6 md:px-16 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="mb-24"
        >
          <p className="text-blue-400 font-semibold mb-4">
            Engagement Growth Case Study
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            120% Engagement Growth on Instagram
          </h1>

          <p className="text-gray-400 max-w-3xl text-lg">
            By restructuring the content framework and focusing on audience psychology,
            we transformed stagnant Instagram pages into highly interactive communities.
          </p>
        </motion.div>


        {/* METRICS DASHBOARD */}
        <div className="grid md:grid-cols-4 gap-6 mb-28">

          {METRICS.map((item,i)=>(
            <motion.div
              key={i}
              whileHover={{scale:1.05}}
              className="bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-blue-400 transition"
            >
              <h3 className="text-4xl font-bold text-blue-400">{item.value}</h3>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </motion.div>
          ))}

        </div>


        {/* CHALLENGE */}
        <div className="mb-24">

          <h2 className="text-3xl font-semibold mb-6">
            The Challenge
          </h2>

          <p className="text-gray-400 max-w-4xl leading-relaxed">
            Despite consistent posting, engagement remained low.
            Content was primarily product-focused, lacking emotional
            connection and storytelling elements that encourage
            interaction such as comments, shares, and saves.
          </p>

        </div>


        {/* CONTENT PILLARS */}
        <div className="mb-28">

          <h2 className="text-3xl font-semibold mb-10">
            Content Pillars That Drove Engagement
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {PILLARS.map((item,i)=>(
              <motion.div
                key={i}
                whileHover={{y:-6}}
                className="bg-white/5 border border-white/10 p-8 rounded-xl transition hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>


        {/* STRATEGY */}
        <div className="mb-28">

          <h2 className="text-3xl font-semibold mb-6">
            Engagement Strategy
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Audience psychology driven storytelling",
              "Comment-driven discussion prompts",
              "Saveable micro-value content",
              "Reels optimized for retention",
              "Community interaction loops",
              "Daily analytics-based iteration"
            ].map((item,i)=>(
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-purple-400 transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>


        {/* RESULTS */}
        <div className="mb-28">

          <h2 className="text-3xl font-semibold mb-8">
            Measurable Results
          </h2>

          <p className="text-gray-400 max-w-3xl leading-relaxed">
            Within three months the engagement rate increased by 120%.
            Posts consistently received higher comment volume,
            increased saves, and improved algorithm distribution.
          </p>

        </div>


        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-16 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Want Higher Engagement on Your Brand Page?
          </h2>

          <p className="text-gray-400 mb-8">
            Let’s design a content system that builds real audience connection.
          </p>

          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 px-10 py-4 rounded-xl font-semibold transition"
          >
            Work With Me
          </a>

        </div>

      </div>

    </section>
  );
}