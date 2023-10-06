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
      <Link href={"/blog"}>
        <motion.div
          className={styles.sideItem}
          key={1}
          variants={navLinkVariants}
          animate={toggle ? "open" : "closed"}
          whileHover="hover"
          whileTap="tap"
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          blog
        </motion.div>
      </Link>
      {!router.pathname.includes("/blog") ? (
        <>
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
          <a
            href="https://rxresu.me/khoza/software"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to my cv"
          >
            <motion.div
              className={styles.sideItem}
              key={4}
              variants={navLinkVariants}
              animate={toggle ? "open" : "closed"}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setToggle(!toggle)
              }}
            >
              my cv {fileSvg}
            </motion.div>
          </a>
        </>
      ) : (
        <>
          <Link href={"/"}>
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
              portfolio
            </motion.div>
          </Link>
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
