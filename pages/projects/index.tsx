import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

import client from "graphql/apolloClient";
import { GET_PROJECTS } from "graphql/projects/queries";
import { ProjectOverview } from "graphql/projects/types";

interface ProjectsPageProps {
  projects: ProjectOverview[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects | Constant Druon</title>
        <meta
          name="description"
          content="Hi, I'm Constant Druon and I'm a Software Engineer Student! Look at my cool projects!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My projects</h1>

        <ul>
          {projects.map((project: ProjectOverview) => (
            <li key={project.slug}>
              <NextLink href={`projects/${project.slug}`}>{project.title}</NextLink>
              <p>{project.excerpt}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS,
  });

  return {
    props: {
      projects: data.projects,
    },
  };
};

export default ProjectsPage;
