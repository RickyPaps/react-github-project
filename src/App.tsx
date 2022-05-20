import { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useQueryRepoQuery } from "./generated/graphql";
import { RepoCard } from "./components/RepoCard";
import { LoadingOverlay, Skeleton } from "@mantine/core";
import { Filters } from "./components/Filters";

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

  // if (error) {
  //   return <div>ERROR</div>;
  // }

  return (
    <div className="app">
      <LoadingOverlay styles={{ position: "fixed" }} visible={loading} />
      <div className="app-wrapper">
        <img src={logo} className="app-logo" alt="logo" />
        {data && (
          <div>
            <Filters
              changeFilter={handleFilterChange}
              openIssues={data.repository?.open_issues.totalCount}
              closedIssues={data.repository?.closed_issues.totalCount}
            />
            <RepoCard nextPage={handleNextPage} data={data} isLoading={loading}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
