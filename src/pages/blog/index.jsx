import ShowPosts from "@/components/posts/showPosts"
import { getAllPosts } from "utils/mdx"

export default function Posts({ posts }) {
  return <ShowPosts posts={posts} />
}
//
export const getStaticProps = async () => {
  let posts = await getAllPosts()
  posts.map((post) => post)

  let sorted = posts.sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) return 1
    if (new Date(a.publishedAt) < new Date(b.publishedAt)) return -1

    return 0
  })

  return {
    props: {
      posts: sorted.reverse(),
    },
  }
}
