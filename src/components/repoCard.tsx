import * as React from "react";
import { Card, createStyles, Text, Badge, Button, Group } from "@mantine/core";
import { QueryRepoQuery } from "../generated/graphql";
// import { SearchResultItemConnection } from "../types/QueryRepoType";

interface QueryProps {
  data: QueryRepoQuery;
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

  debugger;

  console.log(data);
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

export const RepoCard: React.FC<QueryProps> = ({ data }) => {
  const styles = useStyles();
  return (
    <div className={styles.classes.repoCardWrapper}>
      <RepoCardItem
        className="repoCard"
        searchItems={data.search.edges}
        styles={styles}
      />
    </div>
  );
};
