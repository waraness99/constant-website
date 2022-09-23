import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";

import { gql } from "@apollo/client";
import client from "apolloClient";

interface OneProjectProps {
  project: any;
}

export const OneProject: NextPage<OneProjectProps> = ({ project }) => {
  const { title, date, content } = project;

  return (
    <>
      <Head>
        <title>{title} | Constant Druon</title>
        <meta
          name="description"
          content="Hi, I'm Constant Druon and I'm a Software Engineer Student! Look at my cool projects!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <p>{date}</p>

        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query Projects {
        projects {
          slug
        }
      }
    `,
  });

  const { projects } = data;
  const paths = projects.map((project: any) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as IParams;

  const { data } = await client.query({
    query: gql`
      query ProjectBySlug($slug: String!) {
        projects(where: { slug: $slug }) {
          title
          date
          content {
            html
          }
          technicalStack
          projectType
        }
      }
    `,
    variables: { slug },
  });

  const { projects } = data;
  const project = projects[0];

  return {
    props: {
      project,
    },
  };
};

export default OneProject;
