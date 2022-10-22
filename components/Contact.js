import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="section-heading">Contact</div>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Paul Khoza*"
          />
        </p>
        <p>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="sinci98@protonmail.com*"
          />
        </p>
        <p>
          <textarea
            id="message"
            name="message"
            required
            placeholder="message*"
          ></textarea>
        </p>
        <p>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "none" }}
            whileTap={{ scale: 0.8, boxShadow: "none" }}
          >
            Send
          </motion.button>
        </p>
      </form>
    </div>
  )
}

export default Contact
