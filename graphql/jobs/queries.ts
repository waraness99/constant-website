import { gql } from "@apollo/client";

export const GET_JOBS = gql`
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
      description {
        html
      }
      skills
    }
  }
`;
