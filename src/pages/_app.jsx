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
      {/* {solution to svg gradient} */}
      <svg
        style={{ width: 0, height: 0, position: "absolute" }}
        aria-hidden="true"
        focusable="false"
      >
        <linearGradient id="my-gradient" x2={1} y2={1}>
          <stop offset="0%" stopColor="#ff0" />
          <stop offset="41%" stopColor="#ffb800" />
          <stop offset="100%" stopColor="#ff8a00 " />
        </linearGradient>
      </svg>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
