import styles from "@/styles/Posts.module.css"
import { useEffect, useState } from "react"
import { isLargerWindow } from "./helpers"

import { ImageLeft, ImageRight } from "./postCards"

export default function ShowPosts({ posts }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false)

  useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true)
  }, [])

  return (
    initialRenderComplete && (
      <div className={styles.postsWrapper}>
        {posts.map((post, i) => {
          return isLargerWindow() && i % 2 != 0 ? (
            <ImageRight post={post} i={i} />
          ) : (
            <ImageLeft post={post} i={i} />
          )
        })}
      </div>
    )
  )
}
