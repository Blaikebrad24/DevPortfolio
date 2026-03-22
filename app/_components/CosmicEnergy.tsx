"use client"
import Script from "next/script";

export default function CosmicEnergy() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
            <div
                className="absolute top-0 left-0 -z-10 w-full h-full"
                data-us-project="BhoqrigscYbD7NN1fwcp"
                style={{
                    /* Shift blue hues to orange */
                    filter: 'hue-rotate(-210deg) saturate(1.2)',
                    WebkitFilter: 'hue-rotate(-210deg) saturate(1.2)',
                }}
            />
            <div
                data-us-project="BhoqrigscYbD7NN1fwcp"
                className="absolute top-0 left-0 -z-10 w-full h-full"
                style={{
                    /* Shift blue hues to orange */
                    filter: 'hue-rotate(-210deg) saturate(1.2)',
                    WebkitFilter: 'hue-rotate(-210deg) saturate(1.2)',
                }}
            />
            <Script
                id="unicorn-studio-cosmic-script"
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
        </div>
    );
}
