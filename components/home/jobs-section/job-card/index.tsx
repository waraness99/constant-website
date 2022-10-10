import { Badge } from "components/badge";
import { Job } from "graphql/home/types";
import { formatDate } from "utils/date";

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const { jobTitle, companyName, companyLogo, location, startDate, endDate, description, skills } = job;

  return (
    <div className="w-full p-6 bg-white-10 rounded-xl space-y-6">
      <div className="flex space-x-4">
        <img className="w-12 h-12 rounded-lg" src={companyLogo.url} alt={companyName} />

        <div className="space-y-1">
          <h3 className="text-md">{`${jobTitle} - ${companyName}`}</h3>
          <p className="text-xs text-white-80">{`${formatDateRange(startDate, endDate)} - ${location}`}</p>
        </div>
      </div>

      <p className="text-xs">{description}</p>

      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} className="px-2 py-1 rounded-full">
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

const formatDateToMonthYear = (date: string) => formatDate(date, "MMMM yyyy");
const formatDateRange = (startDate: string, endDate: string) =>
  `${
    endDate
      ? `From ${formatDateToMonthYear(startDate)} to ${formatDateToMonthYear(endDate)}`
      : `From ${formatDateToMonthYear(startDate)} to today`
  }`;
