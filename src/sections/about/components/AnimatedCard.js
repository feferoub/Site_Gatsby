import React, { useEffect, useRef, useState } from "react"
import "../css/card.css"
import convertToHsl from "../utils/convertToHSL"
import theme from "../../../components/theme"

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

function AnimatedCard(props) {
  const FaceRef = useRef(null)
  const CardRef = useRef(null)
  const BackRef = useRef(null)
  const [open, setOpen] = useState(false)
  const shadowColorLight = convertToHsl(props.color, 15)
  const shadowColorDark = convertToHsl(props.color, -15)
  let size = useWindowSize()

  const { elevation, color } = props
  useEffect(() => {
    const { childrens, textLength } = props

    const shadowColorLightPrimary = convertToHsl(theme["primary-color"], 15)
    const shadowColorDarkSecondary = convertToHsl(theme["primary-color"], -15)
    FaceRef.current.style.setProperty(
      "--primary-color-light",
      shadowColorLightPrimary
    )
    FaceRef.current.style.setProperty(
      "--primary-color-dark",
      shadowColorDarkSecondary
    )
    CardRef.current.style.setProperty("--childrens", childrens)
    CardRef.current.style.setProperty("--text-length", textLength)
  }, [props])
  return (
    <div
      ref={CardRef}
      className="card"
      style={{
        backgroundColor: color,

        boxShadow: `${
          props.color
        } 0px 0px 2px 2px,${shadowColorDark} ${elevation}px ${elevation}px ${
          elevation * 2
        }px, 
      ${shadowColorLight} -${elevation}px -${elevation}px ${elevation * 2}px`,
      }}
      onClick={() => {
        if (open && size.width <= 480) {
          CardRef.current.classList.toggle("closed")
        } else {
          setOpen(true)
        }
      }}
    >
      <div class="face1" ref={FaceRef}>
        {props.frontFace}
      </div>
      <div class="face2" ref={BackRef}>
        {" "}
        {props.backFace}
      </div>
    </div>
  )
}

export default AnimatedCard
