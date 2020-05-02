import React, { useRef, useEffect } from "react"
import "./back.css"

function Back(props) {
  const backRef = useRef(null)
  const textRef = useRef(null)
  const { radius, width, height } = props
  useEffect(() => {
    function start(counter, prevCounter) {
      if (counter < 361) {
        setTimeout(() => {
          if (counter - prevCounter <= 2) {
            start(
              counter +
                Math.min(
                  Math.exp((175 - Math.abs(180 - counter)) / 50) / 2,
                  20
                ),
              prevCounter
            )
          } else {
            document.documentElement.style.setProperty(
              "--rotation",
              `${180 + counter}deg`
            )
            backRef.current.style.setProperty(
              "--rotation2",
              `${0 + counter}deg`
            )

            backRef.current.style.setProperty(
              "--rotation3",
              `${0 + counter}deg`
            )

            backRef.current.style.setProperty(
              "--rotation4",
              `${120 + counter}deg`
            )
            backRef.current.style.setProperty(
              "--rotation5",
              `${240 + counter}deg`
            )

            backRef.current.style.setProperty(
              "--rotation6",
              `${315 + counter}deg`
            )
            backRef.current.style.setProperty(
              "--rotation7",
              `${360 + counter}deg`
            )
            backRef.current.style.setProperty(
              "--rotation8",
              `${1 + counter}deg`
            )
            console.log(counter)
            start(
              counter +
                Math.min(
                  Math.exp((180 - Math.abs(180 - counter)) / 50) / 2,
                  10
                ),
              counter
            )
          }
        }, 5)
      }
    }
    start(0, -5)
  }, [])
  return (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "2050px",
      }}
    >
      <div
        className="container"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          borderRadius: radius,
        }}
      />
      <div
        ref={backRef}
        className="text"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          borderRadius: radius,
          zIndex: "10",
        }}
      />
      <img
        style={{ zIndex: 5, marginTop: 40 }}
        width={140}
        height={140}
        src={require("../images/FelixLogo.png")}
      />
      {/* <div
        style={{
          //   background: "#FFFFFF50",
          zIndex: 2,
          width: 400,
          height: 150,
          marginTop: 50,
          marginRight: 70,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: 80,
            letterSpacing: 1.2,
            fontWeight: "bold",
          }}
        >
          F
        </p>
      </div>
      <div
        style={{
          //   background: "#FFFFFF50",
          zIndex: 2,
          width: 400,
          height: 150,
          marginRight: -70,
          marginTop: -80,
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: 70,
            letterSpacing: 1.2,
            fontWeight: "bold",
          }}
        >
          R
        </p>
      </div> */}
    </div>
  )
}

export default Back
