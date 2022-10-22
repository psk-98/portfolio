export const linksHover = {
    hover: {
        x: [0, -2 , 2, 0],
        scale: 1.05,
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 6,
            ease: "easeInOut",
            yoyo: Infinity
        }
    }
}

export const viewBtn = {
    initial: {
        transition: {
            type: "spring",
            duration: 0.2
        }
    },
    hover: {
        scale: 1.1,
        boxShadow: "none",
        transition: {
            type: "spring", 
            stiffness: 400, 
            damping: 10
        }
    },
    tap: {
        scale: 0.9,
        boxShadow: "none",
        transition: {
            type: "spring", 
            stiffness: 400, 
            damping: 10
        }
    }
}

export const hoverImg = {
    hover: {
        x: [0, -2 , 2, 0],
        scale: [1, 1.05],
        boxShadow: "0px 0px 1px #f5f5f5",
        transition: {
            duration: 1,
            type: "spring",
            stiffness: 6,
            yoyo: Infinity
        }
    }
}

export const introVariants = {
    offscreen: {
      y: -300
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
};
export const sectionsVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: 0.5
      }
    }
}

export const line1Variants = {
    open: {
        rotateZ: -405,
        translateX: -8,
        translateY: 6,
        transition: {
            type: "spring",
            stiffness: 50,
            restDelta: 2
        }
    },
    closed: {
        rotateZ: 0,
        translateX: 0,
        translateY: 0,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}
export const line2Variants = {
    open: {
        opacity: 0
    },
    closed: {
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}
export const line3Variants = {
    open: {
        rotateZ: 405,
        translateX: -8,
        translateY: -6,
        width: "100%",
        transition: {
            type: "spring",
            stiffness: 50,
            restDelta: 2
        }
    },
    closed: {
        rotateZ: 0,
        translateX: 0,
        translateY: 0,
        width: "10px",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}
export const sectionSelectorVariants = {
    selected: {
        rotateZ: 225,
        scale: 1.3,
        background: "#f2e529"
    },
    not_selected: {
        rotateZ: 0,
        scale: 1,
        border: "1px solid #f2e529",
        background: "none"
    }
}

export const sidebarVariants = {
    open: {
        height: "100%",
        width: "70%",
        transition: {
            type: "spring",
            stiffness: 50,
            restDelta: 2
        }
    },
    closed: {
        height: 0,
        width: 0,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}
export const ulVariants = {
    open: {
        //display: 'block',
        transition: { 
            staggerChildren: 0.07, 
            delayChildren: 0.2 
        }
    },
    closed: {
        display: 'none',
        transition: { 
            staggerChildren: 0.05, 
            staggerDirection: -1,
            when: "afterChildren"
        }
    }
}
export const navLinkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      x: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

export const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
        rotate: 0,
        transition: { duration : 1 }
    },
}

export const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: { 
        duration: 2,
        ease: "easeInOut",
        }
    },
    hover: {
        pathLength: [1, 0],
        //opacity: [1, 0],
        transition: { 
        duration: 2,
        ease: "easeInOut",
        yoyo: Infinity
        }
    }
}
export const frontFlipVariants = {
    initial: {
        rotateX: 0,
        opacity: 1
    },
    hover: {
        rotateX: 180,
        opacity: 0,
        transition: {
            type: "spring"
        }
    }
}
export const backFlipVariants = {
    initial: {
        rotateX: 180,
        opacity: 0
    },
    hover: {
        rotateX: 0,
        opacity: 1,
        transition: {
            type: "spring"
        }
    }
}
