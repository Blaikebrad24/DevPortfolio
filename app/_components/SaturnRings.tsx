"use client"
import Script from "next/script";

export default function SaturnRings() {
    return (
        <>
            <div
                data-us-project="hRFfUymDGOHwtFe7evR2"
                className="absolute w-full h-full left-0 top-0 -z-10"
            />
            <Script
                id="unicorn-studio-saturn-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(){
                            if(!window.UnicornStudio){
                                window.UnicornStudio={isInitialized:!1};
                                var i=document.createElement("script");
                                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
                                i.onload=function(){
                                    window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
                                };
                                (document.head || document.body).appendChild(i);
                            }
                        }();
                    `,
                }}
            />
        </>
    );
}
