export const repoCardAnimationProps = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

export const filterAnimationProps = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1.2,
    transition: {
      delay: 0.5,
    },
  },
};

export const modalDropIn = {
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
