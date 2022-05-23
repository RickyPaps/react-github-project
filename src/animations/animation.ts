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
