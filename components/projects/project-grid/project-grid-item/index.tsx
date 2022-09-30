import { ProjectOverview } from "graphql/projects/types";
import Link from "next/link";

interface ProjectItemProps {
  project: ProjectOverview;
}

export const ProjectGridItem = ({ project }: ProjectItemProps) => {
  const { slug, title, excerpt, coverImage, technicalStack } = project;

  return (
    <Link href={`/projects/${slug}`} passHref>
      <a
        className="group bg-white-10 border border-white-20 hover:border-white rounded-xl overflow-hidden focus-visible:ring-2"
        tabIndex={0}
      >
        <div className="h-52 lg:h-80 overflow-hidden">
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
              <p key={language} className="inline-block text-xs bg-white-10 px-2 py-1 rounded-md">
                {language}
              </p>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
};
