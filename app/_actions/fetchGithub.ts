"use server";
import { cache } from "react";


export interface GithubProject 
{
    id: string;
    title: string;
    description: string;
    technologies: string[];
    stars: number;
    forks: number;
    link: string;
    design: {
        overview: string;
        challenges: string[];
        solutions: string[];
    };
    process: {
        timeline: string;
        approach: string;
        keyMilestones: string[];
    };
    learnings: {
        ups: string[];
        downs: string[];
        takeaways: string[];
    };
}

// TypeScript

let githubCache: { data: GithubProject[]; timestamp: number } | null = null;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

async function _fetchGithubRepos(): Promise<GithubProject[]> 
{
    const now = Date.now();
    if (githubCache && now - githubCache.timestamp < CACHE_DURATION) {
        return githubCache.data;
    }

    const res = await fetch("https://api.github.com/users/Blaikebrad24/repos", {
        headers: { "Accept": "application/vnd.github+json" },
      // cache: "force-cache", // Optionally use fetch cache
    });
    if (!res.ok) throw new Error("Failed to fetch GitHub repos");
    
        const data = await res.json();
        const PROJECT_DATA: Record<string, { design: GithubProject["design"]; process: GithubProject["process"]; learnings: GithubProject["learnings"] }> = {
            "AzureMicroservices": {
                design: {
                    overview: "This application is the largest to date Docker container application that I have built, with 12 total containers. This application integrates much of my experience and chosen Tech stack for most applications & deployment process.",
                    challenges: ["Managing all 12 containers.", "Keycloak container configuration", "First time working with Azurite"],
                    solutions: ["Utilizing Claude for Azurite container configuration", "Creating self-signed cert for Nginx TLS/SSL termination"],
                },
                process: {
                    timeline: "3-4 week build process",
                    approach: "Design flow diagrams, then Containerize each Spring Boot API & Databases (based off experience), then build the Authentication containers",
                    keyMilestones: ["Completing Auth layer with Nginx & Python OIDC containers", "Pagination with the Spring APIs"],
                },
                learnings: {
                    ups: ["Learning the importance of each Dockerfile & in-depth understanding of layers in the containers"],
                    downs: ["How long it took to figure out the Python/Flask OIDC container code"],
                    takeaways: ["Most likely I will keep the Nginx/Flask OIDC container codebase so that I can quickly spin up a reverse-proxy application anytime I need an Auth layer"],
                },
            },
            "AI-Security-Guard": {
                design: {
                    overview: "This project I will use a featured Python + Docker + AI Agent application. This mock application is a dashboard application which can receive mp4 video uploads, kicks off a backend AI AGENT that can perform text-video search, returning specific video frames to the user.",
                    challenges: ["Understanding the AI AGENT/WORKER container process", "Python code enabling intelligent-search"],
                    solutions: ["More study with AI + Python", "Pick apart the code and make enhancements & changes for this application, the backend code was pulled from another repo."],
                },
                process: {
                    timeline: "TBD - Built the AzureMircoservices application, I am circling back to this for Instgram content",
                    approach: "Review the AI AGENT container configuration and code",
                    keyMilestones: ["The frontend UI took me awhile to complete", "Fast API as a gateway", "Adding CI/CD & Terraform for mock deployment to AWS EC2"],
                },
                learnings: {
                    ups: ["Python processing mp4 files"],
                    downs: ["Time taken to complete this application"],
                    takeaways: ["Spinning up a backend Docker container with a AI model"],
                },
            },
            "BotMarketplace_demo": {
                design: {
                    overview: "This application sparked the idea for the AI-Security-Guard in a way, it's also the first application that I used AI-assistance with Claude. I wanted to test how quickly I could build a FastAPI application since I've had most API development experience with Spring Boot.",
                    challenges: ["Using different ORM tools (Pydantic, Alembic, Sqlalchemy", "Authentication with FastAPI"],
                    solutions: ["Tutorials and Documentation for FastAPI & ORMs for Python"],
                },
                process: {
                    timeline: "2 1/2 weeks to build, 2 weeks of research of documentation and tutorials",
                    approach: "Create somewhat the same file hierarchy that I learned/use in my Spring Boot applications (personal & work). Familiarity of the structual design of the Python application, then just piecing it together starting with the ORMs",
                    keyMilestones: ["Being able to migrate and change the postgres data using the ORMs and configuring them correctly", "Authentication Layer using FastAPI"],
                },
                learnings: {
                    ups: ["FastAPI and Python ORMs experience and Dockerizing"],
                    downs: ["The time it took to setup the ORMs and their commands so that I can add/edit data in the Postgres container efficiently for application testing"],
                    takeaways: ["Maybe lean into FastAPI & Python ORMs for future projects"],
                },
            },
            "RealTimeSocketIO": {
                design: {
                    overview: "This application was my attempt in creating mock chat application, first using Docker, Redis and websockets programming.",
                    challenges: ["Overall the architecture of this I orginally did not do a good job so it took me awhile to get this working"],
                    solutions: ["Understanding websockets & Fastify"],
                },
                process: {
                    timeline: "3 months build",
                    approach: "I am going to revisit this application with updated libraries/frameworks",
                    keyMilestones: ["Websockets programming and Fastify"],
                },
                learnings: {
                    ups: ["Realtime Application development using websockets"],
                    downs: ["Not designing this application first. It was more of a sandbox"],
                    takeaways: ["Designing this first"],
                },
            },
            "SpringSecurityDemo": {
                design: {
                    overview: "This application is a mock of an application that I deployed for work, a Spring Boot Authentication application. When I first developed this application, I would create other endpoints/controllers and use a vanilla JS application as a frontend. Before refactoring this application to use the on-prem OIDC provider, this performed well for it's use-case. I will go back and update/extend this to be a Docker Container.",
                    challenges: ["Maintaining this code for the on-prem implementation", "Deployment of this application"],
                    solutions: ["Constant upkeep but good performance", "TODO: Solution 2"],
                },
                process: {
                    timeline: "This took me 5-6 months to build and before AI-assistance, first real impl was developed in 2020. It was my first time coding web security / auth server from scratch.",
                    approach: "I found some examples online, but I was originally going to the 'no-framework' way, then I was able to piece this together using Spring Boot",
                    keyMilestones: ["Learning Spring Boot framework and design patterns", "Completing a successfull login"],
                },
                learnings: {
                    ups: ["Authentication & JWTs with Spring Boot Security", "Spring Boot annotations"],
                    downs: ["Restarting this project halfway through to use a Framework, which had it's own learning curve."],
                    takeaways: ["Spring Boot experience in on-prem/production environment", "Spring Boot Security as a Authentication Layer for Frontend application"],
                },
            },
        };

        const defaultDetail = {
            design: { overview: "", challenges: [], solutions: [] },
            process: { timeline: "", approach: "", keyMilestones: [] },
            learnings: { ups: [], downs: [], takeaways: [] },
        };

        const projects = data.map((repo: { name: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number; html_url: string }) => {
            const detail = PROJECT_DATA[repo.name] || defaultDetail;
            return {
                id: repo.name,
                title: repo.name,
                description: repo.description || "No description provided.",
                technologies: repo.language ? [repo.language] : [],
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                link: repo.html_url,
                ...detail,
            };
        });
    
        githubCache = { data: projects, timestamp: now };
        return projects;
}

export const fetchGithubRepos = cache(_fetchGithubRepos);
