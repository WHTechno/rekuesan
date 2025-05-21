import React from "react";
import { projects } from "../dataProjects";
import ProjectCard from "../components/ProjectCard";

export default function Service() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-10 text-blue-900 text-center">
        Testnets & Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
