import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { client } from "./utils/Client";

test("App load", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const rootText = screen.getByTestId("app");
  expect(rootText).toBeInTheDocument();
});

test("nav load", async () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

  const checkContent = screen.getByTestId("navbar");
  expect(checkContent).toBeInTheDocument();
});