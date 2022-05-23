import { Avatar, MediaQuery } from "@mantine/core";
import { useStyles } from "./Styles";
import React from "react";

export const Comment = ({ data: selectedModal }: any) => {
  const styles = useStyles();

  return (
    <div className={styles.classes.wrapper}>
      <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
        <div className="avatar-wrapper" style={{ marginRight: "5px" }}>
          <Avatar
            radius="xl"
            src={selectedModal ? selectedModal.author.avatarUrl : "Author name"}
            alt="it's me"
          />
        </div>
      </MediaQuery>

      <div className={styles.classes.commentWrapper}>
        <div className={styles.classes.commentHeader}>
          <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
            <div className="avatar-wrapper">
              <Avatar
                size={24}
                radius="xl"
                style={{ marginRight: "10px" }}
                src={
                  selectedModal ? selectedModal.author.avatarUrl : "Author name"
                }
                alt="it's me"
              />
            </div>
          </MediaQuery>
          <span>{`${selectedModal.author.login} 
        commented`}</span>
        </div>
        <div className={styles.classes.commentBody}>
          <div
            dangerouslySetInnerHTML={{
              __html: selectedModal.bodyHTML,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
