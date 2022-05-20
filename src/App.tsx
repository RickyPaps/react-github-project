import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useQueryRepoQuery } from "./generated/graphql";
import { RepoCard } from "./components/RepoCard/RepoCard";
import { LoadingOverlay } from "@mantine/core";
import { Filters } from "./components/Filter/Filters";

interface filterProps {
  query: string;
}

const App = () => {
  const [queryFilter, setQueryFilter] = useState(
    "repo:reactjs/reactjs.org is:issue is:open"
  );

  const { data, loading, error, refetch } = useQueryRepoQuery({
    variables: {
      after: null,
      before: null,
      query: queryFilter,
    },
    notifyOnNetworkStatusChange: true,
  });

  const handleFilterChange = (obj: filterProps) => {
    setQueryFilter(obj.query);
    refetch({
      after: null,
      before: null,
      query: obj.query,
    });
  };

  const handleNextPage = (obj: any) => {
    refetch({
      after: obj.currentCursors.after,
      before: obj.currentCursors.before,
      query: queryFilter,
    });
  };

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <div className="app">
      <LoadingOverlay
        overlayOpacity={0.3}
        style={{ position: "fixed" }}
        visible={loading}
      />
      <div className="app-wrapper">
        <img src={logo} className="app-logo" alt="logo" />
        <Filters data={data} changeFilter={handleFilterChange} />
        {data && (
          <div>
            <RepoCard nextPage={handleNextPage} data={data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
