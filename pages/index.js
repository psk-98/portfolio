import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Intro from "../components/Intro"
import Nav from "../components/Nav"
import Projects from "../components/Projects"

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
