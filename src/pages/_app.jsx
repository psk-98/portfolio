import Layout from "@/components/layout/Layout"
import "@/styles/globals.css"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive">
        {`
          (function(m, e, t, r, i, k, a) {
            m[i] = m[i] || function() {
              (m[i].a = m[i].a || []).push(arguments);
            };
            m[i].l = 1 * new Date();
            k = e.createElement(t),
            a = e.getElementsByTagName(t)[0],
            k.async = 1,
            k.src = r,
            a.parentNode.insertBefore(k, a)
          })
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(92683107, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `}
      </Script>
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/92683107"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
