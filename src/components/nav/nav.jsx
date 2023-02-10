import { useState } from "react"
import Sidebar from "./sidebar"
import Top from "./top"

export default function Nav({
  setAlert,
  projectsInView,
  aboutInView,
  contactInView,
}) {
  const [toggle, setToggle] = useState(false)

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
