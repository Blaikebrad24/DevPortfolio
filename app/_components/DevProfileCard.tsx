"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, BriefcaseBusiness } from "lucide-react";


interface StatItem {

    icon: React.ReactNode;
    label: string;
    value: string;
}

export default function DevProfileCard() {

    const stats: StatItem[] = [
        { icon: <Briefcase className="w-4 h-4" />, label: 'Experience', value: '10+ Years' },
        { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: 'Dallas, Tx' },
        { icon: <BriefcaseBusiness className="w-4 h-4" />, label: 'Current Role', value: 'Sr. Systems Engineer - AT&T' },
        
      ];

      return (
        <motion.div
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Main Profile Card */}
          <div 
            className="rounded-xl p-6 border border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#F97316]/50 shadow-lg shadow-[#F97316]/20">
                  {/* <ImageWithFallback
                    src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ4NzE2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900" />
              </div>
    
              {/* Name & Title */}
              <div>
                <h1 className="text-white mb-1">Blaike A. Bradford</h1>
                <p className="text-[#FB923C]">Full Stack Software Engineer</p>
              </div>
    
              {/* Bio */}
              <p className="text-[#D1D5DB] text-sm leading-relaxed">
              A passionate software engineer dedicated to crafting innovative solutions, fueled by a curiosity for emerging technologies and scientific advancements. 
              My goal is to leverage my skills to create impactful AI products that enhance user experiences and drive progress.
              </p>
            </div>
          </div>
    
          {/* Stats Cards */}
          <div className="space-y-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="rounded-lg p-4 border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#FB923C]">
                    {stat.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[#9CA3AF] text-xs">{stat.label}</p>
                    <p className="text-white text-sm">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
}