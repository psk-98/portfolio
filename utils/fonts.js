import {
  Titillium_Web,
  Signika_Negative,
  Pontano_Sans,
} from "@next/font/google"

export const titilliumWeb = Titillium_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
})
export const signikaNegative = Signika_Negative({
  weight: "500",
  subsets: ["latin"],
})
export const pontanoSans = Pontano_Sans({
  weight: ["400"],
  subsets: ["latin"],
})

// export const setLesserUsedFontsCssVariables = {`:root{
//     --accent-font: ${signikaNegative.style.fontFamily}
//     --header-font: ${titilliumWeb.style.fontFamily}

// }`}
