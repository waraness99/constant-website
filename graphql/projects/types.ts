export interface ProjectOverview {
  slug: string;
  title: string;
  excerpt: string;
  technicalStack: string[];
  coverImage: {
    url: string;
  };
}

export interface ProjectDetails {
  title: string;
  date: string;
  content: {
    html: string;
  };
  technicalStack: string[];
  projectType: string[];
  excerpt: string;
}
