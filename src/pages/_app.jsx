import "@/styles/globals.css"
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{page_path: window.location.pathname,} );`,
        }}
      />
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
