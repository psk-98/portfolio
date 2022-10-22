import Layout from "../components/Layout"
import "../styles/globals.css"
import "../styles/Nav.css"
import "../styles/Home.css"
import "../styles/Footer.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
