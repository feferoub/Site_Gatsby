import React, { useEffect, useRef } from "react"
import "../css/card.css"
import convertToHsl from "../utils/convertToHSL"
import theme from "../../../components/theme"

function AnimatedCard(props) {
  const FaceRef = useRef(null)
  const CardRef = useRef(null)
  const BackRef = useRef(null)

  const shadowColorLight = convertToHsl(props.color, 15)
  const shadowColorDark = convertToHsl(props.color, -15)

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
        } 0px 0px 2px 2px,${shadowColorDark} ${elevation}px ${elevation}px ${elevation *
          2}px, 
      ${shadowColorLight} -${elevation}px -${elevation}px ${elevation * 2}px`,
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
