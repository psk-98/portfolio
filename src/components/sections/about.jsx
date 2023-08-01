import { appearVariants, btnYellowVariants } from "@/animation/sections"
import { backgroundPs, skills } from "@/data/data"
import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"

export default function About({ aboutRef }) {
  return (
    <motion.div
      className={styles.skillsSection}
      id="about"
      variants={appearVariants}
      ref={aboutRef}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <motion.div variants={appearVariants} className={styles.sectionHeader}>
        About me
      </motion.div>
      <motion.div variants={appearVariants} className={styles.background}>
        <p>{backgroundPs[0]}</p>
        <p>{backgroundPs[1]}</p>
        <p>Here are some technologies I use:</p>
        <motion.div
          className={styles.skillList}
          variants={appearVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
        >
          {skills.map((skill, i) => {
            if (i % 2 === 0)
              return (
                <motion.div
                  className={styles.skillBlock + " color"}
                  variants={appearVariants}
                  whileInView="visible"
                  initial="hidden"
                  key={i}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              )
            else
              return (
                <div className={styles.skillBlock + " color"} key={i}>
                  {skill}
                </div>
              )
          })}
        </motion.div>
        <div className={styles.backgroundLinks}>
          <a
            href="https://rxresu.me/khoza/web-dev"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              id="my cv"
              className={`${styles.cvBtn} btn color`}
              variants={btnYellowVariants}
              whileHover="hover"
              whileTape="tap"
              // initial={{
              //   opacity: 0,
              //   y: 20,
              // }}
              // whileInView={{ opacity: 1, y: 0 }}
              // whileHover={{ boxShadow: "none", scale: 1.05 }}
              // whileTape={{ scale: 0.9 }}
              // transition={{
              //   y: {
              //     type: "linear",
              //     delay: 0.5,
              //     duration: 1,
              //   },
              //   type: "spring",
              //   stiffness: 400,
              //   damping: 10,
              // }}
              viewport={{ once: true }}
            >
              my CV
            </motion.div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
