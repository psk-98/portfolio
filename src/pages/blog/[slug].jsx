import Layout from "@/components/layout/Layout"
import PostLayout from "@/components/layout/postLayout"
import {
  Anchors,
  CodeBlocks,
  Heading,
  ListItem,
  Paragraphs,
} from "@/components/post/simplePostComponents"
import styles from "@/styles/Post.module.css"
import dayjs from "dayjs"
import fs from "fs"
import matter from "gray-matter"
import "highlight.js/styles/atom-one-dark.css"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import { NextSeo } from "next-seo"
import Image from "next/image"
import { useRouter } from "next/router"
import path from "path"
import readingTime from "reading-time"
import rehypeAutolinkHeadings from "rehype-autolink-headings/lib"
import rehypeCodeTitles from "rehype-code-titles"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import { postFileNames, postsPath } from "utils/mdx"

export default function BlogPost({ source, frontmatter, readingTime }) {
  const { title, publishedAt, headLine, coverImage } = frontmatter

  const router = useRouter()

  return (
    <>
      <NextSeo
        title={title}
        description={headLine}
        canonical={`https://paulkhoza.netlify.app${router.pathname}`}
        openGraph={{
          url: `https://paulkhoza.netlify.app${router.pathname}`,
          title: title,
          description: headLine,
          images: [
            {
              url: coverImage,
              width: 800,
              height: 420,
              alt: "Paul Khoza",
            },
          ],
        }}
      />
      <Layout>
        <PostLayout title={title} headLine={headLine} coverImage={coverImage}>
          <div className={styles.postWrapper}>
            <div className={styles.postDetails}>
              <div>{dayjs(publishedAt).format("D MMM YYYY")}</div>
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
            <div className={`${styles.postTitle} color`}>{title}</div>
            <div className={styles.coverImage}>
              <Image
                src={coverImage}
                width={800}
                height={600}
                alt={"image"}
                priority
              />
            </div>
            <div className={styles.content}>
              <MDXRemote
                {...source}
                components={{
                  h3: Heading,
                  p: Paragraphs,
                  pre: CodeBlocks,
                  a: Anchors,
                  li: ListItem,
                }}
              />
            </div>
          </div>
        </PostLayout>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const filePath = path.join(postsPath, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, "utf-8")

  const { content, data: frontmatter } = matter(fileContent)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypeAutolinkHeadings,
          { properties: { className: ["anchor"] } },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
        rehypeSlug,
      ],
    },
  })

  return {
    props: {
      source: mdxSource,
      frontmatter,
      readingTime: readingTime(fileContent).text,
    },
  }
}

export async function getStaticPaths() {
  const postsPaths = postFileNames.map((slug) => ({
    params: {
      slug: slug.replace(/\.mdx?$/, ""),
    },
  }))

  return {
    paths: postsPaths,
    fallback: false,
  }
}
