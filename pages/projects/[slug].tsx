import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Section } from "components/layout/section";
import { Breadcrumbs } from "components/breadcrumbs";
import { ProjectGallery } from "components/projects/project-gallery";
import { ProjectMetadata } from "components/projects/project-metadata";

import client from "graphql/apolloClient";
import { GET_PROJECTS_SLUGS, GET_PROJECT_BY_SLUG } from "graphql/projects/queries";
import { ParsedUrlQuery } from "querystring";
import { ProjectDetails } from "graphql/projects/types";

interface ProjectPageProps {
  project: ProjectDetails;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  const { slug, title, content, excerpt, gallery, youtubeVideoId } = project;

  const breadcrumbs = [...defaultBreadcrumbs, { label: title, href: `/projects/${slug}` }];

  return (
    <>
      <Head>
        <title>{`${title} | Constant Druon`}</title>
        <meta name="description" content={excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Section parentClassName="mt-12">
        <div className="space-y-2">
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-2xl md:text-4xl">{title}</h1>
          <p className="text-md md:text-lg font-normal">{excerpt}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2">
            <ProjectGallery gallery={gallery} youtubeVideoId={youtubeVideoId} />
          </div>

          <div className="col-span-1">
            <ProjectMetadata project={project} />
          </div>
        </div>

        <div
          className="prose-headings:mb-6 prose-headings:mt-12 prose-p:mb-4"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </Section>
    </>
  );
};

const defaultBreadcrumbs = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS_SLUGS,
  });

  const paths = data.projects.map((project: { slug: string }) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;

  const { data } = await client.query({
    query: GET_PROJECT_BY_SLUG,
    variables: { slug },
  });

  return {
    props: {
      project: data.projects[0],
    },
    revalidate: 1,
  };
};

export default ProjectPage;
