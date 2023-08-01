import styles from "@/styles/Posts.module.css"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"

export function ImageLeft({ post, i }) {
  const { publishedAt, readingTime, title, headLine, slug, coverImage } = post

  return (
    <Link className={styles.postCard} key={i} href={`/blog/${slug}`} passHref>
      <div className={styles.postCard}>
        <div className={styles.section}>
          <Image
            src={coverImage}
            alt={title}
            width={800}
            height={800}
            priority
          />
        </div>
        <div className={styles.section}>
          <div className={styles.postDetails}>
            <div>{dayjs(publishedAt).format("D MMMM YYYY")}</div>
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
            <div>{readingTime}</div>
          </div>
          <div className={styles.postTitle + " color"}>{title}</div>
          <div className={styles.headLine}>{headLine}</div>
          <div className={styles.readMore}>
            <Link href={`/blog/${slug}`} passHref className="color">
              read more...
            </Link>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function ImageRight({ post, i }) {
  const { publishedAt, readingTime, title, headLine, slug, coverImage } = post
  return (
    <Link className={styles.postCard} key={i} href={`/blog/${slug}`} passHref>
      <div className={styles.postCard}>
        <div className={styles.section}>
          <div className={styles.postDetails}>
            <div>{dayjs(publishedAt).format("D MMMM YYYY")}</div>
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
            <div>{readingTime}</div>
          </div>
          <div className={styles.postTitle + " color"}>{title}</div>
          <div className={styles.headLine}>{headLine}</div>
          <div className={styles.readMore}>
            <Link href={`/blog/${slug}`} passHref className="color">
              read more...
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <Image
            src={coverImage}
            alt={title}
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </Link>
  )
}
