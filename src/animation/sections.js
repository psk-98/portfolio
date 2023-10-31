import { gradient, oppositeGradient } from "utils/colors"

export const btnYellowVariants = {
  hover: {
    scale: 1.1,
    boxShadow: ["none", "0px 0px 4px 3px #ffb800"],
    transition: {
      type: "linear",
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
      duration: 0.5,
      staggerChildren: 0.5,
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
    },
  },
}

export const scrollLineVariants = {
  initial: { width: "100%", background: "#eee" },
  animate: {
    width: ["0%", "100%", "0%"],
    background: [gradient, oppositeGradient, gradient],
    transition: {
      repeat: Infinity,
      duration: 3,
    },
  },
}
