import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  filter_wrapper: {
    display: "flex",
  },
  filters: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",

    "&-wrapper": {
      display: "inherit",
      alignItems: "center",
      cursor: "pointer",
      color: "#57606a99",
      fontSize: "small",

      svg: {
        stroke: "#57606a99",
        strokeWidth: 1,
      },
      "&.active": {
        color: "#fff",
        fontWeight: 500,

        svg: {
          stroke: "#fff",
          strokeWidth: 2,
        },
      },
    },
  },
}));
