import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useQueryRepoQuery } from "./generated/graphql";
import { RepoCard } from "./components/RepoCard/RepoCard";
import { Header, LoadingOverlay } from "@mantine/core";
import { Filters } from "./components/Filter/Filters";

interface filterProps {
  query: string;
}

const App = () => {
  const [queryFilter, setQueryFilter] = useState(
    process.env.REACT_APP_BASE_QUERY!
  );

  const { data, loading, refetch } = useQueryRepoQuery({
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

  return (
    <div className="app">
      <div className="app-wrapper">
        <LoadingOverlay
          overlayOpacity={0.3}
          style={{ position: "fixed" }}
          visible={loading}
        />
        <Header
          height={70}
          p="md"
          style={{ backgroundColor: "#353e50", border: "none" }}
        >
          <div className="header-wrapper">
            <img src={logo} className="app-logo" alt="logo" />
            <Filters data={data} changeFilter={handleFilterChange} />
          </div>
        </Header>
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
