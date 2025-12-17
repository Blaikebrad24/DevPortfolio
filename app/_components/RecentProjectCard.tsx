"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitGraph, Star, GitFork } from 'lucide-react';
import { useRouter, usePathname } from "next/navigation";

interface ProjectCardProps {
    project : {
        id: string;
        title: string;
        description: string;
        technologies: string[];
        stars: number;
        forks: number;
        link: string;
        index: number;
    }
}

export default function RecentProjectCard({ project }: ProjectCardProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const targetPath = `/projects/${project.id}`;
        if (pathname === targetPath) return; // Prevent navigation loop
        router.push(targetPath);
    };

    const handleExternalLink = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.open(project.link, '_blank', 'noopener,noreferrer');
    };

    return (
        <motion.div
            onClick={handleClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: project.index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="block rounded-lg md:rounded-xl p-4 md:p-5 lg:p-6 border border-white/10 hover:border-[#F97316]/50 active:border-[#F97316]/70 transition-all cursor-pointer group touch-manipulation"
            style={{
                background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="p-1.5 md:p-2 rounded-lg bg-[#F97316]/10 border border-[#F97316]/20">
                        <GitGraph className="w-4 h-4 md:w-5 md:h-5 text-[#FB923C]" />
                    </div>
                    <h3 className="text-white text-base md:text-lg lg:text-xl group-hover:text-[#F97316] transition-colors">{project.title}</h3>
                </div>
                <button
                    onClick={handleExternalLink}
                    className="p-2 md:p-1.5 min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0 flex items-center justify-center hover:bg-[#F97316]/10 active:bg-[#F97316]/20 rounded transition-colors touch-manipulation"
                >
                    <ExternalLink className="w-5 h-5 md:w-4 md:h-4 text-[#9CA3AF] group-hover:text-[#F97316] transition-colors" />
                </button>
            </div>

            {/* Description */}
            <p className="text-[#D1D5DB] text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3 md:line-clamp-none">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FDBA74] text-[10px] md:text-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-3 md:gap-4 text-[#9CA3AF] text-xs md:text-sm">
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                </div>
            </div>
        </motion.div>
    );
}