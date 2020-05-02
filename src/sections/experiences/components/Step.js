import React from "react"
import styles from "../css/step.module.css"

function Step(props) {
  const [isVisible, setVisible] = React.useState(false)
  const domRef = React.useRef()
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible((prevEntry) => prevEntry || entry.isIntersecting)
          if (isVisible || entry.isIntersecting) {
            props.setVisible()
          }
        })
      },
      { threshold: 0.5 }
    )
    let ref = domRef.current
    observer.observe(ref)
    return () => observer.unobserve(ref)
  }, [])

  return (
    <div
      className={[styles.container, isVisible ? styles.visible : ""].join(" ")}
      ref={domRef}
    >
      <div className={styles.text}>{props.text}</div>
    </div>
  )
}

export default Step
