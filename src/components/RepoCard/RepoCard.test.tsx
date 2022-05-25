import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { client } from "../../utils/Client";

test("issue card item load", async () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  
    const checkContent = await screen.findAllByTestId("repo-item");
    expect(checkContent[0]).toBeInTheDocument();
  });
  