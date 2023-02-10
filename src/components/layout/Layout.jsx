import Meta from "./Meta"
import { Montserrat } from "@next/font/google"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
export default function Layout({ children }) {
  return (
    <div className={montserrat.className}>
      <Meta />
      <div className="container">{children}</div>
    </div>
  )
}
