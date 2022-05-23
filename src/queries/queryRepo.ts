import { gql } from "@apollo/client";

export const QUERY_REPO = gql`
  query QueryRepo($after: String, $before: String, $query: String!) {
    search(
      query: $query
      type: ISSUE
      last: 9
      after: $after
      before: $before
    ) {
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ... on Issue {
            author{
              login
              avatarUrl
            }
            number
            title
            createdAt
            state
            closed
            bodyHTML
            comments(first:10){
              totalCount
              nodes{
                author{
                  login
                  avatarUrl
                }
                bodyHTML
                createdAt
              }
            }
          }
        }
      }
    }
    repository(owner: "reactjs", name: "reactjs.org") {
      open_issues: issues(states: OPEN) {
        totalCount
      }
      closed_issues: issues(states: CLOSED) {
        totalCount
      }
    }
  }
`;
