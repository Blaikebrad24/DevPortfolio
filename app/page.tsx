import { fetchFilteredGithub } from "./_actions/fetchFilteredGithub";
import { Code2, Rocket, Users, Zap, Github, Linkedin, Twitter, ArrowRight, Briefcase, MapPin, LogIn } from "lucide-react";
import Link from "next/link";
import ClientWrapper from "./_components/ClientWrapper";
import ProjectCard from "./_components/ProjectCard";
import TechStackCard from "./_components/TechStackCard";
import CurrentStudyFocus from "./_components/CurrentStudyFocus";
import CurrentResumeCard from "./_components/CurrentResumeCard";
import ProjectUpdates from "./_components/ProjectUpdates";


export default async function Home() {
  const projects = await fetchFilteredGithub();

  return (
    <ClientWrapper>
    <div className="min-h-screen text-neutral-200">
      {/* Header */}
      <header className="z-20 relative">
        <nav className="sm:px-6 lg:px-8 sm:pt-6 max-w-7xl mr-auto ml-auto pt-4 pr-4 pl-4">
          <div className="flex border-gradient fixed w-[calc(100%-2rem)] sm:w-auto sm:max-w-3xl sm:rounded-[32px] sm:right-0 sm:left-0 sm:gap-x-4 bg-neutral-900/40 h-16 rounded-[24px] mr-auto ml-auto pt-2 pr-0 pb-2 pl-5 top-4 right-4 left-4 backdrop-blur-lg gap-x-2 items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center justify-center sm:w-7 sm:h-7 shrink-0 w-6 h-6 bg-white/10 ring-neutral-50/10 ring-1 rounded-xl">
                <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white tracking-tight">BLAIKE BRADFORD</span>
            </div>
            <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-neutral-300">
              <a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a>
              <a href="#tech-stack" className="hover:text-white transition-colors cursor-pointer">Skills Stack</a>
              <a href="#projects" className="hover:text-white transition-colors cursor-pointer">Projects</a>
            </div>
            <a
              href="https://www.linkedin.com/in/blaikebradford/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wrapper-nav"
              style={{
                "--dot-size": "6px",
                "--line-weight": "1px",
                "--line-distance": "0.6rem 0.8rem",
                "--animation-speed": "0.35s",
                "--dot-color": "#fffa",
                "--line-color": "#fffa",
                "--grid-color": "#fff3",
                position: "relative",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "auto",
                padding: "var(--line-distance)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                userSelect: "none"
              } as React.CSSProperties}
            >
              <div className="line horizontal top"></div>
              <div className="line vertical right"></div>
              <div className="line horizontal bottom"></div>
              <div className="line vertical left"></div>
              <div className="dot top left"></div>
              <div className="dot top right"></div>
              <div className="dot bottom right"></div>
              <div className="dot bottom left"></div>
              <button className="btn bg-transparent" style={{
                maskImage: "linear-gradient(110deg, transparent, black 35%, black 65%, transparent)",
                WebkitMaskImage: "linear-gradient(110deg, transparent, black 35%, black 65%, transparent)"
              }}>
                <LogIn className="w-3.5 h-3.5 text-white/40" />
                <span className="btn-text">Connect</span>
              </button>
            </a>
          </div>
        </nav>
      </header>

      <main className="relative">
        <section id="about" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24 sm:mt-28 lg:mt-32 mb-12 sm:mb-16 lg:mb-20">
          {/* Top feature chips */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
            {/* Card 1 - TechStackCard */}
            <TechStackCard />

            {/* Card 2 - CurrentStudyFocus */}
            <CurrentStudyFocus />

            {/* Card 3 - CurrentResumeCard */}
            <CurrentResumeCard />

            {/* Card 4 - ProjectUpdates */}
            <ProjectUpdates />
          </div>

          {/* Hero */}
          <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 border-gradient p-3 sm:p-4 animate-on-scroll animate-[fadeSlideIn_0.8s_ease-out_0.25s_both] bg-neutral-900/40 rounded-[24px] sm:rounded-[32px] backdrop-blur-lg items-stretch">
            {/* Visual */}
            <div className="relative overflow-hidden rounded-4xl sm:rounded-[24px] md:rounded-[32px] min-h-60 sm:min-h-70 md:min-h-130">
              <img src="/BB_NewHaven.jpeg" alt="Blaike Bradford" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
              <div className="bg-linear-to-t from-black/60 via-black/10 to-transparent absolute inset-0"></div>
              <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[28px_28px]"></div>
              <div className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 backdrop-blur shrink-0">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </span>
                <p className="text-[10px] sm:text-xs text-neutral-200">Systems/Software Engineer</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col sm:p-6 md:p-8 pt-4 pr-4 pb-4 pl-4 justify-center">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-neutral-400">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-400/80"></span>
                <span>Plan. Design. Build. Execute.</span>
              </div>
              <h1 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tighter font-light leading-tight">
                Blaike A. Bradford
              </h1>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed">
               I thrive on transforming complex challenges into elegant code, exploring the intersection of software engineering and artificial intelligence. 
                      Whether architecting scalable systems or experimenting with cutting-edge ML frameworks, I&apos;m driven by the pursuit of building technology that solves real-world problems and pushes boundaries.
              </p>
              <div className="sm:mt-6 flex flex-col lg:flex-row lg:items-center mt-6 gap-x-3 gap-y-3 items-stretch">
                {/* Animated Gradient Button */}
                <a
                  href="https://github.com/Blaikebrad24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button"
                >
                  <span className="inner">
                    View Projects
                    <ArrowRight className="icon w-4 h-4" />
                  </span>
                </a>

                {/* Animated Border Button */}
                <a
                  href="https://www.linkedin.com/in/blaikebradford/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wrapper"
                  style={{
                    "--dot-size": "8px",
                    "--line-weight": "1px",
                    "--line-distance": "0.8rem 1rem",
                    "--animation-speed": "0.35s",
                    "--dot-color": "#fffa",
                    "--line-color": "#fffa",
                    "--grid-color": "#fff3",
                    position: "relative",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "auto",
                    height: "auto",
                    padding: "var(--line-distance)",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    userSelect: "none"
                  } as React.CSSProperties}
                >
                  <div className="line horizontal top"></div>
                  <div className="line vertical right"></div>
                  <div className="line horizontal bottom"></div>
                  <div className="line vertical left"></div>
                  <div className="dot top left"></div>
                  <div className="dot top right"></div>
                  <div className="dot bottom right"></div>
                  <div className="dot bottom left"></div>
                  <button className="btn bg-transparent" style={{
                    maskImage: "linear-gradient(110deg, transparent, black 35%, black 65%, transparent)",
                    WebkitMaskImage: "linear-gradient(110deg, transparent, black 35%, black 65%, transparent)"
                  }}>
                    <span className="btn-text">LinkedIn connect</span>
                  </button>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-6 sm:mt-7 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="border-gradient before:rounded-3xl sm:before:rounded-4xl md:before:rounded-[24px] bg-neutral-900/60 rounded-3xl sm:rounded-4xl md:rounded-[24px] p-3 sm:p-4">
                  <p className="text-[9px] sm:text-[10px] text-neutral-400">Experience</p>
                  <p className="text-base font-semibold text-white tracking-tight mt-0.5 sm:mt-1 sm:text-lg md:text-sm">10+</p>
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-neutral-400">Years</p>
                </div>
                <div className="border-gradient before:rounded-3xl sm:before:rounded-4xl md:before:rounded-[24px] bg-neutral-900/60 rounded-3xl sm:rounded-4xl md:rounded-[24px] p-3 sm:p-4">
                  <p className="text-[9px] sm:text-[10px] text-neutral-400">Location</p>
                  <p className="text-base font-semibold text-white tracking-tight mt-0.5 sm:mt-1 sm:text-lg md:text-sm truncate">Dallas</p>
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-neutral-400">Texas, USA</p>
                </div>
                <div className="border-gradient before:rounded-3xl sm:before:rounded-4xl md:before:rounded-[24px] bg-neutral-900/60 border border-orange-400 rounded-3xl sm:rounded-4xl md:rounded-[24px] p-3 sm:p-4">
                  <p className="text-[9px] sm:text-[10px] text-neutral-400">Role</p>
                  <p className="mt-0.5 text-base font-semibold tracking-tight text-white sm:mt-1 sm:text-lg md:text-sm truncate">Sr. Systems</p>
                  <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-neutral-400 truncate">Engineer @ AT&T</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lower info cards */}
          <div className="mt-3 sm:mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Card 1 */}
            <div className="border-gradient animate-on-scroll animate-[fadeSlideIn_0.8s_ease-out_0.1s_both] flex flex-col overflow-hidden bg-neutral-900/40 h-80 sm:h-90 md:h-100 rounded-[24px] sm:rounded-[32px] ring-white/10 ring-1 justify-between">
              <div className="h-full relative">
                <div className="absolute inset-0 bg-linear-to-br from-neutral-800/50 via-neutral-900 to-black"></div>
                <div className="bg-linear-to-t from-black/90 via-black/50 to-transparent absolute inset-0"></div>
                <div className="flex flex-col sm:p-5 h-full pt-4 pr-4 pb-4 pl-4 relative justify-end">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-emerald-500/15 backdrop-blur text-emerald-300 shrink-0">
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white">AI Security Guard</h4>
                      <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">Event-Driven Microservices Architecture, asynchronous containerized video surveillance system using Python & computer vision</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border-gradient animate-on-scroll animate-[fadeSlideIn_0.8s_ease-out_0.15s_both] flex flex-col overflow-hidden bg-neutral-900/40 h-80 sm:h-90 md:h-100 rounded-[24px] sm:rounded-[32px] ring-white/10 ring-1 justify-between">
              <div className="h-full relative">
                <div className="absolute inset-0 bg-linear-to-br from-neutral-800/50 via-neutral-900 to-black"></div>
                <div className="bg-linear-to-t from-black/90 via-black/50 to-transparent absolute inset-0"></div>
                <div className="flex flex-col sm:p-5 h-full pt-4 pr-4 pb-4 pl-4 relative justify-end">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-indigo-500/15 backdrop-blur text-indigo-300 shrink-0">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white">Packet-Vision</h4>
                      <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">Networking & Data Visualization, monitor your network traffic in real-time using Wireshark & Python</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="tech-stack" className="sm:px-6 sm:mt-6 sm:mb-12 lg:px-8 lg:ml-auto lg:mr-auto lg:mt-12 z-10 max-w-7xl mt-6 mr-auto  ml-auto pr-4 pl-4">
          {/* Heading + CTA */}
          {/* <div className="sm:mt-10 grid md:grid-cols-3 animate-on-scroll animate-[fadeSlideIn_0.7s_ease-out_0.1s_both] mt-10 gap-x-6 gap-y-6 items-start">
            <div className="md:col-span-2">
              <h2 className="leading-tight sm:text-4xl lg:text-7xl text-3xl font-light text-white tracking-tighter">
                Tech Stack & Expertise
              </h2>
            </div>
            <div className="flex md:justify-end">
              <div className="max-w-sm">
                <p className="sm:text-sm leading-relaxed text-xs text-neutral-400">
                  From frontend to backend, cloud infrastructure to AI integration - delivering comprehensive solutions across the stack.
                </p>
                <div className="mt-3">
                  <a
                    href="https://github.com/Blaikebrad24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-wrapper"
                    style={{
                      "--dot-size": "8px",
                      "--line-weight": "1px",
                      "--line-distance": "0.8rem 1rem",
                      "--animation-speed": "0.35s",
                      "--dot-color": "#fffa",
                      "--line-color": "#fffa",
                      "--grid-color": "#fff3",
                      position: "relative",
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "auto",
                      height: "auto",
                      padding: "var(--line-distance)",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      userSelect: "none"
                    } as React.CSSProperties}
                  >
                    <div className="line horizontal top"></div>
                    <div className="line vertical right"></div>
                    <div className="line horizontal bottom"></div>
                    <div className="line vertical left"></div>
                    <div className="dot top left"></div>
                    <div className="dot top right"></div>
                    <div className="dot bottom right"></div>
                    <div className="dot bottom left"></div>
                    <button className="btn bg-transparent" style={{
                      maskImage: "linear-gradient(110deg, transparent, black 35%, black 65%, transparent)",
                      WebkitMaskImage: "linear-gradient(110deg, transparent, black 35%, black 65%, transparent)"
                    }}>
                      <span className="btn-text">View on GitHub</span>
                      <ArrowRight className="ml-2 w-4 h-4 opacity-60" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          {/* Cards */}


          {/* KPIs */}
          <div className="sm:mt-4 grid grid-cols-3 sm:gap-4 animate-on-scroll animate-[fadeSlideIn_0.7s_ease-out_0.05s_both] mt-4 gap-x-3 gap-y-3">
            <div className="border-gradient sm:rounded-[32px] sm:p-8 bg-neutral-900/40 rounded-[24px] pt-5 pr-5 pb-5 pl-5 backdrop-blur">
              <p className="text-[10px] sm:text-xs text-green-400">GitHub</p>
              <p className="sm:text-lg md:text-xl text-base font-semibold text-white tracking-tight mt-0.5 mr-2 truncate">@Blaikebrad24</p>
              <p className="text-[10px] sm:text-xs text-neutral-400 mt-0.5">Open source projects</p>
            </div>
            <div className="border-gradient sm:rounded-[32px] sm:p-8 bg-neutral-900/40 rounded-[24px] pt-5 pr-5 pb-5 pl-5 backdrop-blur">
              <p className="text-[10px] sm:text-xs text-blue-400">LinkedIn</p>
              <p className="mt-0.5 text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white truncate">Blaike Bradford</p>
              <p className="text-[10px] sm:text-xs text-neutral-400 mt-0.5">Professional network</p>
            </div>
            <div className="border-gradient sm:rounded-[32px] sm:p-8 bg-neutral-900/40 rounded-[24px] pt-5 pr-5 pb-5 pl-5 backdrop-blur">
              <p className="text-[12px] sm:text-xs text-orange-600">X</p>
              <p className="mt-0.5 text-base sm:text-lg md:text-xl font-semibold tracking-tight text-white truncate">@BlaikeBrad_dev</p>
              <p className="text-[10px] sm:text-xs text-neutral-400 mt-0.5">Developer updates</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="sm:px-6 sm:mt-6 sm:mb-20 lg:px-8 lg:ml-auto lg:mr-auto lg:mt-12 z-10 max-w-7xl mt-6 mr-auto mb-16 ml-auto pr-4 pl-4">
          {/* Heading */}
          <div className="sm:mt-4 animate-on-scroll animate-[fadeSlideIn_0.7s_ease-out_0.1s_both] mt-4 mb-8">
            <h2 className="leading-tight sm:text-4xl lg:text-7xl text-3xl font-light text-white tracking-tighter mb-4">
              Featured Projects
            </h2>
            <p className="sm:text-sm leading-relaxed text-xs text-neutral-400 max-w-2xl">
              Explore my portfolio of open-source projects and applications. Each project demonstrates different aspects of full-stack development, from frontend interfaces to backend architecture.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View All Projects Link */}
          <div className="mt-8 sm:mt-12 flex justify-center animate-on-scroll animate-[fadeSlideIn_0.7s_ease-out_0.2s_both]">
            <a
              href="https://github.com/Blaikebrad24?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wrapper"
              style={{
                "--dot-size": "8px",
                "--line-weight": "1px",
                "--line-distance": "0.8rem 1rem",
                "--animation-speed": "0.35s",
                "--dot-color": "#fffa",
                "--line-color": "#fffa",
                "--grid-color": "#fff3",
                position: "relative",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                height: "auto",
                padding: "var(--line-distance)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                userSelect: "none"
              } as React.CSSProperties}
            >
              <div className="line horizontal top"></div>
              <div className="line vertical right"></div>
              <div className="line horizontal bottom"></div>
              <div className="line vertical left"></div>
              <div className="dot top left"></div>
              <div className="dot top right"></div>
              <div className="dot bottom right"></div>
              <div className="dot bottom left"></div>
              <button className="btn bg-transparent" style={{
                maskImage: "linear-gradient(110deg, transparent, black 35%, black 65%, transparent)",
                WebkitMaskImage: "linear-gradient(110deg, transparent, black 35%, black 65%, transparent)"
              }}>
                <Github className="w-4 h-4 opacity-60" />
                <span className="btn-text">View All Repositories</span>
              </button>
            </a>
          </div>
        </section>
      </main>
    </div>
    </ClientWrapper>
  );
}
