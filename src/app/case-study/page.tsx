"use client";

import { motion } from "framer-motion";

export default function CaseStudy() {
  return (
    <section className="bg-[#0a0a0a] text-white px-6 md:px-16 py-24">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            50M+ Instagram Reel Views Generated
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A high-performance content growth system that helped D2C brands
            explode their Instagram reach, dominate reels discovery,
            and convert attention into revenue.
          </p>
        </motion.div>


        {/* BIG RESULTS */}
        <div className="grid md:grid-cols-3 gap-10 mb-28">

          {[
            {value:"50M+",label:"Total Reel Views"},
            {value:"120%",label:"Engagement Growth"},
            {value:"3X",label:"Sales Increase"},
          ].map((item,i)=>(
            <motion.div
              key={i}
              whileHover={{scale:1.05}}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center hover:border-blue-400 transition"
            >
              <h3 className="text-5xl font-bold text-blue-400">{item.value}</h3>
              <p className="text-gray-400 mt-3">{item.label}</p>
            </motion.div>
          ))}

        </div>


        {/* PROBLEM */}
        <div className="mb-24">

          <h2 className="text-3xl font-semibold mb-6">
            The Problem
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg max-w-4xl">
            Most D2C brands struggle with visibility on Instagram.
            Their content is product-focused but lacks storytelling,
            emotional hooks, and trend awareness.
            As a result their posts receive low reach and minimal engagement.
          </p>

        </div>


        {/* STRATEGY */}
        <div className="mb-28">

          <h2 className="text-3xl font-semibold mb-10">
            The Growth Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              "Hook-driven reels that capture attention in the first 2 seconds",
              "Story-based product content instead of static product posts",
              "Trend monitoring to ride algorithm momentum",
              "High frequency posting (3–4 reels daily)",
              "Audience psychology based storytelling",
              "Content batching for consistent publishing",
            ].map((item,i)=>(
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>


        {/* EXECUTION */}
        <div className="mb-28">

          <h2 className="text-3xl font-semibold mb-6">
            Execution Framework
          </h2>

          <p className="text-gray-400 text-lg max-w-4xl mb-10">
            We implemented a structured reel publishing system
            combining viral trends with brand storytelling.
            Each piece of content followed a proven format
            designed to maximise retention and shareability.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Scroll-stopping opening hook",
              "Relatable storytelling moment",
              "Product reveal within narrative",
              "Fast paced editing for retention",
              "Trend-aligned audio",
              "Clear call-to-action",
            ].map((item,i)=>(
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-blue-400 transition"
              >
                {item}
              </div>
            ))}

          </div>

        </div>


        {/* IMPACT */}
        <div className="mb-28">

          <h2 className="text-3xl font-semibold mb-6">
            Business Impact
          </h2>

          <p className="text-gray-400 text-lg max-w-4xl">
            The campaign transformed brand visibility.
            Multiple reels crossed the million-view mark,
            dramatically increasing profile visits and product discovery.
            This attention translated directly into sales growth,
            proving the power of storytelling-driven social media marketing.
          </p>

        </div>


        {/* WHY WORK WITH ME */}
        <div className="mb-28">

          <h2 className="text-3xl font-semibold mb-10">
            Why Brands Work With Me
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Growth-first content strategy",
              "Data driven experimentation",
              "Proven viral storytelling framework",
            ].map((item,i)=>(
              <motion.div
                key={i}
                whileHover={{y:-8}}
                className="bg-white/5 border border-white/10 p-8 rounded-xl text-center"
              >
                {item}
              </motion.div>
            ))}

          </div>

        </div>


        {/* CTA */}
        <div className="text-center">

          <h2 className="text-4xl font-bold mb-6">
            Want Your Brand to Go Viral?
          </h2>

          <p className="text-gray-400 mb-10">
            Let’s build a high-performance social media strategy
            that turns attention into revenue.
          </p>

          <a
            href="#Contact.tsx"
            className="bg-blue-500 hover:bg-blue-600 px-10 py-5 rounded-xl text-lg font-semibold transition"
          >
            Start Your Growth Campaign
          </a>

        </div>


      </div>

    </section>
  );
}