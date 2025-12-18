"use client";

import { SwipeCarousel } from "./CurrentStudyCarousel";

export default function CurrentStudyFocus() {
  return (
    <div className="border-gradient animate-on-scroll animate-[fadeSlideIn_0.8s_ease-out_0.1s_both] flex flex-col bg-neutral-900/40 h-48 sm:h-56 lg:h-64 rounded-[24px] sm:rounded-[32px] backdrop-blur-lg relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/abstractBlue.jpeg"
          alt="Abstract Blue Background"
          className="w-full h-full object-fill object-center "
          style={{ objectPosition: '50% 50%' }}
        />
      </div>

      {/* Content with Carousel */}
      <div className="relative z-10 h-full flex flex-col p-4 sm:p-5 justify-between">
        {/* Icon at top */}
        <div className="flex items-center">
          <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-500/20 backdrop-blur shrink-0 ring-1 ring-blue-400/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </span>
        </div>

        {/* Carousel in middle */}
        <div className="flex-1 -mx-4 sm:-mx-5 my-2">
          <SwipeCarousel />
        </div>

        {/* Text at bottom */}
        <div>
          <h3 className="text-xs sm:text-sm font-semibold tracking-tight text-white">
            Current Study Focus
          </h3>
          <p className="mt-1 text-[10px] sm:text-xs text-neutral-300 leading-relaxed">
            EC2 Fargate, Wireshark
          </p>
        </div>
      </div>
    </div>
  );
}
