import { appearVariants, btnYellowVariants } from "@/animation/sections"
import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"
import { emailSvg, gitLogo, linkedLogo } from "public/assets/svgs"

export default function Contact({ setAlert, contactRef }) {
  return (
    <motion.div
      className={styles.contactSection}
      id="contact"
      variants={appearVariants}
      ref={contactRef}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true }}
    >
      <div className={styles.sectionHeader}>{"let's chat"}</div>

      <div className={styles.socialLinks}>
        <motion.div whileHover={{ scale: 1.2 }} whileTape={{ scale: 0.8 }}>
          <a href="https://github.com/psk-98" target="_blank" rel="noreferrer">
            {gitLogo}
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.2 }} whileTape={{ scale: 0.8 }}>
          <a
            href="https://www.linkedin.com/in/paul-khoza-9956b020a"
            target="_blank"
            rel="noreferrer"
          >
            {linkedLogo}
          </a>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTape={{ scale: 0.8 }}
          onClick={() => {
            navigator.clipboard.writeText("sinci98@protonmail.com")
            setAlert(true)
          }}
        >
          {emailSvg}
        </motion.div>
      </div>

      <form name="contact" action="success" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Paul Khoza*"
          />
        </p>
        <p>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="sinci98@protonmail.com*"
          />
        </p>
        <p>
          <textarea
            id="message"
            name="message"
            required
            placeholder="message*"
          ></textarea>
        </p>
        <p>
          <motion.button
            className="btn"
            type="submit"
            // whileHover={{
            //   scale: 1.05,
            //   boxShadow: "none",
            // }}
            // whileTap={{ scale: 0.8, boxShadow: "none" }}
            variants={btnYellowVariants}
            whileHover="hover"
            whileTape="tap"
          >
            Send
          </motion.button>
        </p>
      </form>
    </motion.div>
  )
}
