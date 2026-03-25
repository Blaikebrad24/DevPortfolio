import { fetchFilteredGithub } from "./_actions/fetchFilteredGithub";
import { ArrowRight } from "lucide-react";
import ClientWrapper from "./_components/ClientWrapper";
import ProjectCard from "./_components/ProjectCard";
import HeroCanvas from "./_components/HeroCanvas";
import PhotoCarousel from "./_components/PhotoCarousel";

export default async function Home() {
  const projects = await fetchFilteredGithub();

  return (
    <ClientWrapper>
      <div className="min-h-screen text-zinc-300 selection:bg-[#FF4500] selection:text-white flex flex-col items-center py-0 lg:py-16 overflow-x-hidden px-0 lg:px-12 w-full">

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference pointer-events-none px-6 lg:px-12 py-6 flex justify-between items-center">
          <div className="font-medium tracking-tighter text-white text-lg pointer-events-auto">BLAIKE BRADFORD</div>
          <div className="pointer-events-auto flex items-center gap-6">
            <a href="#about" className="text-white hover:text-[#FF4500] transition-colors text-sm hidden md:inline">About</a>
            <a href="#expertise" className="text-white hover:text-[#FF4500] transition-colors text-sm hidden md:inline">Expertise</a>
            <a href="#impact" className="text-white hover:text-[#FF4500] transition-colors text-sm hidden md:inline">Impact</a>
            <a href="#projects" className="text-white hover:text-[#FF4500] transition-colors text-sm hidden md:inline">Projects</a>
            <a
              href="https://www.linkedin.com/in/blaikebradford/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-widest text-[#F4F3ED] bg-[#FF4500] hover:bg-[#FF4500]/90 px-4 py-2 transition-colors hidden sm:inline-flex items-center gap-2"
            >
              Connect
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </nav>

        {/* Master Framework Shell */}
        <section className="w-full flex justify-center relative z-10">
          <div className="w-full max-w-[1400px] bg-transparent lg:bg-[#F4F3ED] p-0 lg:p-3 relative shadow-none lg:shadow-2xl lg:shadow-black/50 mt-0 lg:mt-12">
            {/* Ivory Shell Corner Markers */}
            <div className="hidden lg:block absolute top-3 left-3 w-1.5 h-1.5 border border-[#0A0A0A] bg-transparent opacity-30" />
            <div className="hidden lg:block absolute top-3 right-3 w-1.5 h-1.5 border border-[#0A0A0A] bg-transparent opacity-30" />
            <div className="hidden lg:block absolute bottom-3 left-3 w-1.5 h-1.5 border border-[#0A0A0A] bg-transparent opacity-30" />
            <div className="hidden lg:block absolute bottom-3 right-3 w-1.5 h-1.5 border border-[#0A0A0A] bg-transparent opacity-30" />

            <div className="relative bg-transparent lg:bg-gradient-to-b lg:from-zinc-500/40 lg:via-zinc-800/40 lg:to-black/80 p-0 lg:p-[1px] h-full">
              <main className="bg-[#0F0F0F] relative flex flex-col w-full overflow-hidden">

                {/* ============================================================ */}
                {/* SECTION 1: Hero                                               */}
                {/* ============================================================ */}
                <div id="about" className="relative flex flex-col lg:flex-row w-full min-h-screen lg:min-h-[85vh] overflow-hidden border-b border-white/10">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 pointer-events-none flex justify-between z-0">
                    <div className="w-[1px] h-full bg-white/5 relative left-[8%] hidden md:block">
                      <div className="absolute top-0 -translate-x-[2px] w-[5px] h-[5px] bg-[#0F0F0F] border border-white/20" />
                      <div className="absolute bottom-0 -translate-x-[2px] w-[5px] h-[5px] bg-[#0F0F0F] border border-white/20" />
                    </div>
                    <div className="w-[1px] h-full bg-white/5 relative left-[40%] hidden lg:block" />
                    <div className="w-[1px] h-full bg-white/5 relative right-[8%] hidden md:block">
                      <div className="absolute top-0 -translate-x-[2px] w-[5px] h-[5px] bg-[#0F0F0F] border border-white/20" />
                      <div className="absolute bottom-0 -translate-x-[2px] w-[5px] h-[5px] bg-[#0F0F0F] border border-white/20" />
                    </div>
                  </div>

                  {/* Section Rail */}
                  <header className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-center justify-between px-6 lg:px-12 z-30 bg-[#0F0F0F]/80 backdrop-blur-sm">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      Portfolio Framework
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600 hidden md:inline">v2.0 — 2026</span>
                    </div>
                  </header>

                  {/* Left Column: Typography */}
                  <div className="flex-1 px-6 md:px-12 lg:px-20 pt-28 pb-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative z-20">
                    <div className="mb-12">
                      <div className="font-mono text-[10px] text-[#FF4500] uppercase tracking-widest mb-8 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse" />
                        Principal Software Engineer
                      </div>

                      <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] tracking-tighter font-light text-white leading-[1.05]">
                        <span>Architect.</span><br />
                        <span className="text-zinc-500">Engineer.</span><br />
                        <span className="text-[#FF4500]">Deliver.</span>
                      </h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start w-full max-w-2xl mt-8">
                      <p className="text-[10px] font-mono text-zinc-500 leading-relaxed max-w-sm uppercase tracking-widest">
                        9 years architecting mission-critical telecom systems supporting 300,000+ subscribers and $40M–50M annual revenue. First engineer in program&apos;s 30-year history to deploy production server code.
                      </p>

                      <a
                        href="#projects"
                        className="group flex items-center gap-3 text-[10px] uppercase tracking-widest text-[#F4F3ED] bg-[#FF4500] hover:bg-[#FF4500]/90 px-6 py-3 transition-colors duration-300 shrink-0"
                      >
                        View Work
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Sphere + Photo Carousel */}
                  <div className="w-full lg:w-[45%] flex flex-col relative z-20 min-h-[50vh] lg:min-h-0 bg-[#050505] overflow-hidden">
                    <HeroCanvas />
                    <PhotoCarousel />

                    {/* Corner stats */}
                    <div className="absolute bottom-12 right-8 z-30 flex flex-col items-end gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-right">
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse" />
                        AT&T | Dallas, TX
                      </span>
                      <span>Cloud Architect</span>
                      <span>Technical Lead</span>
                    </div>
                  </div>

                  {/* Marquee */}
                  <div className="absolute bottom-0 left-0 w-full h-8 border-t border-white/10 bg-[#0A0A0A] text-zinc-500 font-mono text-[10px] uppercase flex items-center overflow-hidden z-30">
                    <div className="marquee-track flex whitespace-nowrap gap-12 pl-12 items-center">
                      <span>OIDC Authentication</span>
                      <span className="text-white">Cloud Architecture</span>
                      <span>Microservices</span>
                      <span className="text-[#FF4500]">Docker & Kubernetes</span>
                      <span>CI/CD Pipelines</span>
                      <span className="text-white">Spring Boot</span>
                      <span>Next.js & React</span>
                      <span className="text-[#FF4500]">Azure Infrastructure</span>
                      <span>Terraform IaC</span>
                      <span className="text-white">Python & Flask</span>
                      {/* Duplicate for seamless loop */}
                      <span>OIDC Authentication</span>
                      <span className="text-white">Cloud Architecture</span>
                      <span>Microservices</span>
                      <span className="text-[#FF4500]">Docker & Kubernetes</span>
                      <span>CI/CD Pipelines</span>
                      <span className="text-white">Spring Boot</span>
                      <span>Next.js & React</span>
                      <span className="text-[#FF4500]">Azure Infrastructure</span>
                      <span>Terraform IaC</span>
                      <span className="text-white">Python & Flask</span>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* SECTION 2: Expertise Showcase                                 */}
                {/* ============================================================ */}
                <div id="expertise" className="relative w-full overflow-hidden px-6 py-24 md:px-12 lg:px-20 border-b border-white/10">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 pointer-events-none flex justify-between z-0">
                    <div className="w-[1px] h-full bg-white/5 relative left-[8%] hidden md:block" />
                    <div className="w-[1px] h-full bg-white/5 relative left-[40%] hidden lg:block" />
                    <div className="w-[1px] h-full bg-white/5 relative right-[8%] hidden md:block" />
                  </div>

                  <header className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-center justify-between px-6 lg:px-12 z-30 bg-[#0F0F0F]/80 backdrop-blur-sm">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      Core Expertise
                    </div>
                  </header>

                  <div className="text-center mb-16 relative z-10 mt-8">
                    <div className="font-mono text-[10px] text-[#FF4500] uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
                      Technical Domain
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-light text-white mb-4">What I Build</h2>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 max-w-xl mx-auto">
                      Enterprise-grade systems across authentication, cloud infrastructure, and full-stack development.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
                    {/* Card 1: Enterprise Auth */}
                    <div className="relative bg-[#050505] flex flex-col border border-white/10 p-6 h-[500px]">
                      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-mono text-zinc-500 mb-8 border-b border-white/10 pb-4">
                        <span>Authentication</span>
                      </div>
                      <div className="flex-1 flex flex-col gap-5 overflow-y-auto custom-scrollbar pr-2">
                        <div className="bg-zinc-900 border border-white/5 p-4 text-sm text-zinc-300 font-light">
                          <h4 className="text-white font-medium mb-2">OIDC Authentication Gateway</h4>
                          <p className="text-zinc-400 text-xs leading-relaxed">Architected and deployed production OIDC authentication gateway using Docker, Nginx reverse proxy, and Python for nationwide priority telecom services.</p>
                        </div>
                        <div className="bg-zinc-900 border border-white/5 p-4 text-sm text-zinc-300 font-light">
                          <h4 className="text-white font-medium mb-2">Provider Migration</h4>
                          <p className="text-zinc-400 text-xs leading-relaxed">Led enterprise OIDC provider migration affecting 300,000+ users and $40–50M revenue-generating applications with zero downtime.</p>
                        </div>
                        <div className="bg-[#FF4500]/10 border border-[#FF4500]/30 p-4 text-sm font-light">
                          <h4 className="text-[#FF4500] font-medium mb-2 text-xs uppercase tracking-widest">Recognition</h4>
                          <p className="text-zinc-300 text-xs leading-relaxed">Received company Connection Award for architecture solving multi-year authentication gaps and critical security requirements.</p>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Cloud Infrastructure (Highlighted) */}
                    <div className="relative bg-[#FF4500] flex flex-col items-center justify-between border border-white/10 p-6 h-[500px] text-center lg:-translate-y-4 shadow-2xl shadow-black group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800]/40 via-transparent to-[#9A00FF]/30 mix-blend-overlay blur-2xl transition-transform duration-[2s] group-hover:scale-125 group-hover:rotate-3" />
                      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

                      <div className="relative z-10 text-[10px] uppercase tracking-widest font-mono text-[#F4F3ED]/80 mix-blend-plus-lighter w-full flex justify-between">
                        <span>Cloud Architecture</span>
                        <span>Active</span>
                      </div>

                      <div className="relative z-10 flex flex-col items-center my-8 mix-blend-plus-lighter">
                        <div className="text-6xl font-light text-white tracking-tighter mb-2">$100K+</div>
                        <p className="text-[10px] font-mono tracking-widest uppercase text-[#F4F3ED]/80 mb-6">Annual Cost Savings</p>
                        <div className="text-3xl font-light text-white tracking-tighter mb-2">40%</div>
                        <p className="text-[10px] font-mono tracking-widest uppercase text-[#F4F3ED]/80">Infrastructure Reduction</p>
                      </div>

                      <div className="relative z-10 w-full mix-blend-plus-lighter text-[#F4F3ED]">
                        <p className="text-xs leading-relaxed opacity-80 mb-4">Serverless migration, Terraform automation, CI/CD pipelines reducing deployment from 4 hours to 15 minutes.</p>
                        <div className="flex flex-wrap justify-center gap-2 text-[10px] font-mono uppercase tracking-widest opacity-60">
                          <span>Azure</span>
                          <span>·</span>
                          <span>Terraform</span>
                          <span>·</span>
                          <span>Docker</span>
                        </div>
                      </div>
                    </div>

                    {/* Card 3: Full-Stack Development */}
                    <div className="relative bg-[#050505] flex flex-col border border-white/10 p-6 h-[500px]">
                      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-mono text-zinc-500 mb-8 border-b border-white/10 pb-4">
                        <span>Full-Stack</span>
                      </div>
                      <div className="flex-1 flex flex-col gap-4">
                        <div className="flex justify-between items-center p-4 border border-white/10 bg-zinc-900/30">
                          <div>
                            <div className="text-sm font-medium text-white mb-1">3 Production Apps</div>
                            <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Spring Boot + Next.js + Redis</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-4 border border-white/10 bg-zinc-900/30">
                          <div>
                            <div className="text-sm font-medium text-white mb-1">100K+ Daily Transactions</div>
                            <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Sub-200ms Response Times</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-4 border border-white/10 bg-zinc-900/30">
                          <div>
                            <div className="text-sm font-medium text-white mb-1">Operations Dashboard</div>
                            <div className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Azure Container Apps</div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                          <div className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-1">Tech Stack</div>
                          <div className="flex flex-wrap gap-2">
                            {["Java", "Python", "TypeScript", "Spring Boot", "Next.js", "Flask"].map((tech) => (
                              <span key={tech} className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest border border-white/10 text-zinc-400 bg-zinc-900/50">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* SECTION 3: Technical Skills Grid                              */}
                {/* ============================================================ */}
                <div className="relative w-full overflow-hidden px-6 py-24 md:px-12 lg:px-20 border-b border-white/10">
                  <div className="absolute inset-0 pointer-events-none flex justify-between z-0">
                    <div className="w-[1px] h-full bg-white/5 relative left-[8%] hidden md:block" />
                    <div className="w-[1px] h-full bg-white/5 relative left-[40%] hidden lg:block" />
                    <div className="w-[1px] h-full bg-white/5 relative right-[8%] hidden md:block" />
                  </div>

                  <header className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-center justify-between px-6 lg:px-12 z-30 bg-[#0F0F0F]/80 backdrop-blur-sm">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      Infrastructure
                    </div>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto relative z-10 mt-8">
                    {/* Skill 1: Cloud & DevOps */}
                    <div className="group flex flex-col h-full cursor-default">
                      <div className="aspect-[4/3] w-full mb-6 overflow-hidden border border-white/10 relative bg-[#050505] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/10 via-transparent to-zinc-900 group-hover:from-[#FF4500]/20 transition-all duration-700" />
                        <div className="text-center relative z-10 p-6">
                          <div className="text-4xl font-light text-white tracking-tighter mb-2">200+</div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Hours Saved Quarterly</p>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[#FF4500] mt-1">Via Automation</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-light tracking-tight text-white mb-2">Cloud & DevOps</h4>
                      <div className="flex items-center gap-2 text-[10px] text-[#FF4500] mb-3 font-mono uppercase tracking-widest">
                        <span>Azure</span>
                        <span>·</span>
                        <span>Terraform</span>
                        <span>·</span>
                        <span>CI/CD</span>
                      </div>
                      <p className="text-sm text-zinc-400 font-light border-t border-white/10 pt-4 leading-relaxed">
                        Sole cloud architect managing Azure infrastructure across production and non-production environments. Designed CI/CD pipelines for 30+ engineers.
                      </p>
                    </div>

                    {/* Skill 2: Security & Monitoring */}
                    <div className="group flex flex-col h-full cursor-default md:translate-y-8">
                      <div className="aspect-[4/3] w-full mb-6 overflow-hidden border border-white/10 relative bg-[#050505] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-zinc-900 group-hover:from-emerald-500/20 transition-all duration-700" />
                        <div className="text-center relative z-10 p-6">
                          <div className="text-4xl font-light text-white tracking-tighter mb-2">0</div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Security Incidents</p>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 mt-1">Over 24 Months</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-light tracking-tight text-white mb-2">Security & Monitoring</h4>
                      <div className="flex items-center gap-2 text-[10px] text-[#FF4500] mb-3 font-mono uppercase tracking-widest">
                        <span>SNMP</span>
                        <span>·</span>
                        <span>FIPS 140-2</span>
                        <span>·</span>
                        <span>OIDC</span>
                      </div>
                      <p className="text-sm text-zinc-400 font-light border-t border-white/10 pt-4 leading-relaxed">
                        Python/Flask SNMP monitoring with sub-second alerts. Reduced incident response by 60% through automated failover and real-time alerting.
                      </p>
                    </div>

                    {/* Skill 3: Architecture & Data */}
                    <div className="group flex flex-col h-full cursor-default">
                      <div className="aspect-[4/3] w-full mb-6 overflow-hidden border border-white/10 relative bg-[#050505] flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-zinc-900 group-hover:from-blue-500/20 transition-all duration-700" />
                        <div className="text-center relative z-10 p-6">
                          <div className="text-4xl font-light text-white tracking-tighter mb-2">1M+</div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Daily Data Points</p>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-blue-400 mt-1">Real-Time Processing</p>
                        </div>
                      </div>
                      <h4 className="text-xl font-light tracking-tight text-white mb-2">Architecture & Data</h4>
                      <div className="flex items-center gap-2 text-[10px] text-[#FF4500] mb-3 font-mono uppercase tracking-widest">
                        <span>Microservices</span>
                        <span>·</span>
                        <span>REST/GraphQL</span>
                      </div>
                      <p className="text-sm text-zinc-400 font-light border-t border-white/10 pt-4 leading-relaxed">
                        Fault-tolerant microservices with automated failover. REST APIs and GraphQL interfaces supporting mission-critical telecom operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* SECTION 4: Career Impact                                      */}
                {/* ============================================================ */}
                <div id="impact" className="relative w-full overflow-hidden flex flex-col border-b border-white/10">
                  <header className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-center justify-between px-6 lg:px-12 z-30 bg-[#0F0F0F]/80 backdrop-blur-sm">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      Performance Metrics
                    </div>
                  </header>

                  <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{
                    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                    maskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 80%)",
                  }} />

                  <div className="px-6 py-24 md:px-12 lg:px-20 w-full relative z-10 mt-8">
                    <div className="flex flex-col items-center text-center mb-20">
                      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter font-light text-white mb-6 flex flex-wrap justify-center gap-x-3">
                        <span>Engineered</span>{" "}
                        <span className="text-[#FF4500]">for</span>{" "}
                        <span>impact</span>
                      </h2>
                      <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase max-w-xl leading-relaxed">
                        Measurable results across enterprise authentication, cloud infrastructure, and software delivery at AT&T.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
                      {/* Impact Card 1 */}
                      <div className="relative p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-colors duration-700 group">
                        <div className="h-full bg-[#050505] p-8 flex flex-col relative overflow-hidden border border-white/5">
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 border border-white/10 bg-zinc-900 flex items-center justify-center text-white font-medium text-sm">S</div>
                            <div>
                              <h4 className="text-[10px] font-mono tracking-widest uppercase text-white">Scale</h4>
                              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mt-1">Telecom Infrastructure</p>
                            </div>
                          </div>
                          <div className="text-3xl font-light text-white tracking-tighter mb-4">300,000+</div>
                          <p className="text-sm text-zinc-300 font-light leading-relaxed grow">
                            Government and first responder subscribers supported across LTE/5G networks through mission-critical priority telecom services.
                          </p>
                        </div>
                      </div>

                      {/* Impact Card 2 (Highlight) */}
                      <div className="relative p-[1px] bg-gradient-to-b from-[#FF4500]/50 to-transparent hover:from-[#FF4500]/70 transition-colors duration-700 group md:-translate-y-4 shadow-xl shadow-black">
                        <div className="h-full bg-[#0F0F0F] p-8 flex flex-col relative overflow-hidden border border-white/10">
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 bg-[#FF4500] flex items-center justify-center text-white font-medium text-sm">1st</div>
                            <div>
                              <h4 className="text-[10px] font-mono tracking-widest uppercase text-white">Pioneer</h4>
                              <p className="text-[10px] font-mono tracking-widest uppercase text-[#FF4500] mt-1">30-Year Program</p>
                            </div>
                          </div>
                          <div className="text-3xl font-light text-white tracking-tighter mb-4">First Deploy</div>
                          <p className="text-sm text-white font-light leading-relaxed grow">
                            First engineer to design and deploy production server code in the program&apos;s 30-year history, establishing new technical standards for cloud-native authentication and infrastructure automation.
                          </p>
                        </div>
                      </div>

                      {/* Impact Card 3 */}
                      <div className="relative p-[1px] bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-colors duration-700 group">
                        <div className="h-full bg-[#050505] p-8 flex flex-col relative overflow-hidden border border-white/5">
                          <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 border border-white/10 bg-zinc-900 flex items-center justify-center text-white font-medium text-sm">R</div>
                            <div>
                              <h4 className="text-[10px] font-mono tracking-widest uppercase text-white">Reliability</h4>
                              <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mt-1">Enterprise Systems</p>
                            </div>
                          </div>
                          <div className="text-3xl font-light text-white tracking-tighter mb-4">99.99%</div>
                          <p className="text-sm text-zinc-300 font-light leading-relaxed grow">
                            Uptime maintained for mission-critical systems. Zero security incidents over 24 months. Cross-functional collaboration with 13+ engineers across AT&T, HPE, Nokia, and government contractors.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* SECTION 5: Experience Timeline                                */}
                {/* ============================================================ */}
                <div className="relative w-full overflow-hidden py-24 border-b border-white/10">
                  <header className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-center justify-between px-6 lg:px-12 z-30 bg-[#0F0F0F]/80 backdrop-blur-sm">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      Career Timeline
                    </div>
                  </header>

                  <div className="absolute top-[15%] left-0 w-full text-center pointer-events-none select-none z-0">
                    <h2 className="text-[12vw] font-bold tracking-tighter text-white/[0.03] leading-none">
                      EXPERIENCE
                    </h2>
                  </div>

                  <div className="relative z-10 mb-12 px-6 lg:px-20 flex justify-between items-end mt-8">
                    <p className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 max-w-xs">Professional experience in enterprise telecom and software engineering.</p>
                    <div className="text-[10px] font-mono text-[#FF4500] uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-full animate-pulse" />
                      Currently Active
                    </div>
                  </div>

                  <div className="relative overflow-hidden w-full" style={{
                    maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                    WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
                  }}>
                    <div className="carousel-track flex gap-6 px-6 pb-8">
                      {/* AT&T Card */}
                      <div className="min-w-[340px] md:min-w-[400px] bg-[#050505] p-6 border border-white/10 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-light text-white tracking-tight">AT&T</h3>
                            <p className="text-[10px] font-mono text-[#FF4500] uppercase tracking-widest mt-1">Nov 2017 – Present</p>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Dallas, TX</span>
                        </div>
                        <p className="text-sm text-zinc-300 font-light leading-relaxed">Principal Software Engineer, Cloud Architect & Technical Lead. Architecting mission-critical telecom systems supporting 300K+ subscribers.</p>
                        <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                          <span>Azure</span>
                          <span>·</span>
                          <span>Spring Boot</span>
                          <span>·</span>
                          <span>Docker</span>
                          <span>·</span>
                          <span>OIDC</span>
                        </div>
                      </div>

                      {/* Auth Architecture */}
                      <div className="min-w-[340px] md:min-w-[400px] bg-[#0F0F0F] p-6 border border-[#FF4500]/30 flex flex-col gap-4">
                        <h3 className="text-lg font-light text-white tracking-tight">Enterprise Auth Architecture</h3>
                        <p className="text-sm text-zinc-300 font-light leading-relaxed">Designed and deployed production OIDC authentication gateway. Led complete authentication architecture redesign from concept through production over 8-month timeline.</p>
                        <div className="mt-auto pt-4 border-t border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#FF4500]">
                          Company Connection Award Recipient
                        </div>
                      </div>

                      {/* Cloud Infrastructure */}
                      <div className="min-w-[340px] md:min-w-[400px] bg-[#050505] p-6 border border-white/10 flex flex-col gap-4">
                        <h3 className="text-lg font-light text-white tracking-tight">Cloud Infrastructure</h3>
                        <p className="text-sm text-zinc-300 font-light leading-relaxed">Sole cloud architect on 2-person team. Reduced cloud costs by $100K+ annually (40% reduction). Designed CI/CD pipelines reducing deployment from 4 hours to 15 minutes.</p>
                        <div className="mt-auto pt-4 border-t border-white/10 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                          Terraform · Azure DevOps · GitHub Actions
                        </div>
                      </div>

                      {/* Full-Stack */}
                      <div className="min-w-[340px] md:min-w-[400px] bg-[#050505] p-6 border border-white/10 flex flex-col gap-4">
                        <h3 className="text-lg font-light text-white tracking-tight">Full-Stack Development</h3>
                        <p className="text-sm text-zinc-300 font-light leading-relaxed">Built 3 production applications with Spring Boot microservices, Next.js frontends, and Redis caching processing 100K+ daily transactions with sub-200ms response times.</p>
                        <div className="mt-auto pt-4 border-t border-white/10 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                          Led architecture reviews with 13+ engineers
                        </div>
                      </div>

                      {/* Safecom */}
                      <div className="min-w-[340px] md:min-w-[400px] bg-[#050505] p-6 border border-white/10 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-light text-white tracking-tight">Safecom-Wireless</h3>
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">Apr 2019 – Sep 2019</p>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Holmdel, NJ</span>
                        </div>
                        <p className="text-sm text-zinc-300 font-light leading-relaxed">Python Developer (Contract). Delivered Python GUI interface for embedded systems within first 2 sprints. Updated C++ embedded system functionality reducing memory footprint by 25%.</p>
                        <div className="mt-auto pt-4 border-t border-white/10 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                          Python · C++ · Embedded Systems
                        </div>
                      </div>

                      {/* Duplicates for infinite scroll */}
                      <div className="min-w-[340px] md:min-w-[400px] bg-[#050505] p-6 border border-white/10 flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-light text-white tracking-tight">AT&T</h3>
                            <p className="text-[10px] font-mono text-[#FF4500] uppercase tracking-widest mt-1">Nov 2017 – Present</p>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Dallas, TX</span>
                        </div>
                        <p className="text-sm text-zinc-300 font-light leading-relaxed">Principal Software Engineer, Cloud Architect & Technical Lead. Architecting mission-critical telecom systems supporting 300K+ subscribers.</p>
                        <div className="mt-auto pt-4 border-t border-white/10 flex flex-wrap gap-2 text-[10px] font-mono tracking-widest uppercase text-zinc-500">
                          <span>Azure</span>
                          <span>·</span>
                          <span>Spring Boot</span>
                          <span>·</span>
                          <span>Docker</span>
                          <span>·</span>
                          <span>OIDC</span>
                        </div>
                      </div>

                      <div className="min-w-[340px] md:min-w-[400px] bg-[#0F0F0F] p-6 border border-[#FF4500]/30 flex flex-col gap-4">
                        <h3 className="text-lg font-light text-white tracking-tight">Enterprise Auth Architecture</h3>
                        <p className="text-sm text-zinc-300 font-light leading-relaxed">Designed and deployed production OIDC authentication gateway. Led complete authentication architecture redesign from concept through production over 8-month timeline.</p>
                        <div className="mt-auto pt-4 border-t border-white/10 text-[10px] font-mono tracking-widest uppercase text-[#FF4500]">
                          Company Connection Award Recipient
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* SECTION 6: Projects                                           */}
                {/* ============================================================ */}
                <div id="projects" className="relative w-full overflow-hidden px-6 py-24 md:px-12 lg:px-20 border-b border-white/10">
                  <div className="absolute inset-0 pointer-events-none flex justify-between z-0">
                    <div className="w-[1px] h-full bg-white/5 relative left-[8%] hidden md:block" />
                    <div className="w-[1px] h-full bg-white/5 relative left-[40%] hidden lg:block" />
                    <div className="w-[1px] h-full bg-white/5 relative right-[8%] hidden md:block" />
                  </div>

                  <header className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-center justify-between px-6 lg:px-12 z-30 bg-[#0F0F0F]/80 backdrop-blur-sm">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-white/20" />
                      Open Source
                    </div>
                  </header>

                  <div className="relative z-10 mt-8 mb-12">
                    <div className="font-mono text-[10px] text-[#FF4500] uppercase tracking-widest mb-4 flex items-center gap-2">
                      GitHub Projects
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-light text-white mb-4">Featured Work</h2>
                    <p className="text-xs font-mono tracking-widest uppercase text-zinc-500 max-w-xl">
                      Open-source projects demonstrating full-stack development, from frontend interfaces to backend architecture.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-10">
                    {projects.map((project, index) => (
                      <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </div>

                  <div className="mt-12 flex justify-center relative z-10">
                    <a
                      href="https://github.com/Blaikebrad24?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 px-6 py-3 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      View All Repositories
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* ============================================================ */}
                {/* SECTION 7: Footer                                             */}
                {/* ============================================================ */}
                <div id="contact" className="relative w-full min-h-[80vh] overflow-hidden flex flex-col">
                  <header className="absolute top-0 left-0 w-full h-12 border-b border-white/10 flex items-center justify-between px-6 lg:px-12 z-30 bg-[#0F0F0F]/80 backdrop-blur-sm">
                    <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#FF4500]" />
                      Connect
                    </div>
                  </header>

                  {/* Background Grid */}
                  <div className="absolute inset-0 pointer-events-none z-0 flex justify-center opacity-20">
                    <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 relative">
                      <div className="border-l border-dashed border-white/10 relative">
                        <div className="absolute top-32 -left-[2.5px] w-[4px] h-[4px] bg-white/40" />
                        <div className="absolute bottom-48 -left-[2.5px] w-[4px] h-[4px] bg-white/40" />
                      </div>
                      <div className="border-l border-dashed border-white/10 relative hidden md:block">
                        <div className="absolute top-64 -left-[2.5px] w-[4px] h-[4px] bg-white/40" />
                      </div>
                      <div className="border-l border-dashed border-white/10 relative hidden md:block">
                        <div className="absolute top-24 -left-[2.5px] w-[4px] h-[4px] bg-white/40" />
                      </div>
                      <div className="border-l border-r border-dashed border-white/10 relative">
                        <div className="absolute top-48 -right-[2.5px] w-[4px] h-[4px] bg-white/40" />
                      </div>
                    </div>
                  </div>

                  {/* Animated Data Tracks */}
                  <div className="absolute inset-0 pointer-events-none flex justify-center items-end" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
                    <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-[#0F0F0F] to-transparent z-10" />
                    <div className="w-[150%] md:w-[120%] h-[150vh] relative flex justify-center origin-bottom opacity-40" style={{ transform: "rotateX(72deg) translateZ(-100px)", transformStyle: "preserve-3d" }}>
                      <div className="absolute inset-0 w-full h-[200%] flex" style={{ animation: "flow 15s linear infinite" }}>
                        <div className="absolute left-[15%] w-[12%] h-full bg-gradient-to-b from-[#FF4500]/80 to-[#FF4500]/10" />
                        <div className="absolute left-[27%] w-[18%] h-full bg-gradient-to-b from-white/20 to-transparent" />
                        <div className="absolute left-[45%] w-[8%] h-full bg-[#0F0F0F]" />
                        <div className="absolute left-[53%] w-[22%] h-full bg-gradient-to-b from-zinc-700/80 to-zinc-900/10" />
                        <div className="absolute left-[75%] w-[15%] h-full bg-gradient-to-b from-[#FF4500]/60 to-[#FF4500]/5" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 w-full px-6 lg:px-20 pt-32">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">

                      {/* Left Links */}
                      <div className="flex gap-12 md:gap-24 font-light">
                        <div className="flex flex-col gap-4">
                          <span className="text-[10px] text-[#FF4500] font-mono tracking-widest uppercase mb-2">Connect</span>
                          <a href="https://github.com/Blaikebrad24" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">GitHub</a>
                          <a href="https://www.linkedin.com/in/blaikebradford/" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">LinkedIn</a>
                          <a href="https://x.com/Blaike1x" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">X / Twitter</a>
                          <a href="mailto:Blaike.a.bradford@icloud.com" className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">Email</a>
                        </div>
                        <div className="flex flex-col gap-4">
                          <span className="text-[10px] text-[#FF4500] font-mono tracking-widest uppercase mb-2">Education</span>
                          <span className="text-sm text-zinc-400">B.S. Applied Mathematics</span>
                          <span className="text-sm text-zinc-400">& Computer Science</span>
                          <span className="text-sm text-zinc-500">Texas State University, 2017</span>
                          <span className="text-sm text-zinc-500">Cyber Security Nano Degree</span>
                        </div>
                      </div>

                      {/* Right CTA */}
                      <div className="max-w-sm flex flex-col items-start bg-[#050505]/80 backdrop-blur-sm p-8 border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[#FF4500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <h2 className="text-3xl tracking-tight font-light text-white mb-3 relative z-10">Let&apos;s Build Together</h2>
                        <p className="text-xs text-zinc-400 mb-8 leading-relaxed font-mono tracking-widest uppercase relative z-10">
                          Principal Software Engineer specializing in cloud architecture, enterprise auth, and full-stack development.
                        </p>

                        <a
                          href="mailto:Blaike.a.bradford@icloud.com"
                          className="w-full relative px-6 py-4 text-[10px] uppercase tracking-widest font-medium text-[#F4F3ED] bg-[#FF4500] hover:bg-[#FF4500]/80 transition-colors flex justify-center items-center gap-2 border border-[#FF4500]"
                        >
                          Get In Touch
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto p-6 lg:px-20 relative z-10 flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-zinc-600 border-t border-white/10 bg-[#0A0A0A]">
                    <span>&copy; {new Date().getFullYear()} Blaike Bradford</span>
                    <div className="font-medium tracking-tighter text-white/50">BRADFORD /// SYS</div>
                  </div>
                </div>

              </main>
            </div>
          </div>
        </section>
      </div>
    </ClientWrapper>
  );
}
