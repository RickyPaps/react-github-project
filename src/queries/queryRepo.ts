import { gql } from "@apollo/client";

export const QUERY_REPO = gql`
  query QueryRepo($after: String, $before: String) {
    search(
      query: "repo:reactjs/reactjs.org is:issue is:open"
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
            number
            title
            createdAt
            number
            state
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
