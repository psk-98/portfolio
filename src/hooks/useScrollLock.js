export default function useScrollLock() {
  const lock = () => {
    document.body.style.overflowY = "hidden"
  }
  const unlock = () => {
    document.body.style.overflowY = "scroll"
  }

  return [lock, unlock]
}
