import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

import client from "graphql/apolloClient";
import { GET_JOBS } from "graphql/jobs/queries";
import { Job } from "graphql/jobs/types";

interface HomePageProps {
  jobs: Job[];
}

const HomePage: NextPage<HomePageProps> = ({ jobs }) => {
  return (
    <>
      <Head>
        <title>Constant Druon</title>
        <meta
          name="description"
          content="Hi, I'm Constant Druon and I'm a Software Engineer Student! I try to make the world a better place by creating quality software that improve the lives of those around me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline text-sky-400">Welcome to my personal website!</h1>
        <NextLink href="/projects">My projects</NextLink>

        <ul>
          {jobs.map((job: Job) => (
            <li key={job.id}>
              <img src={job.companyLogo.url} alt={job.companyName} width={64} height={64} />
              <b>
                {job.jobTitle} - {job.companyName}
              </b>
              <div dangerouslySetInnerHTML={{ __html: job.description.html }} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_JOBS,
  });

  return {
    props: {
      jobs: data.jobs,
    },
    revalidate: 1,
  };
};

export default HomePage;
