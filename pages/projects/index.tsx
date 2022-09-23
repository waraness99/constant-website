import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

import { gql } from "@apollo/client";
import client from "apolloClient";

interface ProjectsProps {
  projects: any;
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
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
          {projects.map((project: any) => (
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
    query: gql`
      query Projects {
        projects(orderBy: rating_DESC) {
          slug
          title
          excerpt
          technicalStack
          coverImage {
            url
          }
        }
      }
    `,
  });

  const { projects } = data;

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
