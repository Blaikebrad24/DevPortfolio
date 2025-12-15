

import { fetchGithubRepos } from "@/app/_actions/fetchGithub";
import { DetailedProjectView } from "@/app/_components/DetailedProjectView";

import { notFound } from "next/navigation";

interface ProjectPageProps {
    params: Promise<{id : string}>;
}

export default async function ProjectPage({ params }: ProjectPageProps) 
{
    const projects = await fetchGithubRepos();
    const { id } =  await params;
    const project = projects.find((p) => p.id === id);

    if (!project) return notFound();

    return (
        <DetailedProjectView
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        stars={project.stars}
        forks={project.forks}
        link={project.link}
        design={project.design}
        process={project.process}
        learnings={project.learnings}
        />
    );
}