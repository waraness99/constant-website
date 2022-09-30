import { ProjectOverview } from "graphql/projects/types";
import Link from "next/link";

import { Badge } from "components/badge";

interface ProjectItemProps {
  project: ProjectOverview;
}

export const ProjectGridItem = ({ project }: ProjectItemProps) => {
  const { slug, title, excerpt, coverImage, technicalStack } = project;

  return (
    <Link href={`/projects/${slug}`} passHref>
      <a
        className="group bg-white-10 border border-white-20 hover:border-white rounded-xl overflow-hidden focus-visible:ring-2  "
        tabIndex={0}
      >
        <div className="aspect-auto overflow-hidden">
          <img
            className="w-full transform group-hover:scale-110 transition ease-in-out duration-700"
            src={coverImage.url}
            alt={title}
          />
        </div>
        <div className="px-4 py-6 space-y-6">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-white">{title}</p>
            <p className="text-sm">{excerpt}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {technicalStack.map((language) => (
              <Badge key={language} className="bg-white-10">
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};
