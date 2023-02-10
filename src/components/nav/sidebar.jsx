import { navLinkVariants, sidebarVariants } from "@/animation/nav"
import { navList } from "@/data/data"
import styles from "@/styles/Nav.module.css"
import { motion } from "framer-motion"
import { fileSvg } from "public/assets/svgs"
import { scroller } from "./helpers"

export default function Sidebar({ toggle, setToggle }) {
  return (
    <motion.div
      initial={false}
      className={styles.sideBar}
      animate={toggle ? "open" : "closed"}
      variants={sidebarVariants}
    >
      {navList.map((item, index) => {
        return (
          <motion.div
            className={styles.sideItem}
            key={index}
            variants={navLinkVariants}
            animate={toggle ? "open" : "closed"}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              scroller(item)
              setToggle(false)
            }}
          >
            {item}
          </motion.div>
        )
      })}
      <motion.div
        className={styles.sideItem}
        key={4}
        variants={navLinkVariants}
        animate={toggle ? "open" : "closed"}
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          setToggle(!toggle)
          handleBurger()
        }}
      >
        <a
          href="https://rxresu.me/khoza/web-dev"
          target="_blank"
          rel="noreferrer"
          aria-label="Link to my cv"
        >
          my cv {fileSvg}
        </a>
      </motion.div>
    </motion.div>
  )
}
