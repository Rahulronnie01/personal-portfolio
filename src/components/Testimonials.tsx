"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css/core';
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Rahul helped us optimize our Instagram growth strategy and build a strong content system that improved our reach and engagement.",
    name: "Rohit Sharma",
    role: "Founder, Quickflo (SaaS Growth Platform)",
    initials: "QF"
  },
  {
    quote:
      "Our fashion brand saw significant engagement growth after Rahul restructured our reels strategy and content calendar.",
    name: "Aman Jain",
    role: "Founder, Bunaiwala (Women's Ethnic Fashion)",
    initials: "BW"
  },
  {
    quote:
      "Rahul understands how to grow D2C fashion brands through reels, storytelling, and community building.",
    name: "Sneha Gupta",
    role: "Founder, Kurtipedia (Kurti Brand)",
    initials: "KP"
  },
  {
    quote:
      "Our streetwear brand gained better visibility and engagement after Rahul optimized our content strategy and reels distribution.",
    name: "Arjun Kapoor",
    role: "Founder, Broadstar (Streetwear Brand)",
    initials: "BS"
  },
  {
    quote:
      "Rahul helped us communicate our eco gardening products better through educational and engaging social media content.",
    name: "Rakesh Mehta",
    role: "Founder, Pirul (Gardening Soil Brand)",
    initials: "PR"
  },
  {
    quote:
      "Our ethnic fashion brand experienced strong organic growth after Rahul redesigned our Instagram content strategy.",
    name: "Neha Sharma",
    role: "Founder, Miramaar (Ethnic Fashion)",
    initials: "MM"
  },
  {
    quote:
      "Rahul helped position our beverage brand effectively during the summer campaign through engaging reels and creative storytelling.",
    name: "Aditya Jain",
    role: "Founder, Piboca (Beverage Brand)",
    initials: "PB"
  },
  {
    quote:
      "Rahul's content planning and reels strategy helped our nightwear brand reach a much wider audience organically.",
    name: "Priya Verma",
    role: "Founder, Be You (Nightwear Brand)",
    initials: "BY"
  },
  {
    quote:
      "Our fragrance brand's Instagram engagement improved significantly after Rahul refined our storytelling and visual branding.",
    name: "Nisha Kapoor",
    role: "Founder, Nook Nosh (Perfume Brand)",
    initials: "NN"
  },
  {
    quote:
      "Rahul helped our leather accessories brand grow organically with consistent storytelling and product-focused reels.",
    name: "Arjun Mehta",
    role: "Founder, Hum and Hide (Leather Accessories)",
    initials: "HH"
  },
  {
    quote:
      "Our sneaker brand saw noticeable improvement in engagement after Rahul optimized our reels strategy and collaborations.",
    name: "Karan Verma",
    role: "Founder, ELEPHAWEAR (Sneaker Brand)",
    initials: "EW"
  },
  {
    quote:
      "Rahul helped us improve brand visibility through consistent social media campaigns and engaging product storytelling.",
    name: "Rahul Agarwal",
    role: "Founder, RR Jewellers (Jewellery Brand)",
    initials: "RJ"
  }
];

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", role: "", quote: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const splideRef = useRef<any>(null);

  const scrollLeft = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<");
    }
  };

  const scrollRight = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">");
    }
  };

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      setFormState({ name: "", role: "", quote: "" });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (


    
    <section className="relative z-20 bg-[#0a0a0a] py-20 md:py-32 overflow-hidden" id="testimonials">
      {/* Background Ambience - Different position for variety */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

       <div className="container mx-auto px-6 mb-16 text-center relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
                D2C Brands <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">I've Worked With</span>
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Feedback from clients and collaborators I've had the pleasure of working with.
            </p>





       </div>

      <div className="relative w-full overflow-hidden mask-linear-fade select-none py-4">
         {/* Mask gradient for fade effect on edges */}
         <div className="absolute top-0 left-0 w-32 h-full z-20 bg-linear-to-r from-[#0a0a0a] to-transparent pointer-events-none" />
         <div className="absolute top-0 right-0 w-32 h-full z-20 bg-linear-to-l from-[#0a0a0a] to-transparent pointer-events-none" />

         <Splide
            ref={splideRef}
            hasTrack={false}
            options={{
               type: 'loop',
               drag: 'free',
               autoWidth: true,
               gap: '2rem',
               arrows: false,
               pagination: false,
               friction: 0.8,
               autoScroll: {
                 speed: 1,
                 pauseOnHover: true,
                 pauseOnFocus: false,
               },
            }}
            extensions={{ AutoScroll }}
         >
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-12 z-30 pointer-events-none">
               <button
                  onClick={scrollLeft}
                  aria-label="Scroll testimonials left"
                  className="pointer-events-auto p-3 md:p-4 rounded-full bg-[#121212]/80 hover:bg-blue-600 border border-white/10 hover:border-blue-400 hover:scale-110 transition-all duration-300 text-white backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
               >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" />
               </button>
               <button
                  onClick={scrollRight}
                  aria-label="Scroll testimonials right"
                  className="pointer-events-auto p-3 md:p-4 rounded-full bg-[#121212]/80 hover:bg-blue-600 border border-white/10 hover:border-blue-400 hover:scale-110 transition-all duration-300 text-white backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] group"
               >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" />
               </button>
            </div>

            <SplideTrack className="py-10 flex">
               {TESTIMONIALS.map((item, index) => (
                  <SplideSlide key={index} className="flex-[0_0_auto] min-w-0 h-auto">
                     <div className="w-[350px] md:w-[450px] h-full p-8 rounded-2xl bg-[#121212] border border-white/5 hover:border-white/20 transition-all duration-500 shadow-xl cursor-grab active:cursor-grabbing flex flex-col justify-between">
                        <div className="flex items-start gap-4 mb-6">
                           <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
                              {item.initials}
                           </div>
                           <div className="overflow-hidden">
                              <h4 className="text-white font-bold text-lg leading-tight truncate">{item.name}</h4>
                              <p className="text-sm text-blue-400/80 font-medium mt-1 truncate">{item.role}</p>
                           </div>
                        </div>
                        <p className="text-gray-300/90 italic leading-relaxed text-[15px] mt-auto whitespace-pre-wrap">
                           "{item.quote}"
                        </p>
                     </div>
                  </SplideSlide>
               ))}
            </SplideTrack>
         </Splide>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="absolute inset-0 z-50 flex items-center justify-center px-4 h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
                {/* Background Glow */}
                <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-blue-500/10 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-purple-500/10 blur-[100px] pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Submit a Testimonial</h3>
              <p className="text-gray-400 mb-6 relative z-10">Your feedback helps me improve and grow. Thank you!</p>

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Role / Company</label>
                  <input
                    type="text"
                    required
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Testimonial</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.quote}
                    onChange={(e) => setFormState({ ...formState, quote: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-hidden focus:border-blue-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                         {isSubmitting ? "Sending..." : submitStatus === "success" ? "Sent!" : submitStatus === "error" ? "Retry" : "Submit"}
                    </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
