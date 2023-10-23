import Layout from "@/components/layout/Layout"
import Head from "next/head"
import Link from "next/link"

export default function NotFoundFour() {
  return (
    <Layout>
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      <main className="wrapper404">
        <h1 className="big404 color">404</h1>
        <p className="text404">page not found</p>
        <Link href="/" className="btn404 btn">
          Back to homepage
        </Link>
      </main>
    </Layout>
  )
}
