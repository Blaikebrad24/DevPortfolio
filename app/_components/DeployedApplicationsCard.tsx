import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AppsCardProps {
    icon: LucideIcon;
    label: string;
    value: string;
    index: number;
  }
  
  export function DeployedApplicationsCard({ icon: Icon, label, value, index }: AppsCardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="rounded-xl p-5 border border-white/10"
        style={{
          background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.85) 0%, rgba(20, 20, 20, 0.5) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="p-3 rounded-lg bg-[#F97316]/10 border border-[#F97316]/20">
            <Icon className="w-6 h-6 text-[#FB923C]" />
          </div>
          <p className="text-white text-2xl">{value}</p>
          <p className="text-[#9CA3AF] text-sm">{label}</p>
        </div>
      </motion.div>
    );
  }