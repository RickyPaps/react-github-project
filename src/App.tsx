import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQueryRepoQuery, QueryRepoQuery } from "./generated/graphql";
import { RepoCard } from "./components/RepoCard";

const App = () => {
  const { data, loading, error } = useQueryRepoQuery({
    variables: {
      after: null,
      before: null,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <RepoCard data={data} />
    </div>
  );
};

export default App;
