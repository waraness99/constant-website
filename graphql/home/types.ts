import { Image } from "utils/common-types";

export interface Job {
  id: string;
  jobTitle: string;
  companyName: string;
  companyLogo: Image;
  location: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  description: string;
  skills: string[];
}

export interface Skill {
  id: string;
  language: string;
  isFavorite?: boolean;
}

export interface Value {
  id: string;
  title: string;
  description: string;
}

export interface FunFact {
  id: string;
  title: string;
  description: string;
  icon: {
    url: string;
  };
}
