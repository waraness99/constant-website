import type { GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import { HeroSection } from "components/home/hero-section";
import { AboutMeSection } from "components/home/about-me-section";
import { ValuesSection } from "components/home/values-section";
const SkillsSection = dynamic(() => import("components/home/skills-section"), { ssr: false });
import { ProjectCTASection } from "components/home/projects-cta-section";
import { JobsSection } from "components/home/jobs-section";
import { FunFactsSection } from "components/home/fun-facts-section";

import client from "graphql/apolloClient";
import { GET_HOME_INFO } from "graphql/home/queries";
import { FunFact, Job, Skill, Value } from "graphql/home/types";

interface HomePageProps {
  jobs: Job[];
  skills: Skill[];
  values: Value[];
  funFacts: FunFact[];
}

const HomePage: NextPage<HomePageProps> = ({ jobs, skills, values, funFacts }) => (
  <>
    <Head>
      <title>Constant Druon</title>
      <meta
        name="description"
        content="Hi, I'm Constant Druon and I'm a Software Engineer Student! I try to make the world a better place by creating quality software that improve the lives of those around me."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <>
      <HeroSection />
      <AboutMeSection />
      <JobsSection jobs={jobs} />
      <SkillsSection skills={skills} />
      <ValuesSection values={values} />
      <FunFactsSection funFacts={funFacts} />
      <ProjectCTASection />
    </>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_HOME_INFO,
  });

  const { jobs, skills, values, funFacts } = data;

  return {
    props: {
      jobs,
      skills,
      values,
      funFacts,
    },
    revalidate: 1,
  };
};

export default HomePage;
