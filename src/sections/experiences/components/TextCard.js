import React from "react"
import styles from "../css/text.module.css"

function TextCard({ content: { title, text } }) {
  const divRef = React.useRef()
  const [Html, setHtml] = React.useState(null)
  // function htmlDecode(input) {
  //   var e = document.createElement("div")
  //   e.innerHTML = input
  //   return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue
  // }
  React.useEffect(() => {
    console.log(divRef)
    divRef.current.innerHTML = text
    setHtml(
      divRef.current.childNodes.length === 0
        ? ""
        : divRef.current.childNodes[0].nodeValue
    )
    divRef.current.innerHTML = null
  }, [text])
  return (
    <div style={{ paddingLeft: "5%", width: "100%" }}>
      <p className={styles.title}>{title}</p>
      <div ref={divRef} />
      <div dangerouslySetInnerHTML={{ __html: Html }} className={styles.text} />
    </div>
  )
}

export default TextCard
