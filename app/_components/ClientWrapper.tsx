"use client";

import { useEffect } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize scroll animations
    const initInViewAnimations = () => {
      if (typeof window !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
          observer.observe(el);
        });
      }
    };

    initInViewAnimations();
  }, []);

  return <>{children}</>;
}
