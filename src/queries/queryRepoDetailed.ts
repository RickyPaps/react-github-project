import { gql } from "@apollo/client";

export const QUERY_REPO_DETAILED = gql`
  query QueryRepoDetailed($queryString: String!) {
    search(query: $queryString, type: ISSUE, first: 1) {
      edges {
        node {
          ... on Issue {
            author {
              login
            }
            number
            title
            createdAt
            state
            closed
            bodyHTML
            comments(first: 10) {
              totalCount
              nodes {
                author {
                  login
                }
                bodyHTML
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;
