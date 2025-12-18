


export default function CreativeResumeCard() {



    return (
              
       <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 bg-linear-to-b from-white/10 to-white/5 backdrop-blur-md animate-on-scroll animate-[fadeSlideIn_1s_ease-out_0.28s_both]">
        <div className="absolute inset-0">
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/459579f4-e2d0-4218-a12d-f974a4b89651_800w.jpg" alt="Seamless connection" className="opacity-70 w-full h-full object-cover"/>
          <div
            className="bg-linear-to-t from-slate-950/80 via-slate-950/30 to-transparent absolute top-0 right-0 bottom-0 left-0">
          </div>
        </div>
        <div className="relative p-5 md:p-6">
          <h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist">Resume</h3>
          <p className="mt-2 text-sm text-slate-200/80 font-geist">
            Leadership and learning are indispensable to each other. 
          </p>
          <p className="italic"> ~ JFK</p>
        </div>
        <div className="relative p-5 md:p-6 pt-0">
          {/* <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/80 ring-1 ring-white/15 font-geist">
            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
                className=""></path>
              <path d="M5 3v4" className=""></path>
              <path d="M19 17v4" className=""></path>
              <path d="M3 5h4" className=""></path>
              <path d="M17 19h4" className=""></path>
            </svg>
            Auto‑summaries &amp; smart insights
          </div> */}
        </div>
      </div>
    )
}