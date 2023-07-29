import styles from "@/styles/Post.module.css"

export const Heading = ({ children }) => {
  return <div className={styles.paraHeading}>{children}</div>
}

export const Paragraphs = ({ children }) => {
  return <div className={styles.paragraphs}>{children}</div>
}

export const CodeBlocks = ({ children }) => {
  console.log(children)
  return (
    <>
      <div className={styles.codeBlocksLabel}>
        <div>{children.props.className.split("language-")}</div>
      </div>
      <pre className={styles.codeBlocks}>{children}</pre>
    </>
  )
}
