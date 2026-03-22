"use client";

export default function TechStackCard() {
  return (
    <article
      className="relative overflow-hidden ring-1 ring-black/5 text-white bg-gray-900 h-48 sm:h-56 lg:h-64 rounded-[24px] sm:rounded-[32px] p-4 sm:p-5 shadow-sm border-gradient animate-on-scroll animate-[fadeSlideIn_0.8s_ease-out_0.05s_both] backdrop-blur-lg flex flex-col justify-between"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/FutureAstronaut.png"
          alt="Tech Stack Background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-neutral-900/70 to-slate-950/80"></div> */}
      </div>

      {/* Top Section */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="text-[10px] sm:text-xs font-medium" style={{ opacity: 0.95 }}>
          Go To Tech Stack
        </div>
        <span
          className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] uppercase border border-white/70 rounded px-1.5 py-0.5"
          aria-label="Featured"
          style={{ opacity: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-2.5 h-2.5"
          >
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
            <path d="M5 21h14"></path>
          </svg>
        </span>
      </div>

      {/* Middle Section */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <h2 className="text-xs sm:text-sm font-semibold tracking-tight text-white">
          Full Stack Expertise
        </h2>
        <p className="text-[10px] sm:text-xs text-white/75 mt-1 leading-relaxed">
          Modern frameworks & technologies
        </p>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 mt-2">
        <ul className="space-y-1 text-white text-[9px] sm:text-[10px]">
          <li className="flex items-start gap-1.5">
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
              className="w-3 h-3 mt-0.5 shrink-0"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <span>Postgres, Next.js, TypeScript</span>
          </li>
          <li className="flex items-start gap-1.5">
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
              className="w-3 h-3 mt-0.5 shrink-0"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <span>Java, Python, Spring Boot, FastAPI</span>
          </li>
          <li className="flex items-start gap-1.5">
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
              className="w-3 h-3 mt-0.5 shrink-0"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            <span>AWS, Azure Func, Docker, K8s</span>
          </li>
        </ul>
      </div>
    </article>
  );
}
