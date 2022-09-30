import { ProjectOverview } from "graphql/projects/types";
import React from "react";
import { ProjectGridItem } from "./project-grid-item";

interface ProjectGridProps {
  projects: ProjectOverview[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-12">
    {projects.map((project: ProjectOverview) => (
      <ProjectGridItem key={project.slug} project={project} />
    ))}
  </div>
);
