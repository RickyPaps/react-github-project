import logo from "./logo.svg";
import "./App.scss";
import { useQueryRepoQuery } from "./generated/graphql";
import { RepoCard } from "./components/RepoCard";
import { LoadingOverlay } from "@mantine/core";

const App = () => {
  const { data, loading, error, refetch } = useQueryRepoQuery({
    variables: {
      after: null,
      before: null,
    },
    notifyOnNetworkStatusChange: true
  });

  const handleNextPage = (obj: any) => {
    debugger;
    refetch({
      after: obj.currentCursors.after,
      before: obj.currentCursors.before,
    });
  };

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <div className="App">
      <LoadingOverlay styles={{ position: "fixed" }} visible={loading} />
      {data && (
        <div className="App-wrapper">
          <img src={logo} className="App-logo" alt="logo" />
          <RepoCard nextPage={handleNextPage} data={data} />
        </div>
      )}
    </div>
  );
};

export default App;
