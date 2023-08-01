import { Montserrat } from "@next/font/google"
import { motion } from "framer-motion"
import Nav from "../nav/nav"
import Meta from "./Meta"

import { containerVariants } from "@/animation/routes"
import Footer from "./footer"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
export default function Layout({
  children,
  setAlert,
  aboutInView,
  projectsInView,
  contactInView,
}) {
  return (
    <div className={montserrat.className}>
      <Meta />
      <Nav
        setAlert={setAlert}
        aboutInView={aboutInView}
        projectsInView={projectsInView}
        contactInView={contactInView}
      />
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ overflow: "hidden" }}
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  )
}
