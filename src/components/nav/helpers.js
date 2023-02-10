export const scroller = (name) => {
  const element = document.getElementById(name)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    })
  }
}
