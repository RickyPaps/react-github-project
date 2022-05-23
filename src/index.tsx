import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./index.css";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: process.env.REACT_APP_AUTHORIZATION!,
  },
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
