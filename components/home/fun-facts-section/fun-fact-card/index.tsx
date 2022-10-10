import { Section } from "components/layout/section";
import { FunFact } from "graphql/home/types";

interface FunFactCardProps {
  funFact: FunFact;
}

export const FunFactCard = ({ funFact }: FunFactCardProps) => {
  const { title, description, icon } = funFact;

  return (
    <div className="bg-white-10 p-8 md:p-10 lg:p-12 rounded-2xl space-y-4">
      <img src={icon.url} alt="" className="w-8 h-8 opacity-60" />
      <div className="space-y-2">
        <h3 className="text-md">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};
