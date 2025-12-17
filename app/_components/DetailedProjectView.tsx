"use client";


import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, GitGraph, ExternalLink, Star, GitFork, Lightbulb, TrendingUp, TrendingDown, Code2 } from 'lucide-react';
import JupiterBackground from "./JupiterBackground";

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
  
  export function DetailedProjectView({ title, description, technologies, stars, forks, link,design,process,learnings}: ProjectDetailProps) {

    const router = useRouter();
  
    return (
      <div className="min-h-screen relative">
        <JupiterBackground />
        
        <div className="relative z-10 min-h-screen p-4 md:p-6 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <motion.button
              onClick={() => router.push('/')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 mb-4 md:mb-6 lg:mb-8 px-4 py-2.5 md:py-2 min-h-[44px] rounded-lg text-[#FDBA74] hover:text-[#F97316] transition-colors touch-manipulation"
              style={{
                background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(249, 115, 22, 0.2)',
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </motion.button>
  
            {/* Project Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 mb-4 md:mb-6 border border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#F97316]/10 border border-[#F97316]/20">
                    <GitGraph className="w-6 h-6 text-[#FB923C]" />
                  </div>
                  <div>
                    <h1 className="text-white text-xl md:text-2xl lg:text-3xl mb-2">{title}</h1>
                    <p className="text-[#D1D5DB] text-sm md:text-base">{description}</p>
                  </div>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-[#F97316]/10 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-[#FB923C]" />
                </a>
              </div>
  
              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FDBA74] text-xs md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
  
              {/* Stats */}
              <div className="flex items-center gap-4 text-[#9CA3AF]">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{stars}</span>
                </div>
                <div className="flex items-center gap-1">
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
              className="rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 mb-4 md:mb-6 border border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#F97316]/10 border border-[#F97316]/20">
                  <Lightbulb className="w-5 h-5 text-[#FB923C]" />
                </div>
                <h2 className="text-white">Design Philosophy</h2>
              </div>
  
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#FDBA74] mb-3">Overview</h3>
                  <p className="text-[#D1D5DB] leading-relaxed">{design.overview}</p>
                </div>
  
                <div>
                  <h3 className="text-[#FDBA74] mb-3">Design Challenges</h3>
                  <ul className="space-y-2">
                    {design.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#D1D5DB]">
                        <span className="text-[#F97316] mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-[#FDBA74] mb-3">Solutions Implemented</h3>
                  <ul className="space-y-2">
                    {design.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#D1D5DB]">
                        <span className="text-[#F97316] mt-1">✓</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
  
            {/* Build Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 mb-4 md:mb-6 border border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#F97316]/10 border border-[#F97316]/20">
                  <Code2 className="w-5 h-5 text-[#FB923C]" />
                </div>
                <h2 className="text-white">Build Process</h2>
              </div>
  
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#FDBA74] mb-3">Timeline</h3>
                  <p className="text-[#D1D5DB]">{process.timeline}</p>
                </div>
  
                <div>
                  <h3 className="text-[#FDBA74] mb-3">Approach</h3>
                  <p className="text-[#D1D5DB] leading-relaxed">{process.approach}</p>
                </div>
  
                <div>
                  <h3 className="text-[#FDBA74] mb-3">Key Milestones</h3>
                  <div className="space-y-3">
                    {process.keyMilestones.map((milestone, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FDBA74] text-sm shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-[#D1D5DB] pt-1">{milestone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
  
            {/* Learnings Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 mb-4 md:mb-6 border border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              <h2 className="text-white mb-6">Journey & Learnings</h2>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                {/* Ups */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#10B981]" />
                    <h3 className="text-[#10B981]">Wins & Successes</h3>
                  </div>
                  <ul className="space-y-2">
                    {learnings.ups.map((up, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#D1D5DB]">
                        <span className="text-[#10B981] mt-1">↑</span>
                        <span>{up}</span>
                      </li>
                    ))}
                  </ul>
                </div>
  
                {/* Downs */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingDown className="w-5 h-5 text-[#EF4444]" />
                    <h3 className="text-[#EF4444]">Challenges & Setbacks</h3>
                  </div>
                  <ul className="space-y-2">
                    {learnings.downs.map((down, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#D1D5DB]">
                        <span className="text-[#EF4444] mt-1">↓</span>
                        <span>{down}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
  
              {/* Key Takeaways */}
              <div>
                <h3 className="text-[#FDBA74] mb-3">Key Takeaways</h3>
                <ul className="space-y-2">
                  {learnings.takeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-2 text-[#D1D5DB]">
                      <span className="text-[#F97316] mt-1">→</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }