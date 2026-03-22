"use client";

export default function ProjectUpdates() {
  const updates = [
    { project: "AI Security Guard", status: "In Progress", color: "text-yellow-400" },
    { project: "Packet Vision", status: "Planning", color: "text-blue-400" },
    { project: "Winterfell Gateway", status: "Sys Design", color: "text-green-400" }
  ];

  return (
    <div className="border-gradient animate-on-scroll animate-[fadeSlideIn_0.8s_ease-out_0.2s_both] flex flex-col h-48 sm:h-56 lg:h-64 rounded-[24px] sm:rounded-[32px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/RamTRX-Wallpaper.jpg"
          alt="Project Updates Background"
          className="w-full h-full object-cover opacity-20"
        />
        {/* <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-orange-500/20 backdrop-blur shrink-0 ring-1 ring-purple-400/30">
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
              className="w-4 h-4 sm:w-5 sm:h-5 text-orange-300"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </span>
          <h3 className="text-xs sm:text-sm font-semibold tracking-tight text-white">
            Project Updates
          </h3>
        </div>

        <div className="flex-1 space-y-2 overflow-y-auto">
          {updates.map((update, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white/5 rounded-lg p-2 backdrop-blur-sm border border-white/10"
            >
              <span className="text-[10px] sm:text-xs text-neutral-200 truncate flex-1">
                {update.project}
              </span>
              <span className={`text-[9px] sm:text-[10px] font-medium ${update.color} ml-2`}>
                {update.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
