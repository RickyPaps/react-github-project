import React, { useEffect, useState } from "react";
import { QueryRepoQuery } from "../../generated/graphql";
import { Pagination } from "../Pagination/Pagination";
import { RepoCardItem } from "./RepoCardItem";
import { useStyles } from "./Styles";
import { Modal } from "@mantine/core";
import { motion } from "framer-motion";
import { repoCardAnimationProps } from "../../animations/animation";

interface QueryProps {
  data: QueryRepoQuery;
  nextPage: any;
}

export const RepoCard: React.FC<QueryProps> = ({ data, nextPage }) => {
  const styles = useStyles();
  const [startCursor, setstartCursor] = useState<any>();
  const [endCursor, setEndCursor] = useState<any>();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setstartCursor(data.search.pageInfo.startCursor);
    setEndCursor(data.search.pageInfo.endCursor);
  }, [data]);

  // const handleItem = (e: any) => {
  //   setOpened(true);
  // };

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  // const RepoModal = () => {
  //   return (
  //     <motion.div variants={dropIn} initial="hidden" animate="visible">
  //       <Modal
  //         transition="fade"
  //         transitionDuration={600}
  //         transitionTimingFunction="ease"
  //         opened={opened}
  //         onClose={() => setOpened(false)}
  //         title="Introduce yourself!"
  //       >
  //         <h3>daw</h3>
  //       </Modal>
  //     </motion.div>
  //   );
  // };

  return (
    <div className={styles.classes.repoWrapper}>
      <motion.div >
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          <h3>daw</h3>
        </Modal>
      </motion.div>
      <div className={styles.classes.repoCardWrapper}>
        {data.search.edges?.map((item, index) => {
          return (
            <div key={index} onClick={() => setOpened(true)}>
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
