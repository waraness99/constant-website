import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import client from "graphql/apolloClient";
import { GET_PROJECTS_SLUGS, GET_PROJECT_BY_SLUG } from "graphql/projects/queries";
import { ProjectDetails } from "graphql/projects/types";
import { ParsedUrlQuery } from "querystring";

interface ProjectPageProps {
  project: ProjectDetails;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const ProjectPage: NextPage<ProjectPageProps> = ({ project }) => {
  const { title, date, content, excerpt, gallery } = project;

  return (
    <>
      <Head>
        <title>{`${title} | Constant Druon`}</title>
        <meta name="description" content={excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <p>{date}</p>
        {gallery.length > 0 && gallery.map((image) => <img key={image.id} src={image.url} alt="" width={256} />)}

        <p>{content.markdown}</p>
      </main>
    </>
  );
};

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
