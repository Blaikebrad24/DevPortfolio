"use client"
import Script from "next/script";
import { useEffect } from "react";

export default function RightIndexBackground() {
    useEffect(() => {
        // Initialize Unicorn Studio when component mounts
        // The script will handle the actual initialization
        return () => {
            // Cleanup if needed
        };
    }, []);

    return (
        <>
            {/* Unicorn Studio Script */}
            <Script
                id="unicorn-studio-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(){
                            if(!window.UnicornStudio){
                                window.UnicornStudio={isInitialized:!1};
                                var i=document.createElement("script");
                                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
                                i.onload=function(){
                                    window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
                                };
                                (document.head || document.body).appendChild(i);
                            }
                        }();
                    `,
                }}
            />

            {/* Unicorn Studio Background Container */}
            <div
                data-us-project="X0ErZR3QhPzMHfKgBbJJ"
                className="fixed inset-0 -z-50 w-full h-full"
            />

            {/* Orange Color Overlay */}
            <div
                className="fixed inset-0 -z-40 w-full h-full pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.08) 0%, rgba(234, 88, 12, 0.05) 50%, transparent 100%)',
                    mixBlendMode: 'screen'
                }}
            />
        </>
    );
}
