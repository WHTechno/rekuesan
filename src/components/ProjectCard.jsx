import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col p-5">
      {project.logo && (
        <img
          src={project.logo}
          alt={`${project.name} logo`}
          className="w-16 h-16 object-contain mx-auto mb-4"
          loading="lazy"
        />
      )}
      <h3 className="text-lg font-semibold text-blue-700 text-center mb-2">
        {project.name}
      </h3>
      <p className="text-gray-600 text-sm text-center mb-6">{project.description}</p>
      <div className="flex justify-center gap-4">
        <a
          href={project.guideUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Guide
        </a>
        <a
          href={project.explorerUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 border border-blue-600 px-3 py-1 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Explorer
        </a>
      </div>
    </div>
  );
}
