import { useEffect, useState } from "react"
import Nav from "@/components/nav/nav"
import Intro from "@/components/sections/intro"
import Projects from "@/components/sections/projects"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Footer from "@/components/layout/footer"
import Alert from "@/components/layout/alert"
import Loader from "@/components/layout/loader"
import { AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [isAlert, setAlert] = useState(false)
  const [loading, setLoading] = useState(true)
  const [aboutRef, aboutInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [contactRef, contactInView] = useInView()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
    }, 4500)
  }, [isAlert])

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Alert isAlert={isAlert} />
          <Nav
            setAlert={setAlert}
            aboutInView={aboutInView}
            projectsInView={projectsInView}
            contactInView={contactInView}
          />
          <Intro />
          <Projects projectsRef={projectsRef} />
          <About aboutRef={aboutRef} />
          <Contact setAlert={setAlert} contactRef={contactRef} />
          <Footer />
        </>
      )}
    </AnimatePresence>
  )
}
