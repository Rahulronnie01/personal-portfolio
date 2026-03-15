"use client";

import { motion } from "framer-motion";

export default function SalesCampaign() {

  return (
    <section className="relative bg-[#0a0a0a] text-white px-6 md:px-16 py-32 overflow-hidden">

      {/* Brand glow */}
      <div className="absolute top-[-200px] left-[20%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"/>
      <div className="absolute bottom-[-200px] right-[10%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full"/>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO */}
        <div className="text-center mb-40">

          <p className="text-blue-400 font-semibold mb-6 tracking-wide">
            Revenue Growth Case Study
          </p>

          <h1 className="text-6xl md:text-7xl font-bold mb-10 leading-tight">
            Turning Instagram Content
            <br/>
            Into Real Revenue
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Many brands generate views but struggle to convert that
            attention into actual revenue. This campaign focused on
            designing a storytelling-led content system that guided
            audiences from discovery to trust and finally to purchase.
          </p>

        </div>


        {/* PROBLEM STORY */}
        <div className="grid md:grid-cols-2 gap-24 mb-40">

          <div>

            <h2 className="text-4xl font-semibold mb-8">
              The Problem
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              The brand already had a growing Instagram audience,
              but the engagement rarely translated into product sales.
              Posts generated likes and views, but the audience
              wasn’t taking the next step toward purchase.
            </p>

            <p className="text-gray-400 leading-relaxed">
              The core issue wasn’t visibility — it was the absence
              of a structured conversion journey within the content.
              Users were entertained, but they weren’t guided
              toward buying.
            </p>

          </div>


          <div className="bg-white/5 border border-white/10 p-12 rounded-3xl">

            <h3 className="text-2xl font-semibold mb-6">
              Key Insight
            </h3>

            <p className="text-gray-400 leading-relaxed">
              People rarely buy products directly from promotional posts.
              They buy when content builds emotional connection,
              trust, and curiosity first.
            </p>

          </div>

        </div>



        {/* FUNNEL */}
        <div className="mb-40">

          <h2 className="text-4xl font-semibold text-center mb-16">
            Conversion Funnel Strategy
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              {
                stage:"Audience Discovery",
                value:"18M+",
                text:"Reels distributed through Instagram explore and algorithmic recommendations."
              },
              {
                stage:"Traffic & Interest",
                value:"420K",
                text:"Users visiting the brand profile and exploring product pages."
              },
              {
                stage:"Product Conversion",
                value:"3X",
                text:"Increase in product purchases driven by organic content."
              }
            ].map((item,i)=>(
              <motion.div
                key={i}
                whileHover={{y:-8}}
                className="bg-white/5 border border-white/10 p-10 rounded-2xl text-center hover:border-blue-400 transition"
              >

                <p className="text-gray-400 text-sm mb-3">
                  {item.stage}
                </p>

                <h3 className="text-5xl font-bold text-blue-400 mb-4">
                  {item.value}
                </h3>

                <p className="text-gray-400 text-sm">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>



        {/* STORYTELLING SYSTEM */}
        <div className="grid md:grid-cols-2 gap-24 mb-40">

          <div>

            <h2 className="text-4xl font-semibold mb-8">
              Storytelling Framework
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Instead of posting direct product promotions,
              we redesigned the entire content system around
              storytelling.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Each reel followed a narrative arc designed
              to capture attention, build emotional resonance,
              and introduce the product organically within the story.
            </p>

          </div>


          <div className="space-y-6">

            {[
              "Hook-driven storytelling reels",
              "Relatable lifestyle moments",
              "Emotion-first product introduction",
              "Curiosity-driven captions",
              "Community engagement prompts",
              "Strategic call-to-action moments"
            ].map((item,i)=>(
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-xl"
              >
                {item}
              </div>
            ))}

          </div>

        </div>



        {/* IMPACT */}
        <div className="mb-40 text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-semibold mb-8">
            Campaign Impact
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            The new storytelling system transformed how audiences
            interacted with the brand’s content.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Reels generated millions of views, profile visits
            increased dramatically, and most importantly,
            product purchases began rising consistently.
          </p>

        </div>



        {/* FINAL CTA */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-3xl p-24 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Ready To Turn Content
            <br/>
            Into Revenue?
          </h2>

          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
            Let’s build a content strategy that attracts the
            right audience, builds trust, and converts
            attention into measurable business growth.
          </p>

          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 px-12 py-5 rounded-xl font-semibold text-lg transition"
          >
            Start Your Growth Campaign
          </a>

        </div>

      </div>

    </section>
  );
}