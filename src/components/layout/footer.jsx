import { appearVariants } from "@/animation/sections"
import styles from "@/styles/Footer.module.css"
import { motion } from "framer-motion"
import { gitLogo, linkedLogo } from "public/assets/svgs"

export default function Footer() {
  return (
    <motion.div
      className={styles.footer}
      variants={appearVariants}
      initial="hidden"
      whileInView="visible"
    >
      <div className={styles.socialLinks}>
        <a
          className={styles.socialLink}
          href="https://github.com/psk-98"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to my github page"
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTape={{ scale: 0.8 }}>
            {gitLogo}
          </motion.div>
        </a>
        <a
          className={styles.socialLink}
          href="https://www.linkedin.com/in/paul-khoza"
          target="_blank"
          rel="noreferrer"
          aria-label="Goes to my linkedin"
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTape={{ scale: 0.8 }}>
            {linkedLogo}
          </motion.div>
        </a>
      </div>
      <a
        className={styles.copyrightSec}
        href="https://github.com/psk-98/portfolio/tree/nextjs"
        target="_blank"
        rel="noreferrer"
        aria-label="Link to portfolio code"
      >
        &copy; {new Date().getFullYear()} Design and Built by Paul Khoza
      </a>
    </motion.div>
  )
}
