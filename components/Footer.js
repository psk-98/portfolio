import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-links">
        <a
          className="social-link"
          href="https://github.com/psk-98"
          target="_blank"
          rel="noreferrer"
        >
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
          className="social-link"
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
      </div>
      <div className="copyright-sec">© 2022 Design and Built by Paul Khoza</div>
    </div>
  )
}

export default Footer
