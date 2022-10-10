import { gql } from "@apollo/client";

export const GET_HOME_INFO = gql`
  query Jobs {
    jobs(orderBy: startDate_DESC) {
      id
      jobTitle
      companyName
      companyLogo {
        url
      }
      location
      startDate
      endDate
      isCurrentJob
      description
      skills
    }
    skills(first: 15) {
      id
      language
      isFavorite
    }
    values {
      id
      title
      description
    }
    funFacts {
      id
      title
      description
      icon {
        url
      }
    }
  }
`;
