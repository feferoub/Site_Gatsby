import React, { useState, useEffect } from "react"
import SVG from "./components/Svg"
import PresentationText from "./components/PresentationText"
import Feuille from "./components/Feuille"
import styles from "./css/index.module.css"
import theme from "../../components/theme"

function useWindowSize() {
  const isClient = typeof window === "object"

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

function Accueil() {
  let size = useWindowSize()

  return (
    <div
      class="text container main-info-section"
      style={{ position: "relative" }}
    >
      {size.width <= 480 ? null : <Feuille />}
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
