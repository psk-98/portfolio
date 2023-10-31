export const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      type: "spring",
      staggerChildren: 0.3,
      duration: 0.8,
      delay: 0.5,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      ease: "easeInOut",
    },
  },
}
