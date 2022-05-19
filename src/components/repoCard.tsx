import React, { useEffect, useState } from "react";
import { Card, createStyles, Text, Badge, Button, Group } from "@mantine/core";
import { QueryRepoQuery } from "../generated/graphql";
import { Pagination } from "./Pagination";
// import { SearchResultItemConnection } from "../types/QueryRepoType";

interface QueryProps {
  data: QueryRepoQuery;
  nextPage: any;
}

interface QueryDataProps {
  searchItems: any;
  className: string;
  styles: any;
}

const useStyles = createStyles(() => ({
  repoCardWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  repoCardContainer: {
    height: "inherit",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    cursor: "pointer",
    transition: "all 1s",

    "&:hover": {
      "&:not(.repoButton)": {
        filter: "blur(1px)",
      },
    },
  },
  repoCard: {
    width: "340px",
    margin: "10px",
    padding: "10px",
    height: "250px",
    position: "relative",

    "&:hover > div:first-of-type": {
      filter: "blur(2px)",
    },
  },
  repoButton: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "inherit",
    width: "inherit",
    opacity: "0",
    transition: "all 1s",
    zIndex: 99,
    margin: "inherit",
    padding: "inherit",

    fontSize: "1.5rem",
    fontFamily: "monospace",
    letterSpacing: "2px",
    fontWeight: "bolder",

    "&:hover": {
      backgroundColor: "#2da44ec4",
      opacity: "1",
    },
  },
}));

const RepoCardItem = (props: QueryDataProps) => {
  const { searchItems: data, className, styles } = props;
  const items = data;
  return (
    items &&
    items.map((item: any) => {
      return (
        <div className={`${props.className} ${props.styles.classes.repoCard}`}>
          <Card
            className={props.styles.classes.repoCardContainer}
            shadow="sm"
            p="lg"
          >
            <Card.Section>{item.node.title}</Card.Section>
            <Group position="apart">
              <Text weight={500}>{item.node.title}</Text>
              <Badge color="pink" variant="light">
                {item.node.state}
              </Badge>
            </Group>
          </Card>
          <Button className={props.styles.classes.repoButton}>
            View Issue
          </Button>
        </div>
      );
    })
  );
};

export const RepoCard: React.FC<QueryProps> = ({ data, nextPage }) => {
  const styles = useStyles();
  const [activePage, setPage] = useState(1);
  const [startCursor, setstartCursor] = useState<any>();
  const [endCursor, setEndCursor] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalIssues, settotalIssues] = useState<number>(0);
  const [IssueFilter, setIssueFilter] = useState<String>("OPEN");

  useEffect(() => {
    if (data.repository && data.repository) {
      settotalIssues(data.repository.open_issues.totalCount);
    }
  }, [data]);

  useEffect(() => {
    setstartCursor(data.search.pageInfo.startCursor);
    setEndCursor(data.search.pageInfo.endCursor);
  }, [data]);

  // useEffect(() => {
  //   // console.log(activePage);
  //   // debugger;
  //   // setCurrentPage(activePage);
  //   // const newPages = {
  //   //   after: null,
  //   //   before: null,
  //   // };
  //   // if (activePage < currentPage) {
  //   //   newPages.before = startCursor;
  //   //   newPages.after = null;
  //   //   nextPage({ currentCursors: newPages });
  //   // }
  //   // if (activePage > currentPage) {
  //   //   newPages.before = null;
  //   //   newPages.after = endCursor;
  //   //   nextPage({ currentCursors: newPages });
  //   // }
  // }, [activePage]);

  return (
    <div className={styles.classes.repoCardWrapper}>
      <RepoCardItem
        className="repoCard"
        searchItems={data.search.edges}
        styles={styles}
      />
      {/* <Pagination
        page={activePage}
        onChange={setPage}
        total={Math.round(totalIssues / 10)}
      /> */}
      <Pagination
        startCursor={startCursor}
        endCursor={endCursor}
        nextPage={nextPage}
      />
    </div>
  );
};
