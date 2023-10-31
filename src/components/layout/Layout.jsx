import { Montserrat } from "@next/font/google"
import { motion } from "framer-motion"
import Nav from "../nav/nav"
import Meta from "./Meta"

import { containerVariants } from "@/animation/routes"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"
import Footer from "./footer"
import {
  pontanoSans,
  setLesserUsedFontsCssVariables,
  signikaNegative,
  titilliumWeb,
} from "utils/fonts"

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
  const router = useRouter()
  return (
    <>
      <div className={pontanoSans.className}>
        <style jsx global>
          {`
            :root {
              --accent-font: ${signikaNegative.style.fontFamily};
              --header-font: ${titilliumWeb.style.fontFamily};
            }
          `}
        </style>
        <NextSeo
          twitter={{
            handle: "@paul_sinci",
            site: "@paul_sinci",
            cardType: "summary_large_image",
          }}
        />
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
    </>
  )
}
