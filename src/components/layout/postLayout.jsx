import Head from "next/head"

export default function PostLayout({ children, title, coverImage, headLine }) {
  return (
    <>
      <Head>
        <title>
          {title} | {"Paul's blog"}
        </title>
        <meta name="description" content={headLine} />
        <meta name="image" content={coverImage} />
      </Head>
      <div className="blog_post">{children}</div>
    </>
  )
}
