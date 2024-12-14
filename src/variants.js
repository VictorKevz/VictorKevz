export const modalVariants = {
  hidden: { x: 50, y: 50, scale: 0.8,opacity:0 },
  visible: {
    opacity:1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
      delay: 0.1,
    },
  },
  exit:{
    x: -50, y: -50,opacity:0,
    transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.6,
        
      },
  },

};
