import { useState } from "react"
import { motion, useAnimation } from "framer-motion"
import {
  line1Variants,
  line2Variants,
  line3Variants,
  navLinkVariants,
  sidebarVariants,
  ulVariants,
} from "./Animations"

const Nav = () => {
  const [toggle, setToggle] = useState(false)

  const line1Controls = useAnimation()
  const line2Controls = useAnimation()
  const line3Controls = useAnimation()

  const handleBurger = () => {
    setToggle(!toggle)

    if (!toggle) {
      line1Controls.start(line1Variants.open)
      line2Controls.start(line2Variants.open)
      line3Controls.start(line3Variants.open)
    } else {
      line1Controls.start(line1Variants.closed)
      line2Controls.start(line2Variants.closed)
      line3Controls.start(line3Variants.closed)
    }
  }

  const NavLink = ({ item, index }) => {
    return (
      <motion.li
        key={index}
        variants={navLinkVariants}
        className="nav-item"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          scroller(item)
          setToggle(!toggle)
          handleBurger()
        }}
      >
        {console.log(index)}
        {item}
      </motion.li>
    )
  }
  return (
    <>
      <motion.div
        className="navbar"
        initial={false}
        animate={toggle ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <motion.ul
          className="nav-list"
          variants={ulVariants}
          animate={toggle ? "open" : "closed"}
        >
          {list.map((item, index) => {
            return (
              <>
                <NavLink item={item} index={index.toString()} />
              </>
            )
          })}
        </motion.ul>
      </motion.div>
      <div className="nav-top">
        <div className="burger" onClick={() => handleBurger()}>
          <motion.div
            variants={line1Variants}
            className="line line-1"
            animate={line1Controls}
          ></motion.div>
          <motion.div
            className="line line-2"
            variants={line2Variants}
            animate={line2Controls}
          ></motion.div>
          <motion.div
            className="line line-3"
            variants={line3Variants}
            animate={line3Controls}
          ></motion.div>
        </div>
        <div className="logo color">Paul Khoza</div>
        <div></div>
      </div>
      <div className="nav-lg">
        <div className="logo color">Paul Khoza</div>
        <motion.div
          className="nav-link"
          whileHover={{ scale: 1.2 }}
          whileTape={{ scale: 0.8 }}
          onClick={() => scroller("about")}
        >
          About
        </motion.div>
        <motion.div
          className="nav-link"
          whileHover={{ scale: 1.2 }}
          whileTape={{ scale: 0.8 }}
          onClick={() => scroller("projects")}
        >
          Projects
        </motion.div>
        <motion.div
          className="nav-link"
          whileHover={{ scale: 1.2 }}
          whileTape={{ scale: 0.8 }}
          onClick={() => scroller("contact")}
        >
          contact
        </motion.div>
        <motion.div
          className="nav-link"
          whileHover={{ scale: 1.2 }}
          whileTape={{ scale: 0.8 }}
          onClick={() => scroller("my cv")}
        >
          My CV
        </motion.div>
        <div className="social-links">
          <a href="https://github.com/psk-98" target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.2 }} whileTape={{ scale: 0.8 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 28.928 31.038"
              >
                <path
                  id="Icon_feather-github"
                  data-name="Icon feather-github"
                  d="M12.987,27.18C5.854,29.32,5.854,23.613,3,22.9M22.975,31.46V25.938a4.808,4.808,0,0,0-1.341-3.724c4.48-.5,9.188-2.2,9.188-9.987a7.761,7.761,0,0,0-2.139-5.349,7.234,7.234,0,0,0-.129-5.38S26.87,1,22.975,3.61a19.09,19.09,0,0,0-9.987,0C9.092,1,7.409,1.5,7.409,1.5A7.234,7.234,0,0,0,7.28,6.877,7.762,7.762,0,0,0,5.14,12.27c0,7.733,4.708,9.431,9.188,9.987a4.808,4.808,0,0,0-1.341,3.681V31.46"
                  transform="translate(-2.394 -0.922)"
                  fill="none"
                  stroke="#f2e529"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          </a>
          <a
            href="https://www.linkedin.com/in/paul-khoza-9956b020a"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTape={{ scale: 0.8 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 31.001 31"
              >
                <path
                  id="Icon_awesome-linkedin-in"
                  data-name="Icon awesome-linkedin-in"
                  d="M6.715,30H.5V9.971h6.22ZM3.6,7.239A3.619,3.619,0,1,1,7.2,3.6,3.632,3.632,0,0,1,3.6,7.239ZM29.994,30H23.788V20.25c0-2.324-.047-5.3-3.234-5.3-3.234,0-3.729,2.525-3.729,5.136V30H10.611V9.971h5.965V12.7h.087a6.536,6.536,0,0,1,5.885-3.234C28.844,9.469,30,13.614,30,19V30Z"
                  transform="translate(0.5 0.499)"
                  fill="none"
                  stroke="#f2e529"
                  strokeWidth="1"
                />
              </svg>
            </motion.div>
          </a>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTape={{ scale: 0.8 }}
            onClick={() => scroller("my email")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 0 38.5 31"
            >
              <path
                id="Icon_material-email"
                data-name="Icon material-email"
                d="M36.75,6h-30A3.745,3.745,0,0,0,3.019,9.75L3,32.25A3.761,3.761,0,0,0,6.75,36h30a3.761,3.761,0,0,0,3.75-3.75V9.75A3.761,3.761,0,0,0,36.75,6Zm0,7.5-15,9.375L6.75,13.5V9.75l15,9.375,15-9.375Z"
                transform="translate(-2.5 -5.5)"
                fill="none"
                stroke="#f2e529"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Nav
///

export const scroller = (name) => {
  const element = document.getElementById(name)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    })
  }
}

const list = ["about", "projects", "contact", "my cv"]
