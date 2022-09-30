import { IoLinkOutline, IoGitBranchOutline } from "react-icons/io5";
import { ProjectMetadataItem } from "./project-metadata-item";

interface ProjectMetadataLinkProps {
  url: string;
  type: "Website" | "Repository";
}

export const ProjectMetadataLink = ({ url, type }: ProjectMetadataLinkProps) => {
  const Icon = () => {
    switch (type) {
      case "Website":
        return <IoLinkOutline className="text-white" />;
      case "Repository":
        return <IoGitBranchOutline className="text-white" />;
    }
  };

  return (
    <ProjectMetadataItem label={type}>
      <div className="flex justify-start items-center space-x-2">
        <Icon />
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-white text-opacity-80 hover:text-red hover:text-opacity-100 line-clamp-1"
        >
          {url}
        </a>
      </div>
    </ProjectMetadataItem>
  );
};
