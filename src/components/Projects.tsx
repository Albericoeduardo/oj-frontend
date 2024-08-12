"use client";

import React, { useEffect, useState } from 'react'
import { getProjects } from '@/services/api';

interface Project {
    id: number;
    image: string;
    title: string;
    description: string;
    links: string[];
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    return (
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <img src={project.image} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.links.map((link) => (
                        <a key={link} href={link}>Download</a>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Projects