"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, GitGraph, ExternalLink, Star, GitFork, Lightbulb, TrendingUp, TrendingDown, Code2 } from "lucide-react";

interface ProjectDetailProps {
  title: string;
  description: string;
  technologies: string[];
  stars: number;
  forks: number;
  link: string;
  design: {
    overview: string;
    challenges: string[];
    solutions: string[];
  };
  process: {
    timeline: string;
    approach: string;
    keyMilestones: string[];
  };
  learnings: {
    ups: string[];
    downs: string[];
    takeaways: string[];
  };
}

export function DetailedProjectView({ title, description, technologies, stars, forks, link, design, process, learnings }: ProjectDetailProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen relative selection:bg-[#FF4500] selection:text-white flex flex-col items-center py-0 lg:py-16 overflow-x-hidden px-0 lg:px-12 w-full">

      {/* Back nav */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference pointer-events-none px-6 lg:px-12 py-6 flex justify-between items-center">
        <button
          onClick={() => router.push("/")}
          className="pointer-events-auto font-medium tracking-tighter text-white text-lg hover:text-[#FF4500] transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          BLAIKE BRADFORD
        </button>
      </nav>

      {/* Master Shell */}
      <section className="w-full flex justify-center relative z-10">
        <div className="w-full max-w-[1400px] bg-transparent lg:bg-[#F4F3ED] p-0 lg:p-3 relative shadow-none lg:shadow-2xl lg:shadow-black/50 mt-0 lg:mt-12">
          {/* Corner Markers */}
          <div className="hidden lg:block absolute top-3 left-3 w-1.5 h-1.5 border border-[#0A0A0A] bg-transparent opacity-30" />
          <div className="hidden lg:block absolute top-3 right-3 w-1.5 h-1.5 border border-[#0A0A0A] bg-transparent opacity-30" />
          <div className="hidden lg:block absolute bottom-3 left-3 w-1.5 h-1.5 border border-[#0A0A0A] bg-transparent opacity-30" />
          <div className="hidden lg:block absolute bottom-3 right-3 w-1.5 h-1.5 border border-[#0A0A0A] bg-transparent opacity-30" />

          <div className="relative bg-transparent lg:bg-gradient-to-b lg:from-zinc-500/40 lg:via-zinc-800/40 lg:to-black/80 p-0 lg:p-[1px] h-full">
            <main className="bg-[#0F0F0F] relative flex flex-col w-full overflow-hidden">

              {/* Grid Lines */}
              <div className="absolute inset-0 pointer-events-none flex justify-between z-0">
                <div className="w-[1px] h-full bg-white/5 relative left-[8%] hidden md:block" />
                <div className="w-[1px] h-full bg-white/5 relative left-[40%] hidden lg:block" />
                <div className="w-[1px] h-full bg-white/5 relative right-[8%] hidden md:block" />
              </div>

              {/* Section Rail */}
              <header className="sticky top-0 w-full h-12 border-b border-white/10 flex items-center justify-between px-6 lg:px-12 z-30 bg-[#0F0F0F]/80 backdrop-blur-sm">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
                  Project Detail
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
                >
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </header>

              <div className="relative z-10 px-6 md:px-12 lg:px-20 py-12 max-w-5xl mx-auto w-full">

                {/* Project Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center shrink-0">
                      <GitGraph className="w-6 h-6 text-[#FF4500]" />
                    </div>
                    <div>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-light text-white mb-3">{title}</h1>
                      <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">{description}</p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-white/10 text-zinc-400 bg-zinc-900/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-6 text-zinc-500 text-sm font-mono">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      <span>{stars}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GitFork className="w-4 h-4" />
                      <span>{forks}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Design Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-[#050505] border border-white/10 p-6 md:p-8 mb-6"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-8 h-8 bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-[#FF4500]" />
                    </div>
                    <h2 className="text-[10px] font-mono uppercase tracking-widest text-white">Design Philosophy</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#FF4500] mb-3">Overview</h3>
                      <p className="text-sm text-zinc-300 font-light leading-relaxed">{design.overview}</p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#FF4500] mb-3">Challenges</h3>
                      <ul className="space-y-2">
                        {design.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                            <span className="text-zinc-600 mt-0.5">0{index + 1}</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#FF4500] mb-3">Solutions</h3>
                      <ul className="space-y-2">
                        {design.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-zinc-300 font-light">
                            <span className="text-[#FF4500] mt-0.5">&#10003;</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Build Process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#050505] border border-white/10 p-6 md:p-8 mb-6"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-8 h-8 bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-[#FF4500]" />
                    </div>
                    <h2 className="text-[10px] font-mono uppercase tracking-widest text-white">Build Process</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#FF4500] mb-3">Timeline</h3>
                      <p className="text-sm text-zinc-300 font-light">{process.timeline}</p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#FF4500] mb-3">Approach</h3>
                      <p className="text-sm text-zinc-300 font-light leading-relaxed">{process.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#FF4500] mb-3">Key Milestones</h3>
                      <div className="space-y-3">
                        {process.keyMilestones.map((milestone, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="w-8 h-8 border border-white/10 bg-zinc-900 flex items-center justify-center text-zinc-500 text-xs font-mono shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-sm text-zinc-300 font-light pt-1.5">{milestone}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Learnings */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#050505] border border-white/10 p-6 md:p-8 mb-6"
                >
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <h2 className="text-[10px] font-mono uppercase tracking-widest text-white">Journey & Learnings</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Wins</h3>
                      </div>
                      <ul className="space-y-2">
                        {learnings.ups.map((up, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-zinc-300 font-light">
                            <span className="text-emerald-400 mt-0.5">&#8593;</span>
                            <span>{up}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingDown className="w-4 h-4 text-red-400" />
                        <h3 className="text-[10px] font-mono uppercase tracking-widest text-red-400">Challenges</h3>
                      </div>
                      <ul className="space-y-2">
                        {learnings.downs.map((down, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-zinc-300 font-light">
                            <span className="text-red-400 mt-0.5">&#8595;</span>
                            <span>{down}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#FF4500] mb-3">Takeaways</h3>
                    <ul className="space-y-2">
                      {learnings.takeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-zinc-300 font-light">
                          <span className="text-[#FF4500] mt-0.5">&#8594;</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

              </div>

              {/* Footer */}
              <div className="p-6 lg:px-20 relative z-10 flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-zinc-600 border-t border-white/10 bg-[#0A0A0A]">
                <span>&copy; {new Date().getFullYear()} Blaike Bradford</span>
                <div className="font-medium tracking-tighter text-white/50">BRADFORD /// SYS</div>
              </div>

            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
