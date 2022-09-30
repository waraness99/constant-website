import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import client from "graphql/apolloClient";
import { GET_PROJECTS } from "graphql/projects/queries";
import { ProjectOverview } from "graphql/projects/types";

import { Section } from "components/layout/section";
import { ProjectGrid } from "components/projects/project-grid";

interface ProjectsPageProps {
  projects: ProjectOverview[];
}

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => (
  <>
    <Head>
      <title>Projects | Constant Druon</title>
      <meta
        name="description"
        content="Hi, I'm Constant Druon and I'm a Software Engineer Student! Look at my cool projects!"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Section>
      <div className="md:mb-20 lg:mb-24 space-y-2">
        <h1 className="text-4xl font-semibold ">Projects</h1>
        <p className="text-lg md:max-w-2xl">I build stuff from time to time that might be interesting 🤷‍</p>
      </div>

      <ProjectGrid projects={projects} />
    </Section>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_PROJECTS,
  });

  return {
    props: {
      projects: data.projects,
    },
    revalidate: 1,
  };
};

export default ProjectsPage;
