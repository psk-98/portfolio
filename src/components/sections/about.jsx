import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"
import { appearVariants } from "@/animation/sections"
import { fileSvg } from "public/assets/svgs"
import { skills } from "@/data/data"

export default function About({ aboutRef }) {
  return (
    <motion.div
      className={styles.skillsSection}
      id="about"
      variants={appearVariants}
      ref={aboutRef}
      whileInView="visible"
      initial="hidden"
    >
      <motion.div variants={appearVariants} className={styles.sectionHeader}>
        About me
      </motion.div>
      <motion.div variants={appearVariants} className={styles.background}>
        <p>
          I am final year student studying Intelligent Industrial Systems at
          Tshwane University of Technology.
        </p>
        <p>
          {`My web development journey started with the CS50's Web Programming
            with Python and JavaScript course and ever since I've been working to be
            the best developer I can be. I am self motivated, able to work
            independtly or collabrativley.`}
        </p>

        <p>
          {`When I'm not working, I'm playing video games or playing around with
            some electronics.`}
        </p>
        <p>Here are some technologies I use:</p>
        <motion.div
          className={styles.skillList}
          variants={appearVariants}
          whileInView="visible"
          initial="hidden"
        >
          {skills.map((skill, i) => {
            if (i % 2 === 0)
              return (
                <motion.div
                  className={styles.skillBlock}
                  variants={appearVariants}
                  whileInView="visible"
                  initial="hidden"
                  key={i}
                >
                  {skill}
                </motion.div>
              )
            else
              return (
                <div className={styles.skillBlock} key={i}>
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
              className={`${styles.cvBtn} btn`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ boxShadow: "none", scale: 1.05 }}
              whileTape={{ scale: 0.9 }}
              transition={{
                y: {
                  type: "linear",
                  delay: 0.5,
                  duration: 1,
                },
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
            >
              my CV
              {fileSvg}
            </motion.div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
