"use client"
import Script from "next/script";

export default function RightIndexBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <div
                className="aura-background-component absolute inset-0 w-full h-full"
                data-alpha-mask="80"
                style={{
                    /* Fade from solid to transparent near bottom */
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: '100% 100%',
                    maskSize: '100% 100%',
                    /* Convert to grayscale */
                    filter: 'saturate(0)',
                    WebkitFilter: 'saturate(0)',
                }}
            >
                <div
                    data-us-project="XxCmD31vVBmiINgvYCho"
                    className="absolute inset-0 w-full h-full bg-neutral-950"
                />
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
            </div>
        </div>
    );
}
