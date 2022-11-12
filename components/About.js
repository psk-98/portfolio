import { useState } from "react"
import { motion } from "framer-motion"
import { frontFlipVariants, backFlipVariants, viewBtn } from "./Animations"

const About = () => {
  const [flip, setFlip] = useState(false)
  const [copied, setCopied] = useState(false)

  return (
    <>
      <div className="skills-section" id="about">
        <div className="section-heading">
          <span>My Skills</span>
        </div>
        <div className="skills-list">
          <div className="skill-block">Javascript</div>
          <div className="skill-block">Python</div>
          <div className="skill-block">Django</div>
          <div className="skill-block">Django Rest</div>
          <div className="skill-block">Restful API</div>
          <div className="skill-block">React.js</div>
          <div className="skill-block">Next.js</div>
          <div className="skill-block">React Router</div>
          <div className="skill-block">HTML</div>
          <div className="skill-block">CSS</div>
          <div className="skill-block">Redux</div>
          <div className="skill-block">Redux Toolkit</div>
          <div className="skill-block">PostgreSQL</div>
          <div className="skill-block">Git</div>
          <div className="skill-block">Figma</div>
        </div>
        <div className="background">
          <div className="background-header">
            <span>Background</span>
          </div>
          <div className="background-desc">
            <p>
              I am final year student studying Intelligent Industrial Systems at
              Tshwane University of Technology.
            </p>
            <p>
              My web development journey started with the CS50's Web Programming
              with Python and JavaScript and ever since I've been working to be
              the best developer I can be. I am self motivated, able to work
              independtly or collabrativley.
            </p>

            <p>
              When I'm not working, I'm playing video games or playing around
              with some electronics.
            </p>
          </div>
          <div className="background-links">
            <div className="social-links">
              <a
                href="https://github.com/psk-98"
                target="_blank"
                rel="noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTape={{ scale: 0.8 }}
                >
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
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTape={{ scale: 0.8 }}
                >
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
              <div
                className="email-wrapper"
                onMouseEnter={() => setFlip(true)}
                onMouseLeave={() => setFlip(false)}
              >
                <motion.div style={{ width: "100%", height: "100%" }}>
                  <motion.div
                    style={{ position: "absolute" }}
                    animate={flip ? "hover" : "initial"}
                    variants={frontFlipVariants}
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
                  <motion.div
                    id="my email"
                    className="color email-background"
                    animate={flip ? "hover" : "initial"}
                    variants={backFlipVariants}
                  >
                    Sinci98@protonmail.com
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("sinci98@prtonmail.com")
                        setCopied(true)
                      }}
                    >
                      {copied ? "copied" : "copy"}
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <a
              href="../styles/media/Paul-Khoza-CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div
                id="my cv"
                className="cv-btn color"
                variants={viewBtn}
                whileHover="hover"
                whileTape={{ scale: 0.8 }}
              >
                my CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  viewBox="0 0 28 37"
                >
                  <path
                    id="Icon_awesome-file-download"
                    data-name="Icon awesome-file-download"
                    d="M15.75,9.563V0H1.688A1.683,1.683,0,0,0,0,1.688V34.313A1.683,1.683,0,0,0,1.688,36H25.313A1.683,1.683,0,0,0,27,34.313V11.25H17.438A1.692,1.692,0,0,1,15.75,9.563Zm5.375,14.861-6.78,6.729a1.2,1.2,0,0,1-1.69,0l-6.78-6.729A1.125,1.125,0,0,1,6.667,22.5H11.25V16.875a1.125,1.125,0,0,1,1.125-1.125h2.25a1.125,1.125,0,0,1,1.125,1.125V22.5h4.583A1.125,1.125,0,0,1,21.125,24.424ZM26.508,7.383,19.624.492A1.686,1.686,0,0,0,18.429,0H18V9h9V8.571A1.682,1.682,0,0,0,26.508,7.383Z"
                    transform="translate(0.5 0.5)"
                    stroke="#f2e529"
                    strokeWidth="1"
                  />
                </svg>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

