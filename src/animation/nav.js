export const line1Variants = {
  open: {
    rotateZ: -405,
    translateX: -9,
    translateY: 7,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    transition: {
      //delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}
export const line2Variants = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
    transition: {
      //delay: 0.5,
    },
  },
}
export const line3Variants = {
  open: {
    rotateZ: 405,
    translateX: -9,
    translateY: -7,
    width: "100%",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    width: "10px",
    transition: {
      //delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}
export const sectionSelectorVariants = {
  selected: {
    rotateZ: 225,
    scale: 1.3,
    background: "#f2e529",
  },
  not_selected: {
    rotateZ: 0,
    scale: 1,
    border: "1px solid #f2e529",
    background: "none",
  },
}

export const sidebarVariants = {
  open: {
    height: "100%",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  closed: {
    height: 0,
    top: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
}
export const navLinkVariants = {
  active: {
    color: "#ffff00",
    transition: {
      type: "linear",
    },
  },
  open: {
    opacity: 1,
    transition: {
      type: "linear",
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      type: "linear",
      y: { stiffness: 1000 },
    },
  },
  hover: {
    scale: [1, 1.05],
    color: ["#eee", "#ffff00"],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      type: "linear",
      duration: 2,
      repeatDelay: 0,
      times: [0, 0.2, 0.5, 0.7, 1],
      color: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  tap: {
    scale: 0.95,
  },
}
export const navVariants = {
  hidden: {
    y: -100,
    transition: {
      type: "spring",
    },
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
    },
  },
}
