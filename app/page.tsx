


import DevProfileCard from "./_components/DevProfileCard";
import { SocialCards } from "./_components/SocialCard";
import { fetchGithubRepos } from "./_actions/fetchGithub";
import RecentProjectCard from "./_components/RecentProjectCard";
import RecentProjectsList from "./_components/RecentProjectList";
import { fetchFilteredGithub } from "./_actions/fetchFilteredGithub";

export default async function Home() {

  const projects = await fetchFilteredGithub();
  return (
    <div className="min-h-screen relative">
      
      <div className="relative z-10 min-h-screen p-8">
        <div className="max-w-400 mx-auto">
          <div className="grid grid-cols-12 gap-6 h-screen">
            {/* Left Panel - Profile & Stats */}
            <div className="col-span-3 overflow-y-auto scrollbar-hide py-4">
              <DevProfileCard />
            </div>

            {/* Center Panel - Projects */}
            <div className="col-span-6 flex flex-col">
              <div className="mb-6">
                <h2 className="text-white mb-2">Featured Projects</h2>
                <p className="text-gray-400">Explore my recent work, projects & startup ideas!</p>
              </div>
              <RecentProjectsList projects={projects}/>
            </div>

            {/* Right Panel - Stats & Social */}
            <div className="col-span-3 overflow-y-auto scrollbar-hide py-4">
              <div className="space-y-6">
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
