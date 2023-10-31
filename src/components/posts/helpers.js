export const isLargerWindow = () => {
  if (typeof window !== "undefined") {
    console.log(window.innerWidth)
    if (window.innerWidth > 1024) return true
    else return false
  }
}
