"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

interface SocialCardProps {
    icon: IconType;
    label: string;
    username: string;
    link: string;
    index: number;
}

function SocialCard({ icon: Icon, label, username, link, index }: SocialCardProps) {
  return (
        <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="block rounded-lg md:rounded-xl p-3 md:p-4 min-h-[60px] md:min-h-0 border border-white/10 hover:border-[#F97316]/50 active:border-[#F97316]/70 transition-all cursor-pointer group touch-manipulation"
        style={{
            background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
        }}
        >
        <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 rounded-lg bg-[#F97316]/10 border border-[#F97316]/20 group-hover:bg-[#F97316]/20 transition-colors">
            <Icon className="w-5 h-5 md:w-5 md:h-5 text-[#FB923C]" />
            </div>
            <div className="flex-1 min-w-0">
            <p className="text-[#9CA3AF] text-[10px] md:text-xs">{label}</p>
            <p className="text-white text-xs md:text-sm group-hover:text-[#F97316] transition-colors truncate">{username}</p>
            </div>
        </div>
        </motion.a>
    );
}

const socials = [
    { icon: FaGithub, label: 'GitHub', username: '@Blaikebrad24', link: 'https://github.com/Blaikebrad24' },
    { icon: FaLinkedin, label: 'LinkedIn', username: 'Blaike Bradford', link: 'https://www.linkedin.com/in/blaikebradford/' },
    { icon: FaTwitter, label: 'Twitter', username: '@BlaikeBrad_dev', link: 'https://twitter.com' },
];

export function SocialCards() {
  return (
        <div className="space-y-2 md:space-y-3 p-0 md:p-2 lg:p-4">
        {socials.map((social, index) => (
            <SocialCard key={social.label} {...social} index={index} />
        ))}
        </div>
    );
}