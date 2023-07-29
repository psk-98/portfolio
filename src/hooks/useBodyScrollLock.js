import { useEffect, useState } from "react"

const useBodyScrollLock = () => {
  const bodyStyle = document.body.style
  const [isLocked, setLock] = useState(bodyStyle.overflowY === "hidden")

  console.log(isLocked)
  const toggle = () => setLock(!isLocked)

  useEffect(() => {
    bodyStyle.overflow = isLocked ? "hidden" : "scroll"
  }, [isLocked, bodyStyle])

  return [isLocked, toggle]
}

export default useBodyScrollLock
