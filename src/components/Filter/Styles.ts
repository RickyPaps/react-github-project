import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  filter_wrapper: {
    display: "flex",
    justifyContent: "center",
  },
  filters: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#fff",
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
