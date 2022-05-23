import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  repoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: "calc(100vw - 100%)",
  },
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
