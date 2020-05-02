import React from "react"
import SVG from "./components/Svg"
import PresentationText from "./components/PresentationText"
import Feuille from "./components/Feuille"
import styles from "./css/index.module.css"
import theme from "../../components/theme"

function Accueil() {
  return (
    <div
      class="text container main-info-section"
      style={{ position: "relative" }}
    >
      {/* <Feuille /> */}
      <div className={styles.container}>
        <div className={styles.text_container}>
          <PresentationText text="Bonjour,*Je m'appelle /Félix/,*Je suis développeur fullstack" />
        </div>
        <div className={styles.svg_container}>
          <SVG />
        </div>
      </div>
    </div>
  )
}

export default Accueil
