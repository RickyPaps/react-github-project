import React, { memo, useEffect, useState } from "react";
import { IconCircleCheck } from "@tabler/icons";
import { IconCircleDot } from "@tabler/icons";
import { motion } from "framer-motion";
import { filterAnimationProps } from "../../animations/animation";
import { useStyles } from "./Styles";
import { FilterOptions } from "./Types";

interface filterProps {
  changeFilter: (e: { query: string }) => void;
  data: any;
}

const Filters: React.FC<filterProps> = ({ changeFilter, data }) => {

  const styles = useStyles();
  const [activeFilter, setactiveFilter] = useState<string | null>();
  const [openIssues, setOpenIssues] = useState();
  const [closedIssues, setClosedIssues] = useState();

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

  useEffect(() => {
    if (data && data.repository) {
      setOpenIssues(data.repository.open_issues.totalCount);
      setClosedIssues(data.repository.closed_issues.totalCount);
    }
  }, [data]);

  return (
    <div className={styles.classes.filter_wrapper}>
      <div className={styles.classes.filters}>
        <motion.div
          variants={filterAnimationProps}
          initial="hidden"
          animate="visible"
          className={`${styles.classes.filters}-wrapper ${
            activeFilter === "OPEN" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("OPEN")}
        >
          <IconCircleDot color="#1a7f37" size={40} />
          <span>{`${openIssues ? openIssues : ''} Open`}</span>
        </motion.div>
        <motion.div
          variants={filterAnimationProps}
          initial="hidden"
          animate="visible"
          className={`${styles.classes.filters}-wrapper ${
            activeFilter === "CLOSED" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("CLOSED")}
        >
          <IconCircleCheck color="#8250df" size={40} />
          <span>{`${closedIssues ? closedIssues : ''} Closed`}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Filters)