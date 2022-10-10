import { Section } from "components/layout/section";
import { Skill } from "graphql/home/types";

import SkillBadge from "./SkillBadge";
import { chunkArray, shuffleArray } from "./utils";

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  const shuffledSkills = shuffleArray([...skills]);
  const skillsPerChunk = 5;
  const skillsChunks = chunkArray(shuffledSkills, skillsPerChunk);

  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center space-y-2">
        <h2 className="text-xl md:text-3xl leading-tight">The technologies I mainly work with</h2>
        <p>
          I love learning new things through projects. So I was brought to work on many things. But 90% of the time I
          work on JavaScript-based languages and frameworks.
        </p>
      </div>

      <div className="space-y-2">
        {skillsChunks.map((skillsChunk, index) => (
          <div key={index} className="flex flex-wrap justify-center">
            {skillsChunk.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SkillsSection;
