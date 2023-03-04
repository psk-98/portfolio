import Layout from "@/components/layout/Layout"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2VNZVQ54PG"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2VNZVQ54PG',,{page_path: window.location.pathname,} );`,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
