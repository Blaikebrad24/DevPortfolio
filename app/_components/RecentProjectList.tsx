"use client";

import { useEffect, useState } from "react";
import RecentProjectCard from "./RecentProjectCard";
import { GithubProject, fetchGithubRepos } from "../_actions/fetchGithub";

interface RecentProjectsListProps {
    projects : GithubProject[];
}


export default function RecentProjectsList({ projects }: RecentProjectsListProps) {


    return (
        <div className="flex-1 overflow-y-auto scrollbar-hide space-y-4 p-4">
        {projects.map((project, index) => (
            <RecentProjectCard
            key={project.id}
            project={{
                id: project.id,
                title: project.title,
                description: project.description,
                technologies: project.technologies,
                stars: project.stars,
                forks: project.forks,
                link: project.link,
                index: index,
            }}
            />
        ))}
        </div>
    );
}