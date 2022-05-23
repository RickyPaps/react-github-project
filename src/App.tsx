import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useQueryRepoQuery } from "./generated/graphql";
import { RepoCard } from "./components/RepoCard/RepoCard";
import { Burger, Header, LoadingOverlay, MediaQuery } from "@mantine/core";
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
          fixed
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              height: "100%",
            }}
          >
            {/* <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={false}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text> */}
            <Filters data={data} changeFilter={handleFilterChange} />
          </div>
        </Header>
        <img src={logo} className="app-logo" alt="logo" />
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
