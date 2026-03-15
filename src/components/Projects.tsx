"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Project Data with Media & Layout Configuration
const projects = [
 {
  id: "metaninza-growth",
  title: "MetaNinza Social Media Growth",
  category: "Social Media Strategy • Gaming Community",
  description: "Scaled MetaNinza's gaming community using trend-driven reels and engagement strategies.",
  longDescription: "Built and managed MetaNinza’s social media ecosystem from early stage. Focused on gaming trends, memes, reels strategy, and community engagement to grow reach and build an active audience.",
  techStack: ["Instagram Growth", "Reels Strategy", "Community Engagement", "Content Calendar"],
  repo: "#",
  demo: "https://instagram.com/metaninza",
  color: "from-blue-600/20 to-cyan-500/20",
  hoverColor: "group-hover:from-blue-600/40 group-hover:to-cyan-500/40",
  span: "md:col-span-2 md:row-span-2",
  mediaType: "image",
  mediaUrl: "/projects/unnamed.png",
  demoUrl: "/projects/metaninza-logo.png"
},

  {
  id: "rooter-community",
  title: "Rooter Community Growth",
  category: "Esports • Community Management",
  description: "Managed social media campaigns and community engagement for India's largest gaming platform.",
  longDescription: "Worked on content planning, trend research, and engagement strategies to grow Rooter’s gaming community across multiple social platforms.",
  techStack: ["Community Engagement", "Content Strategy", "Gaming Trends", "Analytics"],
  repo: "#",
  demo: "https://www.instagram.com/rooter.gg/",
  color: "from-purple-600/20 to-pink-500/20",
  hoverColor: "group-hover:from-purple-600/40 group-hover:to-pink-500/40",
  span: "md:col-span-1 md:row-span-1",
  mediaType: "image",
  mediaUrl: "/projects/rooter-mainn-logo.png",
  demoUrl: "/projects/rooter-logo.png"
},
  {
  id: "d2c-brand-growth",
  title: "D2C Brand Social Media Growth",
  category: "D2C • Content Strategy",
  description: "Helped 20+ D2C brands scale through viral reels and influencer collaborations.",
  longDescription: "Worked with multiple D2C brands to improve reach, engagement, and brand awareness using social media campaigns, influencer marketing, and viral content strategies.",
  techStack: ["Influencer Marketing", "Content Creation", "Campaign Strategy", "Analytics"],
  repo: "#",
  demo: "#",
  color: "from-green-600/20 to-emerald-500/20",
  hoverColor: "group-hover:from-green-600/40 group-hover:to-emerald-500/40",
  span: "md:col-span-1 md:row-span-1",
  mediaType: "image",
  mediaUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  demoUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
},
  /*
  {
    id: "bookstore-app",
    title: "Bookstore",
    category: "MERN Stack",
    description: "Book management with separate Frontend/Backend.",
    longDescription: "Built RESTful APIs with Express.js and MongoDB for complete book management (CRUD). Developed a responsive React frontend integrated with Axios.",
    techStack: ["MongoDB", "Express", "React"],
    repo: "https://github.com/fawazv/bookstoreapp",
    demo: "#",
    color: "from-indigo-600/20 to-purple-500/20",
    hoverColor: "group-hover:from-indigo-600/40 group-hover:to-purple-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Reading/Books
    mediaUrl: "https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // Library/Shelf
    demoUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
  {
    id: "pixabay-gallery",
    title: "Pixabay Gallery",
    category: "API Integration",
    description: "Image search gallery using Pixabay API.",
    longDescription: "Implemented image search and responsive grid gallery using React, Tailwind CSS, and Axios. Integrated Pixabay API for fetching images.",
    techStack: ["React", "Vite", "Tailwind"],
    repo: "https://github.com/fawazv/1.-react-tailwind-pixabay-gallery",
    demo: "#",
    color: "from-pink-600/20 to-rose-500/20",
    hoverColor: "group-hover:from-pink-600/40 group-hover:to-rose-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Color/Art
    mediaUrl: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // Searching/Scanning
    demoUrl: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
  {
    id: "room-upload",
    title: "Room Upload",
    category: "Cloudinary",
    description: "Secure image upload service details.",
    longDescription: "Built secure image upload flow using Express, Multer, and Cloudinary SDK with TypeScript backend. Developed responsive React + Vite frontend.",
    techStack: ["React", "Multer", "Cloudinary"],
    repo: "https://github.com/fawazv/multer-cloudinary",
    demo: "#",
    color: "from-yellow-600/20 to-orange-500/20",
    hoverColor: "group-hover:from-yellow-600/40 group-hover:to-orange-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaType: "image",
    // Data Transfer
    mediaUrl: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // Upload/Processing
    demoUrl: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  */
];

