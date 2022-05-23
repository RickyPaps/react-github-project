import React, { useEffect, useState } from "react";
import { QueryRepoQuery } from "../../generated/graphql";
import { RepoModal } from "../Modal/Modal";
import { Pagination } from "../Pagination/Pagination";
import { RepoCardItem } from "./RepoCardItem";
import { useStyles } from "./Styles";

interface QueryProps {
  data: QueryRepoQuery;
  nextPage: any;
}

export const RepoCard: React.FC<QueryProps> = ({ data, nextPage }) => {
  const styles = useStyles();
  const [startCursor, setstartCursor] = useState<any>();
  const [endCursor, setEndCursor] = useState<any>();
  const [opened, setOpened] = useState<boolean>(false);
  const [currentIssues, setCurrentIssues] = useState<Array<any>>([]);
  const [selectedIssue, setSelectedIssue] = useState();

  useEffect(() => {
    setstartCursor(data.search.pageInfo.startCursor);
    setEndCursor(data.search.pageInfo.endCursor);
    if (data.search.edges) {
      setCurrentIssues(data.search.edges);
    }
  }, [data]);

  const handleSelected = (index: number) => {
    setSelectedIssue(currentIssues[index]);
    setOpened(true);
  };

  return (
    <div className={styles.classes.repoWrapper}>
      <RepoModal
        setOpened={setOpened}
        opened={opened}
        selectedModal={selectedIssue}
      />
      <div className={styles.classes.repoCardWrapper}>
        {data.search.edges?.map((item, index) => {
          return (
            <div key={index} onClick={() => handleSelected(index)}>
              <RepoCardItem
                className="repoCard"
                searchItems={item}
                styles={styles}
              />
            </div>
          );
        })}
      </div>
      <Pagination
        startCursor={startCursor}
        endCursor={endCursor}
        nextPage={nextPage}
        hasNext={data.search.pageInfo.hasNextPage}
        hasPrevious={data.search.pageInfo.hasPreviousPage}
      />
    </div>
  );
};
