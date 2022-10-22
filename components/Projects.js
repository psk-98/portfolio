import { motion } from "framer-motion"
import { viewBtn } from "./Animations"

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="section-heading">
        <span>Projects</span>
      </div>
      <div className="projects-display">
        <div className="project-display">
          <div className="project-content">
            <div className="project-heading">Footprints</div>
            <div className="skills-list">
              <div className="skill-block">HTML</div>
              <div className="skill-block">CSS</div>
              <div className="skill-block">JavaScript</div>
              <div className="skill-block">React</div>
              <div className="skill-block">Redux</div>
              <div className="skill-block">Redux persist</div>
              <div className="skill-block">Django</div>
              <div className="skill-block">Django Rest</div>
              <div className="skill-block">Knox</div>
              <div className="skill-block">Stripe</div>
              <div className="skill-block">PostgreSQL</div>
            </div>
            <div className="project-desc">
              <p>
                This is an ongoing project of a ecommerce web application, with
                most modern ecommerce functionality such viewing products,
                sorting and filtering by date, price etc, add to and view cart,
                checkout, test stripe payment and authenication. I like sneakers
                so I decided to make it a shoe store. The application is
                ongoing, so I'm working on adding a user page with all their
                details and order, better error handling and using hooks so I
                can add better animations. Stay tuned for updates. (Side note
                the backend is hosted on a free heroku server so the first
                request to the backend e.g viewing shoes might take a few
                seconds)
              </p>
            </div>
            <a
              className="project-link"
              href="https://footprintz.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div variants={viewBtn} whileHover="hover" whileTap="tap">
                Demo
              </motion.div>
            </a>
          </div>
          <div className="project-img">
            <motion.img
              src="footprints.webp"
              alt="footprints project"
              whileHover={{ scale: 1.05, boxShadow: "none" }}
            />
          </div>
        </div>
        <div className="project-display">
          <div className="project-content">
            <div className="project-heading">
              <span>Weather</span>
            </div>
            <div className="skills-list">
              <div className="skill-block">HTML</div>
              <div className="skill-block">CSS</div>
              <div className="skill-block">JavaScript</div>
              <div className="skill-block">Open weather API</div>
              <div className="skill-block">Bootstrap</div>
              <div className="skill-block">Django</div>
              <div className="skill-block">PostgreSQL</div>
            </div>
            <div className="project-desc">
              <p>
                This is the capstone project I did for the CS50 course. I choose
                a weather website as it satisfied the requirement for the final
                project and I wanted to improve my skills working with dynamic
                single page web applications and APIs. On the website you can
                search for a city and see current weather and a forecast, switch
                between units and switch between dark mode and light mode.
              </p>
              <p>
                (Side note, this is hosted on a free heroku server so it will
                take a seconds to spin up.)
              </p>
            </div>
            <a
              className="project-link"
              href="https://paulkhoza.herokuapp.com/weather/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div variants={viewBtn} whileHover="hover" whileTap="tap">
                Demo
              </motion.div>
            </a>
          </div>
          <div className="project-img">
            <motion.img
              src="weather.png"
              alt="weather project"
              whileHover={{ scale: 1.05, boxShadow: "none" }}
            />
          </div>
        </div>
        <div className="project-display">
          <div className="project-content">
            <div className="project-heading">
              <span>Network</span>
            </div>
            <div className="skills-list">
              <div className="skill-block">HTML</div>
              <div className="skill-block">CSS</div>
              <div className="skill-block">JavaScript</div>
              <div className="skill-block">React</div>
              <div className="skill-block">Redux</div>
              <div className="skill-block">Moment.js</div>
              <div className="skill-block">Django</div>
              <div className="skill-block">Django Rest</div>
              <div className="skill-block">Knox</div>
              <div className="skill-block">PostgreSQL</div>
            </div>
            <div className="project-desc">
              <p>
                This was my first react project, which is a social media site
                where users post, like and view posts. It is based on one of the
                projects from the CS50 web programming course, the challenge for
                was to recreate the project using using an API instead of using
                Django for front and backend. This meant using React, Django
                rest and Knox for authenication.
              </p>
            </div>
            <a
              className="project-link"
              href="https://paulkhoza.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div variants={viewBtn} whileHover="hover" whileTap="tap">
                Demo
              </motion.div>
            </a>
          </div>
          <div className="project-img">
            <motion.img
              src="network.png"
              alt="network project"
              whileHover={{ scale: 1.05, boxShadow: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