const INITIAL_VISIBLE_COUNT = 5;

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const selectedProject = projects.find((p) => p.id === selectedId);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="projects">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Growth Case <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Studies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Proven social media growth campaigns, community building strategies, and brand scaling projects.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]"
        >
            <AnimatePresence mode="popLayout">
                {visibleProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        onClick={() => setSelectedId(project.id)}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md ${project.span}`}
                        whileHover={{ scale: 1.015 }}
                    >
                        {/* Media Background - Always 'mediaUrl' for Grid */}
                       <img
  src={project.mediaUrl}
  alt={project.title}
  className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700"
 />

                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-linear-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-60 group-hover:opacity-80 mix-blend-overlay`} />
                        
                        {/* Darkener */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500" />

                        {/* Noise */}
                        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                            <div className="flex justify-between items-start">
                                 <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-blue-300 backdrop-blur-md">
                                    {project.category}
                                 </span>
                                 <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                 </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">{project.title}</h3>
                                <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    {project.techStack.slice(0, 3).map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {/* Pagination Buttons */}
        <motion.div layout className="flex justify-center mt-12">
            {hasMore ? (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                >
                    View More Projects
                    <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.button>
            ) : projects.length > INITIAL_VISIBLE_COUNT && (
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        if (projectsSection) {
                            projectsSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        setVisibleCount(INITIAL_VISIBLE_COUNT);
                    }}
                    className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md flex items-center gap-2 group"
                 >
                    Show Less
                    <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                 </motion.button>
            )}
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
            {selectedId && selectedProject && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-xl z-60"
                    />
                    <div className="fixed inset-0 flex items-center justify-center z-70 pointer-events-auto p-4 md:p-8">
                        <motion.div
                           layoutId={selectedId}
                           className="bg-[#121212] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-4xl border border-white/10 shadow-2xl relative scrollbar-hide"
                        >
                           <button 
                                onClick={() => setSelectedId(null)}
                                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                           </button>

                           <div className="flex flex-col md:flex-row h-full">
                                { /* Visual Side - Prioritize 'demoUrl', fallback to 'mediaUrl' */ }
                                <div className={`w-full md:w-2/5 min-h-[300px] relative overflow-hidden flex flex-col justify-end p-8`}>
                                    <img 
                                        src={selectedProject.demoUrl || selectedProject.mediaUrl}
                                        alt={selectedProject.title}
                                        className="w-full h-[60%] object-contain mx-auto opacity-80"
                                    />
                                   <div className={`absolute inset-0 bg-linear-to-b ${selectedProject.color} mix-blend-overlay opacity-80`} />
                                   <div className="absolute inset-0 bg-black/20" />
                                   
                                   <motion.span 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.2 }}
                                     className="relative z-10 inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-white mb-4 w-fit border border-white/10 backdrop-blur-md"
                                   >
                                     {selectedProject.category}
                                   </motion.span>
                                   <motion.h3 
                                     initial={{ opacity: 0, y: 10 }}
                                     animate={{ opacity: 1, y: 0 }}
                                     transition={{ delay: 0.3 }}
                                     className="relative z-10 text-4xl font-bold text-white leading-none tracking-tight drop-shadow-xl"
                                   >
                                     {selectedProject.title}
                                   </motion.h3>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#121212]">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">About the project</h4>
                                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                                            {selectedProject.longDescription}
                                        </p>

                                        <div className="mb-10">
                                            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Core Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.techStack.map((tech, i) => (
                                                    <motion.span 
                                                        key={tech} 
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.5 + (i * 0.05) }}
                                                        className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-white/10">
                                           <a
  href={selectedProject.demo}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:scale-105 transition transform"
>
  View Instagram Page
</a>
                                            
                                        </div>
                                    </motion.div>
                                </div>
                           </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
      </div>
    </section>
  );
}
