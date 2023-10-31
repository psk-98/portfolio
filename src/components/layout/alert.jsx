import styles from "@/styles/Home.module.css"
import { AnimatePresence, motion } from "framer-motion"

export default function Alert({ isAlert }) {
  return (
    <AnimatePresence mode="wait">
      {isAlert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.alert}
        >
          email copied
        </motion.div>
      )}
    </AnimatePresence>
  )
}
