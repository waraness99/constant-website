import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query Projects {
    projects(first: 100, orderBy: rating_DESC) {
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
      slug
      title
      date
      excerpt
      content {
        html
      }
      gallery {
        id
        url
      }
      youtubeVideoId
      repositoryUrl
      websiteUrl
      technicalStack
      projectType
    }
  }
`;
