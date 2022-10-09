import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { HeroSection } from "components/home/hero-section";
import { AboutMeSection } from "components/home/about-me-section";
import { ValuesSection } from "components/home/values-section";
const SkillsSection = dynamic(() => import("components/home/skills-section"), { ssr: false });
import { ProjectCTA } from "components/home/projects-cta";

import client from "graphql/apolloClient";
import { GET_HOME_INFO } from "graphql/home/queries";
import { Job, Skill, Value } from "graphql/home/types";
import dynamic from "next/dynamic";

interface HomePageProps {
  jobs: Job[];
  skills: Skill[];
  values: Value[];
}

const HomePage: NextPage<HomePageProps> = ({ jobs, skills, values }) => {
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

      <>
        <HeroSection />
        <AboutMeSection />
        {/* job history horizontal scroll */}
        <SkillsSection skills={skills} />
        <ValuesSection values={values} />
        {/* fun facts about me */}
        <ProjectCTA />
      </>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_HOME_INFO,
  });

  return {
    props: {
      jobs: data.jobs,
      skills: data.skills,
      values: data.values,
    },
    revalidate: 1,
  };
};

export default HomePage;
