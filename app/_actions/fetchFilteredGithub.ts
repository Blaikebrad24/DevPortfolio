"use server";

import { fetchGithubRepos, GithubProject } from "./fetchGithub";

const FEATURED_REPOS_IDS = [
    "BotMarketplace_demo",
    "StockX_Ex_Demo",
    "Typescript_Leetcode_Solutions",
    "StocksDemo",

]

const PROJECT_DETAILS: Record<string, Partial<GithubProject>> = {
    "BotMarketplace_demo" :{
        design: {
            overview: "A demo bot marketplace showcasing various bots available for purchase.",
            challenges: ["Designing an intuitive UI", "Implementing secure payment methods"],
            solutions: ["User testing for UI improvements", "Integrating trusted payment gateways"],
        },
        process: {
            timeline: "3 months",
            approach: "Agile development with bi-weekly sprints",
            keyMilestones: ["Initial design", "Beta launch", "Final release"],
        },
        learnings: {
            ups: ["Improved UI/UX skills", "Learned about e-commerce integrations"],
            downs: ["Faced challenges with payment security"],
            takeaways: ["Importance of user feedback", "Need for robust security measures"],
        },
    },
    "StockX_Ex_Demo" : {
        design: {
            overview: "A demo bot marketplace showcasing various bots available for purchase.",
            challenges: ["Designing an intuitive UI", "Implementing secure payment methods"],
            solutions: ["User testing for UI improvements", "Integrating trusted payment gateways"],
        },
        process : {

            timeline: "3 months",
            approach: "Agile development with bi-weekly sprints",
            keyMilestones: ["Initial design", "Beta launch", "Final release"],
        }, 
        learnings : {
            ups: ["Improved UI/UX skills", "Learned about e-commerce integrations"],
            downs: ["Faced challenges with payment security"],
            takeaways: ["Importance of user feedback", "Need for robust security measures"],
        }
    }, 
    "Typescript_Leetcode_Solutions" : {
        design: {
            overview: "A demo bot marketplace showcasing various bots available for purchase.",
            challenges: ["Designing an intuitive UI", "Implementing secure payment methods"],
            solutions: ["User testing for UI improvements", "Integrating trusted payment gateways"],
        },
        process : {

            timeline: "3 months",
            approach: "Agile development with bi-weekly sprints",
            keyMilestones: ["Initial design", "Beta launch", "Final release"],
        }, 
        learnings : {
            ups: ["Improved UI/UX skills", "Learned about e-commerce integrations"],
            downs: ["Faced challenges with payment security"],
            takeaways: ["Importance of user feedback", "Need for robust security measures"],
        }
    }, 
    "StocksDemo" : {
        design: {
            overview: "A demo bot marketplace showcasing various bots available for purchase.",
            challenges: ["Designing an intuitive UI", "Implementing secure payment methods"],
            solutions: ["User testing for UI improvements", "Integrating trusted payment gateways"],
        },
        process : {

            timeline: "3 months",
            approach: "Agile development with bi-weekly sprints",
            keyMilestones: ["Initial design", "Beta launch", "Final release"],
        }, 
        learnings : {
            ups: ["Improved UI/UX skills", "Learned about e-commerce integrations"],
            downs: ["Faced challenges with payment security"],
            takeaways: ["Importance of user feedback", "Need for robust security measures"],
        }
    }, 

}

export async function fetchFilteredGithub(): Promise<GithubProject[]> {
    
    // fetch repos from github 
    const allProjects = await fetchGithubRepos();

    const filteredProjects = allProjects.filter(project => FEATURED_REPOS_IDS.includes(project.id));

    const enrichedProjects = filteredProjects.map(project => { 
        const details = PROJECT_DETAILS[project.id]; 
        if(details){
            return { ...project, ...details}
            }
        return project; 
    
    });

    enrichedProjects.sort((a, b) =>  b.stars - a.stars );
    return enrichedProjects;
}