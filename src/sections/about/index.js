import React from "react"
import styles from "./css/index.module.css"
import "./css/card.css"
import CardContainer from "./components/CardContainer"
function AboutSection() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.title_container}>
        <h2>A propos</h2>
      </div>
      <div className={styles.card_container}>
        <CardContainer />
      </div>
    </div>
  )
}

export default AboutSection
