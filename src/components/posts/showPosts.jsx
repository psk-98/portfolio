import styles from "@/styles/Posts.module.css"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { isLargerWindow } from "./helpers"

export default function ShowPosts({ posts }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false)

  const [isLargerWindowState, setWindow] = useState(isLargerWindow())

  useEffect(() => {
    // Updating a state causes a re-render
    setInitialRenderComplete(true)
  }, [])

  return (
    initialRenderComplete &&
    posts.map((post, i) => {
      return isLargerWindow() && i % 2 != 0 ? (
        <Link
          className={styles.postCard}
          key={i}
          href={`/blog/${post.slug}`}
          passHref
        >
          <div className={styles.postCard}>
            <div className={styles.section}>
              <div className={styles.postDetails}>
                <div>{dayjs(post.publishedAt).format("D MMM YYYY")}</div>
                <div>
                  <svg
                    width={3}
                    height={3}
                    viewBox="0 0 2 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={1} cy={1} r={1} fill="#eee" />
                  </svg>
                </div>
                <div>{post.readingTime}</div>
              </div>
              <div className={styles.postTitle}>{post.title}</div>
              <div className={styles.headLine}>{post.headLine}</div>
              <Link
                className={styles.readMore}
                href={`/blog/${post.slug}`}
                passHref
              >
                <div>read more...</div>
              </Link>
            </div>
            <div className={styles.section}>
              <Image
                src={
                  "https://res.cloudinary.com/psk-98/image/upload/v1680003249/Portfolio/footprints_mvfleh.png"
                }
                alt={post.title}
                width={800}
                height={800}
              />
            </div>
          </div>
        </Link>
      ) : (
        <Link
          className={styles.postCard}
          key={i}
          href={`/blog/${post.slug}`}
          passHref
        >
          <div className={styles.postCard}>
            <div className={styles.section}>
              <Image
                src={
                  "https://res.cloudinary.com/psk-98/image/upload/v1680003249/Portfolio/footprints_mvfleh.png"
                }
                alt={post.title}
                width={800}
                height={800}
              />
            </div>
            <div className={styles.section}>
              <div className={styles.postDetails}>
                <div>{dayjs(post.publishedAt).format("D MMMM YYYY")}</div>
                <div>
                  <svg
                    width={3}
                    height={3}
                    viewBox="0 0 2 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={1} cy={1} r={1} fill="#eee" />
                  </svg>
                </div>
                <div>{post.readingTime}</div>
              </div>
              <div className={styles.postTitle}>{post.title}</div>
              <div className={styles.headLine}>{post.headLine}</div>
              <Link
                className={styles.readMore}
                href={`/blog/${post.slug}`}
                passHref
              >
                <div>read more...</div>
              </Link>
            </div>
          </div>
        </Link>
      )
    })
  )
}
