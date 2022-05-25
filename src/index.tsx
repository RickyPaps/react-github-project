import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import "../src/styles/index.scss";
import { client } from "./utils/Client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
