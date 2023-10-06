import {
  appearVariants,
  btnYellowVariants,
  scrollWrapperVariants,
} from "@/animation/sections"
import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"
import { scroller } from "../nav/helpers"
import { gradient, oppositeGradient } from "utils/colors"

export default function Intro() {
  return (
    <motion.div
      className={styles.homeSection}
      id="intro"
      initial="hidden"
      whileInView="visible"
      key={1}
      variants={appearVariants}
      viewport={{ once: true }}
    >
      <div className={styles.intro}>
        <div className={`${styles.introName} color`}>{`Hi, I'm Paul`}</div>
        <div className={styles.introDesc}>
          I design and build dynamic, responsive web apps.
        </div>
        <motion.div
          className={`${styles.toContactBtn} btn`}
          onClick={() => scroller("contact")}
          variants={btnYellowVariants}
          whileHover="hover"
          whileTape="tap"
        >
          Let's chat
        </motion.div>
        <motion.div
          className={styles.scrollDeco}
          variants={scrollWrapperVariants}
          initial="initial"
          animate="animate"
        >
          <div className={`${styles.scrollText}`}>Scroll</div>
          <motion.div
            className={styles.scrollLine}
            animate={{
              width: ["0%", "100%", "0%"],
              background: oppositeGradient,
              transition: {
                delay: 2,
                repeat: Infinity,
                duration: 4,
              },
            }}
          ></motion.div>
          <motion.div
            className={styles.scrollLine}
            animate={{
              width: ["0%", "100%", "0%"],
              background: gradient,
              transition: {
                delay: 4,
                repeat: Infinity,
                duration: 4,
                type: "spring",
              },
            }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
