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
        const projects = data.map((repo: any) => ({
        id: repo.name,
        title: repo.name,
        description: repo.description || "No description provided.",
        technologies: repo.language ? [repo.language] : [],
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        link: repo.html_url,
        design: {
            overview: "Project overview goes here.",
            challenges: ["Challenge 1", "Challenge 2"],
            solutions: ["Solution 1", "Solution 2"],
        },
        process: {
            timeline: "Timeline details here.",
            approach: "Approach details here.",
            keyMilestones: ["Milestone 1", "Milestone 2"],
        },
        learnings: {
            ups: ["Positive learning 1"],
            downs: ["Negative learning 1"],
            takeaways: ["Key takeaway 1"],
        },
        }));
    
        githubCache = { data: projects, timestamp: now };
        return projects;
}

export const fetchGithubRepos = cache(_fetchGithubRepos);
