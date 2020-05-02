import React, { useState, useRef, useEffect } from "react"
import "./card.css"

function Card(props) {
  const cardRef = useRef(null)
  const [style, setStyle] = useState({
    ...props.style,
    width: convertToPx(props.style.width),
    height: convertToPx(props.style.height),
  })
  function convertToPx(value) {
    return `${value}px`
  }
  function handleClick() {
    cardRef.current.classList.contains("box-shadow-in")
      ? setStyle({
          ...props.style,
          width: convertToPx(props.style.width),
          height: convertToPx(props.style.height),
        })
      : setStyle({
          ...style,
          width: convertToPx(parseInt(props.style.width, 10) + 8),
          height: convertToPx(parseInt(props.style.height, 10) + 8),
          marginTop: "-4px",
          marginLeft: "-4px",
        })
    cardRef.current.classList.toggle("box-shadow-in")
  }
  useEffect(() => {
    setStyle({
      ...props.style,
      width: convertToPx(props.style.width),
      height: convertToPx(props.style.height),
    })
  }, [props.style])
  console.log(style, props)
  return (
    <div
      ref={cardRef}
      style={style}
      onClick={() => {
        handleClick()
        /*console.log(clicked)
        if (clicked) {
          document.documentElement.style.setProperty(
            "--shadow-base",
            "var(--primary) inset 0px 0px 2px 2px,var(--primary-dark) inset 4px 4px 8px,  var(--primary-light) inset -4px -4px 8px"
          )
        } else {
          document.documentElement.style.setProperty(
            "--shadow-base",
            "var(--primary) 0px 0px 2px 2px,var(--primary-dark) 4px 4px 8px,  var(--primary-light) -4px -4px 8px"
          )
        }
        setClicked(!clicked)*/
      }}
      //   style={{
      //     background: `hsl(${hue},${saturation}%,${lightness}%)`,
      //     borderRadius: "10px",
      //     animation: "10s linear",
      //     boxShadow: reverted
      //       ? `hsl(${hue},${saturation}%,${lightness}%) inset 0px 0px 2px 2px,
      //       hsl(${hue},${saturation}%,${lightness -
      //           15}%) inset 4px 4px 8px, hsl(${hue},${saturation}%,${lightness +
      //           15}%) inset -4px -4px 8px`
      //       : `hsl(${hue},${saturation}%,${lightness}%) 0px 0px 2px 2px,hsl(${hue},${saturation}%,${lightness -
      //           15}%) 4px 4px 8px,  hsl(${hue},${saturation}%,${lightness +
      //           15}%) -4px -4px 8px`,
      //     width: "180px",
      //     height: "180px",
      //     marginTop: "60px",
      //   }}
      class="button box-shadow-out"
    ></div>
  )
}

export default Card
