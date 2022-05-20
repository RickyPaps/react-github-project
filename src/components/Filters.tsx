import React, { useEffect, useState } from "react";
import { IconCircleCheck } from "@tabler/icons";
import { IconCircleDot } from "@tabler/icons";
import { createStyles, Skeleton } from "@mantine/core";

enum FilterOptions {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

interface filterProps {
  openIssues?: number | undefined;
  closedIssues?: number | undefined;
  changeFilter: (e: { query: string }) => void;
}

const useStyles = createStyles(() => ({
  filter_wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  filters: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    width: "50%",
    padding: "10px",

    "&-wrapper": {
      display: "inherit",
      alignItems: "center",
      cursor: "pointer",
      color: "#57606a99",

      svg: {
        stroke: "#57606a99",
        strokeWidth: 1,
      },
      "&.active": {
        color: "#57606a;",
        fontWeight: 500,

        svg: {
          stroke: "#57606a",
          strokeWidth: 2,
        },
      },
    },
  },
}));

export const Filters: React.FC<filterProps> = ({
  openIssues,
  closedIssues,
  changeFilter,
}) => {
  const styles = useStyles();
  const [activeFilter, setactiveFilter] = useState<string | null>();

  const handleFilterClick = (filter: string) => {
    if (filter === FilterOptions.OPEN) {
      window.sessionStorage.setItem("currentFilter", filter);
      setactiveFilter("OPEN");
      changeFilter({ query: "repo:reactjs/reactjs.org is:issue is:open" });
    }
    if (filter === FilterOptions.CLOSED) {
      window.sessionStorage.setItem("currentFilter", filter);
      setactiveFilter("CLOSED");
      changeFilter({ query: "repo:reactjs/reactjs.org is:issue is:closed" });
    }
  };

  useEffect(() => {
    const currentFilter = window.sessionStorage.getItem("currentFilter");

    if (currentFilter !== null && currentFilter.length > 1) {
      setactiveFilter(currentFilter);
    } else {
      window.sessionStorage.setItem("currentFilter", "OPEN");
      setactiveFilter(window.sessionStorage.getItem("currentFilter"));
    }
  }, []);

  return (
    <Skeleton visible={true}>
      <div className={styles.classes.filter_wrapper}>
        <div className={styles.classes.filters}>
          <div
            className={`${styles.classes.filters}-wrapper ${
              activeFilter === "OPEN" ? "active" : ""
            }`}
            onClick={() => handleFilterClick("OPEN")}
          >
            <IconCircleDot color="#1a7f37" size={40} />
            <span>{`${openIssues} Open`}</span>
          </div>
          <div
            className={`${styles.classes.filters}-wrapper ${
              activeFilter === "CLOSED" ? "active" : ""
            }`}
            onClick={() => handleFilterClick("CLOSED")}
          >
            <IconCircleCheck color="#8250df" size={40} />
            <span>{`${closedIssues} Closed`}</span>
          </div>
        </div>
      </div>
    </Skeleton>
  );
};
