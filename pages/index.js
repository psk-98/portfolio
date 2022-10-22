import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Intro from "../components/intro"
import Nav from "../components/nav"
import Projects from "../components/projects"

export default function Home() {
  return (
    <>
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
