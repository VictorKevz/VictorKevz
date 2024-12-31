export const modalVariants = {
  hidden: { x: 30, y: 30, scale: 0.8, opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.6,
      
    },
  },
  exit: {
    x: -50,
    y: -50,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

export const tabVariants = (direction) => ({
  hidden: { x: direction ? 30 : -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.6,
      
      ease: "easeInOut",
    },
  },
  exit: {
    x: direction ? -20 : 20,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
});
