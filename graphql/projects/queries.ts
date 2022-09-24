import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query Projects {
    projects(orderBy: rating_DESC) {
      slug
      title
      excerpt
      technicalStack
      coverImage {
        url
      }
    }
  }
`;

export const GET_PROJECTS_SLUGS = gql`
  query Projects {
    projects {
      slug
    }
  }
`;

export const GET_PROJECT_BY_SLUG = gql`
  query ProjectBySlug($slug: String!) {
    projects(where: { slug: $slug }) {
      title
      date
      content {
        html
      }
      excerpt
      technicalStack
      projectType
    }
  }
`;
