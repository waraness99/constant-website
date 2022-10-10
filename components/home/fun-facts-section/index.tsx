import { Section } from "components/layout/section";
import { FunFact } from "graphql/home/types";
import { FunFactCard } from "./fun-fact-card";

interface FunFactsSectionProps {
  funFacts: FunFact[];
}

export const FunFactsSection = ({ funFacts }: FunFactsSectionProps) => (
  <Section>
    <div className="space-y-2">
      <h2 className="text-xl md:text-3xl leading-tight">Here are some fun facts about me</h2>
      <p className="text-xl md:text-3xl">Some unique things about me.</p>
    </div>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
      {funFacts.map((funfact) => (
        <FunFactCard key={funfact.id} funFact={funfact} />
      ))}
    </div>
  </Section>
);
