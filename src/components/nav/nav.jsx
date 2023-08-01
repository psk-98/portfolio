import useScrollLock from "@/hooks/useScrollLock"
import { useEffect, useState } from "react"
import Sidebar from "./sidebar"
import Top from "./top"

export default function Nav({
  setAlert,
  projectsInView,
  aboutInView,
  contactInView,
}) {
  const [toggle, setToggle] = useState(false)
  const [lock, unlock] = useScrollLock()

  useEffect(() => {
    toggle ? lock() : unlock()
  }, [toggle, setToggle])

  return (
    <>
      <Top
        setAlert={setAlert}
        aboutInView={aboutInView}
        projectsInView={projectsInView}
        contactInView={contactInView}
        toggle={toggle}
        setToggle={setToggle}
      />
      <Sidebar
        setToggle={setToggle}
        toggle={toggle}
        aboutInView={aboutInView}
        projectsInView={projectsInView}
        contactInView={contactInView}
      />
    </>
  )
}
