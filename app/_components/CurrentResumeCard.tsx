"use client";

export default function CurrentResumeCard() {
  return (
    <div className="border-gradient animate-on-scroll animate-[fadeSlideIn_0.8s_ease-out_0.15s_both] flex flex-col bg-neutral-900/40 h-48 sm:h-56 lg:h-64 rounded-[24px] sm:rounded-[32px] backdrop-blur-lg justify-between relative overflow-hidden ring-1 ring-white/15">
      {/* Background with gradient */}
      <div className="absolute inset-0">
        <img
          src="/abstractWaveBlue.jpeg"
          alt="Resume Background"
          className="w-full h-full object-cover opacity-50"
        />
        {/* <div className="absolute inset-0 bg-linear-to-br from-slate-900/70 via-neutral-900/50 to-slate-950/70"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-between h-full">
        <div className="flex items-center">
          <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-purple-500 backdrop-blur shrink-0 ring-1 ring-emerald-400/30">
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
              className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </span>
        </div>
        <div>
          <h3 className="text-xs sm:text-sm font-semibold tracking-tight text-white">
            Resume
          </h3>
          <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-200/80 leading-relaxed">
            Leadership and learning are indispensable to each other.
          </p>
          <p className="italic text-[9px] sm:text-[10px] text-slate-300/60 mt-0.5 mb-2">
            ~ JFK
          </p>
          <a
            href="/resume.pdf"
            download="Blaike_Bradford_Resume.pdf"
            className="inline-flex items-center gap-1.5 bg-purple-500/20 hover:bg-purple-500/30 transition-colors backdrop-blur-sm border border-purple-400/30 rounded-lg px-2.5 py-1.5 text-[10px] sm:text-xs text-purple-200 font-medium"
          >
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
              className="w-3 h-3"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
