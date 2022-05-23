import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  wrapper: {
    padding: "20px 8px",
    display: "flex",
  },
  commentWrapper: {
    marginLeft: "5px",
    position: "relative",
    width: "100%",
    border: "1px solid #d0d7de",
    borderRadius: "4px",
  },

  commentHeader: {
    padding: "5px 10px",
    backgroundColor: "#f6f8fa",
    border: "1px solid #d0d7de",

    "@media (max-width: 992px)": {
      display: "flex",
      alignItems: "center",
    },

    "@media (min-width: 992px)": {
      "&:before": {
        position: "absolute",
        top: "11px",
        right: "100%",
        left: "-8px",
        display: "block",
        width: "8px",
        height: "16px",
        pointerEvents: "none",
        content: '" "',
        webkitClipPath: "polygon(0 50%, 100% 0, 100% 100%)",
        clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
        backgroundColor: "#d0d7de",
      },
    },
  },

  commentBody: {
    padding: "5px 10px",
  },
}));
