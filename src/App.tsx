import { useRef, useState } from "react";
import logo from "./logo.svg";
import "../src/styles/App.scss";
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
  const appWrapper = useRef<HTMLDivElement>(null);

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
    appWrapper?.current?.scrollIntoView({ behavior: "smooth" });
    refetch({
      after: obj.currentCursors.after,
      before: obj.currentCursors.before,
      query: queryFilter,
    });
  };

  return (
    <div className="app" data-testid="app" ref={appWrapper}>
      <div className="app-wrapper">
        <Header
          data-testid="navbar"
          height={70}
          p="md"
          style={{ backgroundColor: "#353e50", border: "none" }}
        >
          <div className="header-wrapper">
            <img src={logo} className="app-logo" alt="logo" />
            <Filters data={data} changeFilter={handleFilterChange} />
          </div>
        </Header>
        <div
          style={{
            position: "relative",
            paddingBottom: "20px",
            height: loading ? "100vh" : "inherit",
          }}
        >
          <LoadingOverlay
            overlayOpacity={0.3}
            style={{ position: "absolute" }}
            visible={loading}
          />
          {data && <RepoCard nextPage={handleNextPage} data={data} />}
        </div>
      </div>
    </div>
  );
};

export default App;
