export interface Job {
  id: string;
  jobTitle: string;
  companyName: string;
  companyLogo: {
    url: string;
  };
  location: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  description: {
    html: string;
  };
  skills: string[];
}
