import { ApolloClient, InMemoryCache } from "@apollo/client";

const {
    REACT_APP_BASE_ENDPOINT,
    REACT_APP_AUTHORIZATION
  } = process.env

export const client = new ApolloClient({
  uri: REACT_APP_BASE_ENDPOINT,
  headers: {
    authorization: REACT_APP_AUTHORIZATION!,
  },
  cache: new InMemoryCache(),
});
