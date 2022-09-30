import { formatDate } from "utils/date";

import { Badge } from "components/badge";
import { ProjectMetadataSection } from "./components/project-metadata-section";
import { ProjectMetadataItem } from "./components/project-metadata-item";
import { ProjectMetadataLink } from "./components/project-metadata-link";

import { ProjectDetails } from "graphql/projects/types";

interface ProjectMetadataProps {
  project: ProjectDetails;
}

export const ProjectMetadata = ({ project }: ProjectMetadataProps) => {
  const { date, projectType, technicalStack, repositoryUrl, websiteUrl } = project;

  return (
    <div className="space-y-6">
      <ProjectMetadataSection title="Project">
        <ProjectMetadataItem label="Published on" value={formatDate(date)} />
        <ProjectMetadataItem label="Creation context" value={projectType} />
      </ProjectMetadataSection>

      {(repositoryUrl || websiteUrl) && (
        <ProjectMetadataSection title="Links">
          {websiteUrl && <ProjectMetadataLink url={websiteUrl} type="Website" />}
          {repositoryUrl && <ProjectMetadataLink url={repositoryUrl} type="Repository" />}
        </ProjectMetadataSection>
      )}

      <ProjectMetadataSection title="Technical stack">
        <div className="flex flex-wrap gap-2">
          {technicalStack.map((language) => (
            <Badge key={language}>{language}</Badge>
          ))}
        </div>
      </ProjectMetadataSection>
    </div>
  );
};
