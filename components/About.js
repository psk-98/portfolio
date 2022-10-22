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
          <div className="skill-block">React</div>
          <div className="skill-block">React Router</div>
          <div className="skill-block">HTML</div>
          <div className="skill-block">CSS</div>
          <div className="skill-block">Redux</div>
          <div className="skill-block">Redux Persist</div>
          <div className="skill-block">PostgreSQL</div>
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
              the best web developer I can be. I am self motivated, able to work
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
