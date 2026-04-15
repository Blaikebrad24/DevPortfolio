"use server";

import { fetchGithubRepos, GithubProject } from "./fetchGithub";

const FEATURED_REPOS_IDS = [
    "AzureMicroservices",
    "AI-Security-Guard",
    "Golang_Practice",
    "Java_RAG_Application",
    "BotMarketplace_demo",
    "RealTimeSocketIO",
    "SpringSecurityDemo",
];

export async function fetchFilteredGithub(): Promise<GithubProject[]> {
    const allProjects = await fetchGithubRepos();
    const filteredProjects = allProjects.filter(project => FEATURED_REPOS_IDS.includes(project.id));
    filteredProjects.sort((a, b) => b.stars - a.stars);
    return filteredProjects;
}