export const btnYellowVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "none",
    background: ["none", "#ffff00"],
    color: "#000",
    border: "none",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.9,
    boxShadow: "none",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
}

export const appearVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildern: 0.5,
    },
  },
}

export const scrollWrapperVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildern: 2,
      //delayChildren: 2,
    },
  },
}

export const scrollLineVariants = {
  initial: { width: "100%", background: "#eee" },
  animate: {
    width: ["0%", "100%", "0%"],
    background: ["#eee", "#ffff00", "#eee"],
    transition: {
      repeat: Infinity,
      duration: 3,
    },
  },
}
