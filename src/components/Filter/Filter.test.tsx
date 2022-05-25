import { ApolloProvider } from "@apollo/client";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { client } from "../../utils/Client";

test("Show filter text", () => {
    render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
    const filterText = screen.getByText(/Open/i);
    expect(filterText).toBeInTheDocument();
  });