


import DevProfileCard from "./_components/DevProfileCard";
import { SocialCards } from "./_components/SocialCard";
import { fetchGithubRepos } from "./_actions/fetchGithub";
import RecentProjectCard from "./_components/RecentProjectCard";
import RecentProjectsList from "./_components/RecentProjectList";
import { fetchFilteredGithub } from "./_actions/fetchFilteredGithub";
import JupiterBackground from "./_components/JupiterBackground";

export default async function Home() {

  const projects = await fetchFilteredGithub();
  return (
    <div className="min-h-screen relative">
      <JupiterBackground />
      <div className="relative z-10 min-h-screen p-4 md:p-6 lg:p-8">
        <div className="max-w-400 mx-auto">
          <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-12 lg:h-screen">
            {/* Left Panel - Profile & Stats */}
            <div className="col-span-1 lg:col-span-3 overflow-visible lg:overflow-y-auto scrollbar-hide py-0 lg:py-4">
              <DevProfileCard />
            </div>

            {/* Center Panel - Projects */}
            <div className="col-span-1 lg:col-span-6 flex flex-col">
              <div className="mb-4 lg:mb-6">
                <h2 className="text-white text-xl lg:text-2xl mb-2">Featured Projects</h2>
                <p className="text-gray-400 text-sm lg:text-base">Explore my recent work, projects & startup ideas!</p>
              </div>
              <RecentProjectsList projects={projects}/>
            </div>

            {/* Right Panel - Stats & Social */}
            <div className="col-span-1 lg:col-span-3 overflow-visible lg:overflow-y-auto scrollbar-hide py-0 lg:py-4">
              <div className="space-y-4 lg:space-y-6">
                {/* Stats Section */}
                <div>
                  <h3 className="text-white mb-4">Statistics</h3>
                  <div className="space-y-3">
                      {/* <DeployedApplicationsCard/>
                      <UpdatesCard/>
                      <ResumeCard/>
                     */}
                  </div>
                </div>

                {/* Social Links Section */}
                <div>
                  <h3 className="text-white mb-4 p-4">Connect</h3>
                        <SocialCards/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
