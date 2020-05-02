import React, { useEffect, useState, useRef } from "react"
import styles from "../css/Svg.module.css"
import Feuille from "../utils/feuille"
import { throttle } from "lodash"

function useDocumentScrollThrottled(callback) {
  const [scroll, setScrollPosition] = useState(0)
  let previousScrollTop = 0

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition
      return currentScrollTop
    })

    callback({ previousScrollTop, currentScrollTop })
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250) // triggers only once every 250ms

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled)

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled)
  }, [handleDocumentScrollThrottled])
}

function Svg() {
  const feuilleRefRotate = useRef(null)
  const feuilleRefTranslateX = useRef(null)
  const feuilleRefTranslateY = useRef(null)
  useDocumentScrollThrottled(async (callbackData) => {
    const { currentScrollTop } = callbackData
    if (
      Math.abs(currentScrollTop) > window.innerHeight * 0.1 &&
      !feuilleRefRotate.current.classList.contains(styles["animation_rotation"])
    ) {
      feuilleRefTranslateY.current.style.setProperty(
        "--window-height",
        window.innerHeight
      )
      feuilleRefTranslateX.current.style.setProperty(
        "--window-width",
        window.innerWidth / 3.5
      )
      feuilleRefRotate.current.classList.toggle(styles["animation_rotation"])
      feuilleRefTranslateX.current.classList.toggle(
        styles["animation_translationX"]
      )
      feuilleRefTranslateY.current.classList.toggle(
        styles["animation_translationY"]
      )
    }
  })

  return (
    <div
      ref={feuilleRefTranslateY}
      className={styles.feuille}
      style={{ position: "absolute", zIndex: 20, opacity: 0.8 }}
    >
      <div ref={feuilleRefTranslateX} className={styles.feuille}>
        <div ref={feuilleRefRotate} className={styles.feuille}>
          <Feuille />
        </div>
      </div>
    </div>
  )
}

export default Svg
