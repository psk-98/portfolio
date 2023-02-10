import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"
import { appearVariants } from "@/animation/sections"
import { useInView } from "react-intersection-observer"
import { gitLogo, liveLogo } from "/public/assets/svgs"
import { footprints, weather } from "@/data/data"

export default function Projects({ projectsRef }) {
  return (
    <motion.div
      className={styles.projectsSection}
      id="projects"
      variants={appearVariants}
      ref={projectsRef}
      whileInView="visible"
      initial="hidden"
    >
      <div className={styles.sectionHeader}>Projects</div>
      <div className={styles.projectsDisplay}>
        <div
          className={styles.projectDisplay}
          style={{
            backgroundImage: `url(${footprints.img}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            className={styles.projectImg}
            style={{
              backgroundImage: `url(${footprints.img}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <div className={styles.overlay}></div>
          </div>
          <div className={styles.projectContent}>
            <div className={`${styles.projectHeader} ${styles.right}`}>
              {footprints.name}
            </div>
            <div className={styles.projectDesc}>{footprints.desc}</div>
            <div className={styles.skillList}>
              {footprints.skills.map((skill, index) => {
                return (
                  <div className={styles.skillBlock} key={index}>
                    {skill}
                  </div>
                )
              })}
            </div>
            <div className={styles.projectLinks}>
              <a
                className={styles.projectLink}
                href={footprints.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                {liveLogo}
              </a>
              <a
                className={styles.projectLink}
                href={footprints.gitLink}
                target="_blank"
                rel="noreferrer"
              >
                {gitLogo}
              </a>
            </div>
          </div>
        </div>
        <motion.div
          className={styles.projectDisplay}
          whileInView="visible"
          initial="hidden"
          variants={appearVariants}
          style={{
            backgroundImage: `url(${weather.img}) `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className={styles.projectContent}>
            <div className={styles.projectHeader}>{weather.name}</div>
            <div className={styles.projectDesc}>{weather.desc}</div>
            <div className={styles.skillList}>
              {weather.skills.map((skill, index) => {
                return (
                  <div className={styles.skillBlock} key={index}>
                    {skill}
                  </div>
                )
              })}
            </div>
            <div className={styles.projectLinks}>
              <a
                className={styles.projectLink}
                href={weather.liveLink}
                target="_blank"
                rel="noreferrer"
              >
                {liveLogo}
              </a>
              <a
                className={styles.projectLink}
                href={weather.gitLink}
                target="_blank"
                rel="noreferrer"
              >
                {gitLogo}
              </a>
            </div>
          </div>
          <div
            className={styles.projectImg}
            style={{
              backgroundImage: `url(${weather.img}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          >
            <div className={styles.overlay}></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
