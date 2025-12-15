"use client"
import { motion } from "framer-motion";
import JupiterImage from "../../public/Jupiter.jpg";

export default function RightIndexBackground() {
    return (
        <div className="fixed inset-0 overflow-hidden -z-50">
            {/* Pure black space background */}
            <div className="absolute inset-0 bg-black" />
            {/* Animated plasma flows - subtle and ethereal */}
            <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                    background: `
                        radial-gradient(ellipse 800px 600px at 20% 40%, rgba(249, 115, 22, 0.4) 0%, transparent 50%),
                        radial-gradient(ellipse 600px 800px at 80% 60%, rgba(251, 146, 60, 0.35) 0%, transparent 50%)
                    `,
                }}
                animate={{
                    x: [0, 30, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute inset-0 opacity-18"
                style={{
                    background: `
                        radial-gradient(ellipse 700px 500px at 60% 30%, rgba(253, 186, 116, 0.3) 0%, transparent 50%),
                        radial-gradient(ellipse 500px 700px at 30% 70%, rgba(249, 115, 22, 0.25) 0%, transparent 50%)
                    `,
                }}
                animate={{
                    x: [0, -25, 0],
                    y: [0, 35, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Wispy plasma tendrils */}
            <motion.div
                className="absolute inset-0 opacity-15"
                style={{
                    background: `
                        radial-gradient(ellipse 400px 800px at 10% 50%, rgba(251, 146, 60, 0.3) 0%, transparent 40%),
                        radial-gradient(ellipse 600px 400px at 90% 50%, rgba(249, 115, 22, 0.25) 0%, transparent 40%)
                    `,
                }}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Additional flowing orange plasma */}
            <motion.div
                className="absolute inset-0 opacity-12"
                style={{
                    background: `
                        radial-gradient(ellipse 900px 700px at 50% 50%, rgba(234, 88, 12, 0.2) 0%, transparent 50%),
                        radial-gradient(ellipse 500px 900px at 75% 25%, rgba(249, 115, 22, 0.15) 0%, transparent 40%)
                    `,
                }}
                animate={{
                    x: [0, 40, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            {/* Jupiter - positioned center-left, partially eclipsed */}
            <div className="absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-[65vh] h-[65vh] max-w-225 max-h-225">
                    {/* Jupiter planet image */}
                    <div
                        className="absolute inset-0 rounded-full overflow-hidden"
                        style={{
                            backgroundImage: `url(${JupiterImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Eclipse gradient - half of Jupiter fading into darkness */}
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'linear-gradient(110deg, transparent 0%, transparent 45%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 60%, rgba(0, 0, 0, 0.95) 75%, #000000 90%)',
                            }}
                        />
                    </div>
                    {/* SVG for animated traveling light emitter along visible edge */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1000 1000"
                        style={{ overflow: 'visible' }}
                    >
                        <defs>
                            {/* Glow filter for the emitter */}
                            <filter id="emitterGlow" x="-200%" y="-200%" width="400%" height="400%">
                                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            {/* Radial gradient for emitter core */}
                            <radialGradient id="emitterCore">
                                <stop offset="0%" stopColor="#FDBA74" stopOpacity="1" />
                                <stop offset="40%" stopColor="#FB923C" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
                            </radialGradient>
                            {/* Define the arc path along Jupiter's visible edge (crescent) */}
                            <path
                                id="jupiterEdge"
                                d="M 500,50 A 450,450 0 0,1 850,500 A 450,450 0 0,1 500,950"
                                fill="none"
                                stroke="none"
                            />
                        </defs>
                        {/* Animated light emitter traveling along the edge */}
                        <g>
                            {/* Main emitter orb */}
                            <motion.circle
                                r="12"
                                fill="url(#emitterCore)"
                                filter="url(#emitterGlow)"
                                style={{
                                    offsetPath: "path('M 500,50 A 450,450 0 0,1 850,500 A 450,450 0 0,1 500,950')",
                                    offsetRotate: "0deg",
                                }}
                                animate={{
                                    offsetDistance: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                            {/* Trailing glow effect 1 */}
                            <motion.circle
                                r="10"
                                fill="#FB923C"
                                opacity="0.5"
                                filter="url(#emitterGlow)"
                                style={{
                                    offsetPath: "path('M 500,50 A 450,450 0 0,1 850,500 A 450,450 0 0,1 500,950')",
                                    offsetRotate: "0deg",
                                }}
                                animate={{
                                    offsetDistance: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 0.05,
                                }}
                            />
                            {/* Trailing glow effect 2 */}
                            <motion.circle
                                r="8"
                                fill="#F97316"
                                opacity="0.3"
                                filter="url(#emitterGlow)"
                                style={{
                                    offsetPath: "path('M 500,50 A 450,450 0 0,1 850,500 A 450,450 0 0,1 500,950')",
                                    offsetRotate: "0deg",
                                }}
                                animate={{
                                    offsetDistance: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 0.1,
                                }}
                            />
                            {/* Trailing glow effect 3 (comet tail) */}
                            <motion.circle
                                r="6"
                                fill="#F97316"
                                opacity="0.15"
                                filter="url(#emitterGlow)"
                                style={{
                                    offsetPath: "path('M 500,50 A 450,450 0 0,1 850,500 A 450,450 0 0,1 500,950')",
                                    offsetRotate: "0deg",
                                }}
                                animate={{
                                    offsetDistance: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 0.15,
                                }}
                            />
                        </g>
                    </svg>
                    {/* Subtle atmospheric glow around Jupiter */}
                    <div
                        className="absolute -inset-4 rounded-full pointer-events-none opacity-30"
                        style={{
                            background: 'radial-gradient(circle at 40% 40%, rgba(251, 146, 60, 0.2) 0%, transparent 60%)',
                        }}
                    />
                    {/* Edge rim light on the illuminated side */}
                    <div
                        className="absolute inset-0 rounded-full pointer-events-none opacity-40"
                        style={{
                            background: 'radial-gradient(ellipse at 30% 50%, rgba(253, 186, 116, 0.3) 0%, transparent 40%)',
                        }}
                    />
                </div>
            </div>
            {/* Subtle vignette for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
                }}
            />
        </div>
    );
}