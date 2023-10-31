import { navLinkVariants, sidebarVariants } from "@/animation/nav"
import { navList } from "@/data/data"
import styles from "@/styles/Nav.module.css"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { fileSvg } from "public/assets/svgs"
import { scroller } from "./helpers"

export default function Sidebar({ toggle, setToggle }) {
  const router = useRouter()

  return (
    <motion.div
      initial={false}
      className={styles.sideBar}
      animate={toggle ? "open" : "closed"}
      variants={sidebarVariants}
    >
      <motion.div
        className={styles.sideItem}
        key={1}
        variants={navLinkVariants}
        onClick={() => {
          setToggle(!toggle)
        }}
      >
        <Link href={"/blog"}>blog</Link>
      </motion.div>
      {!router.pathname.includes("/blog") ? (
        <>
          {navList.map((item, index) => {
            return (
              <motion.div
                className={styles.sideItem}
                key={index}
                variants={navLinkVariants}
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
            // animate={toggle ? "open" : "closed"}
            // whileHover="hover"
            // whileTap="tap"
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            <a
              href="https://rxresu.me/khoza/software"
              target="_blank"
              rel="noreferrer"
              aria-label="Link to my cv"
            >
              my cv {fileSvg}
            </a>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className={styles.sideItem}
            key={2}
            variants={navLinkVariants}
            animate={toggle ? "open" : "closed"}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            <Link href={"/"}>portfolio</Link>
          </motion.div>

          <motion.div
            className={styles.sideItem}
            key={3}
            variants={navLinkVariants}
            animate={toggle ? "open" : "closed"}
            whileHover="hover"
            whileTap="tap"
          ></motion.div>
          <motion.div
            className={styles.sideItem}
            key={4}
            variants={navLinkVariants}
            animate={toggle ? "open" : "closed"}
            whileHover="hover"
            whileTap="tap"
          ></motion.div>
          <motion.div
            className={styles.sideItem}
            key={4}
            variants={navLinkVariants}
            animate={toggle ? "open" : "closed"}
            whileHover="hover"
            whileTap="tap"
          ></motion.div>
        </>
      )}
    </motion.div>
  )
}
