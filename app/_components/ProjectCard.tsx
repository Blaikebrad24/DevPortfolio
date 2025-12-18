"use client";

import { useRouter } from "next/navigation";
import { ExternalLink, Star, GitFork, Code2 } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    stars: number;
    forks: number;
    link: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${project.id}`);
  };

  const handleExternalLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.link, '_blank', 'noopener,noreferrer');
  };

  const delay = 0.05 + index * 0.05;

  return (
    <div
      onClick={handleClick}
      className={`border-gradient animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_${delay}s_both] flex flex-col bg-neutral-900/40 rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 backdrop-blur-lg cursor-pointer group hover:bg-neutral-900/60 transition-all hover:scale-[1.02] min-h-[280px]`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur flex-shrink-0 group-hover:bg-white/15 transition-colors">
            <Code2 className="w-4 h-4 text-neutral-200" />
          </span>
        </div>
        <button
          onClick={handleExternalLink}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white mb-2 group-hover:text-neutral-100 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 mb-3">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-[10px] sm:text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-[10px] sm:text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3 text-neutral-400 text-xs sm:text-sm pt-3 border-t border-white/5">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5" />
            <span>{project.stars}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="w-3.5 h-3.5" />
            <span>{project.forks}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
