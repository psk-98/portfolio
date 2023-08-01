import styles from "@/styles/Post.module.css"

export const Heading = ({ children }) => {
  return <div className={styles.paraHeading}>{children}</div>
}

export const Paragraphs = ({ children }) => {
  return <div className={styles.paragraphs}>{children}</div>
}

export const CodeBlocks = ({ children }) => {
  return (
    <>
      <div className={styles.codeBlocksLabel}>
        <div>{children.props.className.split("language-")}</div>
      </div>
      <pre className={styles.codeBlocks}>{children}</pre>
    </>
  )
}

export const Anchors = ({ children }) => {
  console.log(children)
  return <a className="color">{children}</a>
}

export const ListItem = ({ children }) => {
  return <li>{children[1].props.children}</li>
}
