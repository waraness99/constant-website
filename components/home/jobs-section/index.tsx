import { Section } from "components/layout/section";
import { linkedInProfileUrl } from "utils/links";
import { JobCard } from "./job-card";

import { Job } from "graphql/home/types";

interface JobsSectionProps {
  jobs: Job[];
}

export const JobsSection = ({ jobs }: JobsSectionProps) => (
  <Section>
    <div className="grid gap-16 grid-cols-1 md:grid-cols-2">
      <div className="space-y-8">
        <h2 className="text-xl md:text-3xl leading-tight">My previous experiences</h2>
        <p>
          I have gained valuable experience from my internships and my involvement with startups. These experiences have
          helped me to grow as a person and to learn new skills.
        </p>
        <p>
          I have had the opportunity to work with passionate and motivated people, which has been a great experience.
        </p>

        <div>
          <a
            href={linkedInProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-red font-semibold"
          >
            Learn more on my LinkedIn
          </a>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  </Section>
);
