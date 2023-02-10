import {
  line1Variants,
  line2Variants,
  line3Variants,
  navLinkVariants,
  navVariants,
} from "@/animation/nav"
import styles from "@/styles/Nav.module.css"
import { motion } from "framer-motion"
import {
  emailSvg,
  fileSvg,
  gitLogo,
  linkedLogo,
  logo,
} from "public/assets/svgs"
import { useEffect, useState } from "react"
import { scroller } from "./helpers"

export default function Top({
  setAlert,
  projectsInView,
  aboutInView,
  contactInView,
  toggle,
  setToggle,
}) {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false)
      } else {
        // if scroll up show the navbar
        setShow(true)
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <motion.div
      className={styles.navTop}
      animate={show || toggle ? "visible" : "hidden"}
      variants={navVariants}
    >
      <div className={styles.logo}>{logo}</div>
      <div className={styles.navLinks}>
        <motion.div
          className={styles.navLink}
          variants={navLinkVariants}
          animate={projectsInView ? "active" : "open"}
          whileHover="hover"
          whileTap="tap"
          onClick={() => scroller("projects")}
        >
          projects
        </motion.div>
        <motion.div
          className={styles.navLink}
          variants={navLinkVariants}
          animate={aboutInView ? "active" : "open"}
          whileHover="hover"
          whileTap="tap"
          onClick={() => scroller("about")}
        >
          About
        </motion.div>
        <motion.div
          className={styles.navLink}
          variants={navLinkVariants}
          animate={contactInView ? "active" : "open"}
          whileHover="hover"
          whileTap="tap"
          onClick={() => scroller("contact")}
        >
          contact
        </motion.div>
      </div>
      <div className={styles.socialLinks}>
        <a
          href="https://rxresu.me/khoza/web-dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to my resume"
        >
          {fileSvg}
        </a>
        <a
          href="https://github.com/psk-98"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to github page"
        >
          {gitLogo}
        </a>
        <a
          href="https://www.linkedin.com/in/paul-khoza-9956b020a"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to linkedin"
        >
          {linkedLogo}
        </a>
        <div onClick={() => setAlert(true)}>{emailSvg}</div>
      </div>
      <div className={styles.burger} onClick={() => setToggle(!toggle)}>
        <motion.div
          variants={line1Variants}
          className={styles.line}
          animate={toggle ? "open" : "closed"}
        ></motion.div>
        <motion.div
          className={styles.line}
          variants={line2Variants}
          animate={toggle ? "open" : "closed"}
        ></motion.div>
        <motion.div
          className={styles.line3}
          variants={line3Variants}
          animate={toggle ? "open" : "closed"}
        ></motion.div>
      </div>
    </motion.div>
  )
}
