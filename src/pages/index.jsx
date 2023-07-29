import Alert from "@/components/layout/alert"
import Loader from "@/components/layout/loader"
import Nav from "@/components/nav/nav"
import About from "@/components/sections/about"
import Contact from "@/components/sections/contact"
import Intro from "@/components/sections/intro"
import Projects from "@/components/sections/projects"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function Home() {
  const [isAlert, setAlert] = useState(false)
  const [aboutRef, aboutInView] = useInView()
  const [projectsRef, projectsInView] = useInView()
  const [contactRef, contactInView] = useInView()
  const [loading, setLoading] = useState(true)

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
        </>
      )}
    </AnimatePresence>
  )
}
