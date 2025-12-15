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
            className="block rounded-xl p-6 border border-white/10 hover:border-[#F97316]/50 transition-all cursor-pointer group"
            style={{
                background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#F97316]/10 border border-[#F97316]/20">
                        <GitGraph className="w-5 h-5 text-[#FB923C]" />
                    </div>
                    <h3 className="text-white group-hover:text-[#F97316] transition-colors">{project.title}</h3>
                </div>
                <button
                    onClick={handleExternalLink}
                    className="p-1 hover:bg-[#F97316]/10 rounded transition-colors"
                >
                    <ExternalLink className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#F97316] transition-colors" />
                </button>
            </div>

            {/* Description */}
            <p className="text-[#D1D5DB] text-sm mb-4 leading-relaxed">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-[#FDBA74] text-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-[#9CA3AF] text-sm">
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