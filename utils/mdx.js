import fs from "fs"
import matter from "gray-matter"
import path from "path"
import readingTime from "reading-time"

export const postsPath = path.join(process.cwd(), "posts")

export const postFileNames = fs
  .readdirSync(postsPath)
  .filter((postPath) => /\.mdx?$/.test(postPath))

export const getSlug = async () => {
  const paths = sync(`${postsPath}/*.mdx`)

  return paths.map((path) => {
    const pathParts = path.split("/")
    const fileName = pathParts[pathParts.length - 1]
    const [slug, _extension] = fileName.split(".")

    return slug
  })
}

export const getPostFromSlug = async (slug) => {
  const postDirectory = path.join(postsPath, `${slug}.mdx`)
  const source = fs.readFileSync(postDirectory)
  const { content, data } = matter(source)
  //console.log(data)
  const { excerpt, title, publishedAt } = data

  return {
    content,
    frontmatter: {
      slug,
      excerpt,
      title,
      publishedAt,
      readingTime: readingTime(source).text,
      ...data,
    },
  }
}

export const getAllPosts = async () => {
  const posts = fs.readdirSync(path.join(process.cwd(), "posts"))

  return posts.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), "posts", postSlug),
      "utf-8"
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
        readingTime: readingTime(source).text,
      },
      ...allPosts,
    ]
  }, [])
}
