import { motion } from "framer-motion"
import { scroller } from "./Nav"
import { viewBtn } from "./Animations"

const Intro = () => {
  return (
    <>
      <div className="home-section" id="intro">
        <div className="intro">
          <div className="intro-name color">Hi, I'm Paul</div>
          <div className="intro-desc">
            I design and build dynamic, responsive websites
          </div>
          <motion.div
            className="to-contact-btn color"
            onClick={() => scroller("contact")}
            variants={viewBtn}
            whileHover="hover"
            whileTape="tap"
          >
            Contact me
          </motion.div>
        </div>
        <div className="scroll-deco">
          <div className="scroll-text color">Scroll</div>
          <motion.div
            className="scroll-line"
            animate={{
              width: 0,
              transition: {
                yoyo: Infinity,
                duration: 2,
              },
            }}
          ></motion.div>
          <motion.div
            className="scroll-line"
            animate={{
              width: 0,
              transition: {
                yoyo: Infinity,
                duration: 2,
                delay: 2,
              },
            }}
          ></motion.div>
        </div>
      </div>
    </>
  )
}

export default Intro
