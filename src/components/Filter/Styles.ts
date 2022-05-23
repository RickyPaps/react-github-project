import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  filter_wrapper: {
    display: "flex",
  },
  filters: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",

    "div:first-of-type": {
      marginRight: "40px",
    },

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

      "@media (max-width: 992px)": {
        svg: { width: "30px", height: "30px" },
      },

      "@media (min-width: 992px)": {
        svg: {
          width: "40px",
          height: "40px",
        },
      },
    },
  },
}));
