import React, { useEffect, useRef } from "react"
import "../css/animateText.css"
import "../css/text.css"

function PresentationText({ text }) {
  useEffect(() => {
    const spans = document.querySelectorAll("span")
    spans.forEach(span =>
      span.addEventListener("mouseover", function(e) {
        span.classList.add("animated", "rubberBand")
      })
    )
    spans.forEach(span =>
      span.addEventListener("mouseout", function(e) {
        span.classList.remove("animated", "rubberBand")
      })
    )
  }, [])

  const firstLetterRef = useRef(null)
  useEffect(() => {
    function start() {
      setTimeout(() => {
        firstLetterRef.current.classList.toggle("animated")
        firstLetterRef.current.classList.toggle("rubberBand")
        start()
      }, 1500)
    }
    start()
  }, [])

  function convertString(string) {
    let a = []
    string.split("*").forEach((line, index) => {
      a.push([])
      line.split(" ").forEach(word => {
        a[index].push(word.split(""))
      })
    })
    return a
  }
  let name = false
  return (
    <div class="container-text">
      {convertString(text).map((line, indexLine) => (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {line.map((word, indexWord) => (
            <div
              style={{
                marginRight: "20px",
                display: "flex",
                flexWrap: "wrap",
                paddingTop: 20,
              }}
            >
              {word.map((letter, index) => {
                if (index === 0 && indexLine === 0 && indexWord === 0) {
                  return (
                    <span ref={firstLetterRef} class="first-letter">
                      {letter}
                    </span>
                  )
                }
                if (index === 0) {
                  name = false
                }
                if (letter === "/") {
                  name = !name
                  return null
                }
                if (name) {
                  return <span class="name">{letter}</span>
                }
                return <span>{letter}</span>
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default PresentationText
