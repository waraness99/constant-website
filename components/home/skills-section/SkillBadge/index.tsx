import { Skill } from "graphql/home/types";

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const { language, isFavorite } = skill;

  return (
    <div className="w-auto p-2">
      <div className="flex items-center px-2 md:px-6 py-1 md:py-3 bg-white-10 rounded-full space-x-2">
        {isFavorite && <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#f13dd4] to-[#7000ff]" />}
        <p>{language}</p>
      </div>
    </div>
  );
};

export default SkillBadge;