function Icon() {
  return (
    <svg width="364" height="93.6" viewBox="0 0 364 93.6" class="css-1j8o68f">
      <defs id="SvgjsDefs1181"></defs>
      <g
        id="SvgjsG1182"
        featurekey="symbolFeature-0"
        transform="matrix(0.9359999999999999,0,0,0.9359999999999999,0,0)"
        fill="#fef4e8"
      >
        <defs xmlns="http://www.w3.org/2000/svg"></defs>
        <title xmlns="http://www.w3.org/2000/svg">Asset 832ldpi</title>
        <g xmlns="http://www.w3.org/2000/svg" data-name="Layer 2">
          <g data-name="Layer 1">
            <rect width="100" height="100"></rect>
            <path d="M87.77,55.58c2.49-5.2,5.07-10.56,5.07-20,0-11.62-5-20.93-14.34-26.92C64.64-.19,45,.69,33.6,6,18.37,13.09,15.15,25.36,14.77,27.06,13,32.6,15,38.8,16.35,41.94,6.61,52.74,7.06,56.37,7.21,57.56a4.22,4.22,0,0,0,1.84,3,17.28,17.28,0,0,0,5.58,2.52l-.08,3.25a14.39,14.39,0,0,0,2.26,8.1l.66,1.05c-.27,6.31,1.45,16.29,9.62,17.55,3.93.6,10.07-1.39,16.55-4.58C46,93.84,61,98,72.14,98a32.63,32.63,0,0,0,5.44-.41c7.49-1.28,8.81-5.29,8.93-7.57.06-1.17-.38-2.63-1.31-5.55C84,80.7,82.17,75,82.68,71.25A47.1,47.1,0,0,1,87.77,55.58ZM80.35,86a34.56,34.56,0,0,1,1.08,3.73c-.09,1.62-2.44,2.4-4.4,2.77-10,1.87-26.13-2.86-28.51-5.75h0c1.47-1,3.63-2.69,6-4.56a84.42,84.42,0,0,0,12.3-9.65,2.69,2.69,0,0,0-3.6-4c-2.67,2.21-7.66,6.32-11.91,9.69C42.43,84,32.37,88.72,27.86,88c-6-.92-5.27-12.88-5.26-13l.06-.85L21.1,71.73a9.31,9.31,0,0,1-1.46-5.25l.13-5.54.09-2.09a.64.64,0,0,0-.7-.67l-2.08.16a9.45,9.45,0,0,1-4.79-1.72c.25-1.38,2.43-5.28,7.84-11.28A5,5,0,0,0,21,40c-.88-2.08-2.77-7.37-1.39-11.51l.08-.31c.1-.46,2.44-11.28,16-17.6,10.19-4.74,27.68-5.54,40,2.32,8,5.08,12,12.69,12,22.63,0,8.29-2.12,12.7-4.57,17.8a52.17,52.17,0,0,0-5.55,17.2C77,75.46,78.92,81.56,80.35,86Z"></path>
            <path d="M66.47,25a1.86,1.86,0,0,0-2.63,2.64l6.71,6.7-6.71,6.71a1.87,1.87,0,0,0,0,2.63,1.87,1.87,0,0,0,2.63,0l8-8a2,2,0,0,0,0-2.74Z"></path>
            <path d="M44.6,25A1.92,1.92,0,0,0,42,25l-8,8a1.91,1.91,0,0,0-.57,1.37A2,2,0,0,0,34,35.74l8,8a1.86,1.86,0,0,0,2.64-2.63l-6.71-6.71,6.71-6.7A1.88,1.88,0,0,0,44.6,25Z"></path>
            <path d="M58.88,20.77a1.86,1.86,0,0,0-2.36,1.16L48.4,45.61A1.84,1.84,0,0,0,48.49,47a1.87,1.87,0,0,0,1.07.94,1.76,1.76,0,0,0,.6.1,1.85,1.85,0,0,0,1.76-1.26L60,23.13A1.86,1.86,0,0,0,58.88,20.77Z"></path>
          </g>
        </g>
      </g>
      <g
        id="SvgjsG1183"
        featurekey="nameFeature-0"
        transform="matrix(0.6513346476638936,0,0,0.6513346476638936,110.33572145270684,34.135257993956074)"
        fill="#ffffff"
      >
        <path d="M33.438 8.75 c-0.67711 -1.4584 -1.6147 -2.7605 -2.8126 -3.9063 c-1.25 -1.0938 -2.7344 -1.9531 -4.4531 -2.5781 c-1.875 -0.57289 -3.8541 -0.85938 -5.9375 -0.85938 l-14.609 0 l0 5.8594 l14.063 0 c2.3438 0 4.2969 0.57289 5.8594 1.7188 c1.4584 1.0938 2.1875 2.7604 2.1875 5 c0 2.0313 -0.70313 3.6719 -2.1094 4.9219 c-1.5104 1.1979 -3.4895 1.7969 -5.9374 1.7969 l-14.063 0 l0 17.891 l6.4844 0 l0 -11.953 l7.3438 0 c1.9271 0 3.8802 -0.28648 5.8594 -0.85938 c1.8229 -0.57289 3.3854 -1.3802 4.6875 -2.4218 c1.3541 -1.0416 2.4219 -2.3698 3.2031 -3.9844 c0.78125 -1.5625 1.1719 -3.3854 1.1719 -5.4688 c0 -1.9791 -0.3125 -3.6979 -0.9375 -5.1563 z M70.703 38.5937 l7.0313 0 l-13.594 -37.266 l-7.1094 0 l7.8906 22.266 z M41.9531 38.5937 l6.875 0 l8.125 -19.844 l-3.3594 -8.9063 z M109.14099999999999 1.328000000000003 l0 21.25 c0 3.4375 -0.83336 5.9896 -2.5 7.6563 c-0.88539 0.98961 -2.1094 1.7188 -3.6719 2.1875 l0 6.0938 c1.25 -0.15625 2.3438 -0.41664 3.2813 -0.78125 c1.9271 -0.67711 3.5938 -1.6927 5 -3.0469 c1.4063 -1.5104 2.4479 -3.2552 3.125 -5.2343 c0.78125 -2.0313 1.1719 -4.4271 1.1719 -7.1875 l0 -20.938 l-6.4063 0 z M90.938 1.4059999999999988 l0 21.25 c0 3.3334 0.83336 5.8855 2.5 7.6563 c0.98961 0.98961 2.2136 1.6927 3.672 2.1094 l0 6.1719 c-0.88539 -0.10414 -1.9791 -0.36453 -3.2813 -0.78117 c-1.9791 -0.72914 -3.6198 -1.7708 -4.9219 -3.1249 c-1.4584 -1.3541 -2.5261 -3.0729 -3.2032 -5.1563 c-0.72914 -1.875 -1.0938 -4.2709 -1.0938 -7.1875 l0 -20.938 l6.3281 0 z M127.0313 1.4059999999999988 l6.4063 0 l0 31.25 l19.531 0 l0 5.9375 l-25.938 0 l0 -37.188 z  M228.35975 38.5156 l-12.734 -16.25 l-4.4531 4.8438 l9.2969 11.406 l7.8906 0 z M219.68775 1.4059999999999988 l-17.734 18.359 l0 -18.359 l-6.4063 0 l0 37.109 l6.4063 0 l0 -8.75 l26.328 -28.359 l-8.5938 0 z M242.81275 16.875 l0 -15.547 l-6.5625 0 l0 37.344 l6.5625 0 l0 -21.797 z M260.70275 1.328000000000003 l0 15.547 l-11.406 0 l0 6.0938 l11.406 0 l0 15.703 l6.4844 0 l0 -37.344 l-6.4844 0 z M289.06275 32.6562 c-0.78125 -0.15625 -1.5105 -0.3907 -2.1876 -0.7032 c-1.4584 -0.67711 -2.7344 -1.6146 -3.8281 -2.8125 c-1.0416 -1.0938 -1.875 -2.4479 -2.5 -4.0625 c-0.57289 -1.6146 -0.85938 -3.2552 -0.85938 -4.9219 l0 -0.15625 l0 -0.23438 c0 -1.7188 0.28648 -3.3854 0.85938 -5 c0.67711 -1.6666 1.5105 -2.9948 2.5001 -3.9844 c1.0416 -1.1979 2.2916 -2.1094 3.75 -2.7344 c0.88539 -0.41664 1.6406 -0.67703 2.2656 -0.78117 l0 -5.8594 c-1.8229 0.26039 -3.4375 0.70313 -4.8438 1.3281 c-2.2916 0.98961 -4.2448 2.3177 -5.8594 3.9844 s-2.8906 3.6458 -3.8281 5.9374 s-1.4063 4.6875 -1.4063 7.1875 l0 0.15625 l0 0.23438 c0 2.5521 0.46875 4.948 1.4063 7.1876 c0.83336 2.2396 2.0834 4.1927 3.75 5.8594 c1.6666 1.7188 3.6198 3.0469 5.8594 3.9844 c1.4063 0.625 3.0469 1.0677 4.9219 1.3281 l0 -5.9375 z M310.31275 20 l0.000076294 -0.23438 c0 -2.5521 -0.46875 -4.948 -1.4063 -7.1876 c-0.9375 -2.2916 -2.2135 -4.2708 -3.8281 -5.9374 c-1.5625 -1.6666 -3.4896 -2.9688 -5.7813 -3.9063 c-1.3021 -0.625 -2.8906 -1.0677 -4.7656 -1.3281 l0 5.9375 l0.9375 0.3125 c0.46875 0.15625 0.83336 0.28648 1.0938 0.39063 c1.4584 0.67711 2.7344 1.6146 3.8281 2.8125 c1.0416 1.0938 1.875 2.4479 2.5 4.0625 c0.57289 1.6146 0.85938 3.2552 0.85938 4.9219 l0 0.15625 l0 0.23438 c0 1.7188 -0.28648 3.3854 -0.85938 5 c-0.67711 1.6666 -1.5105 2.9948 -2.5001 3.9844 c-1.0416 1.1979 -2.2916 2.1094 -3.75 2.7344 c-0.67711 0.3125 -1.3802 0.54688 -2.1094 0.70313 l0 5.9375 c1.5625 -0.20836 3.125 -0.65109 4.6875 -1.3282 c2.1354 -0.88539 4.0885 -2.2135 5.8594 -3.9844 c1.7188 -1.8229 2.9948 -3.802 3.8281 -5.9374 c0.9375 -2.2916 1.4063 -4.6875 1.4063 -7.1875 l0 -0.15625 z M334.45275 12.030999999999999 l-17.969 21.719 l0 4.8438 l30.469 0 l0 -5.7813 l-21.172 0 l16.953 -20.781 l-8.2813 0 z M317.18755 1.4059999999999988 l29.766 0 l0 5.7813 l-29.766 0 l0 -5.7813 z M382.42175 38.5937 l7.0313 0 l-13.594 -37.266 l-7.1094 0 l7.8906 22.266 z M353.67185 38.5937 l6.875 0 l8.125 -19.844 l-3.3594 -8.9063 z"></path>
      </g>
    </svg>
  )
}
