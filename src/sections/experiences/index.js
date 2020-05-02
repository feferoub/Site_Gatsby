import React, { useState, useEffect } from "react"
import Text from "./components/TextCard"
import Step from "./components/Step"
import Content from "./utils/TextDict"
import styles from "./css/index.module.css"
import Graph from "./utils/Graph"

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

function Experience() {
  const [visibleSteps, setVisibleSteps] = React.useState([])
  const [appear, setAppear] = React.useState(null)
  const [textSize, setTextSize] = React.useState(80)
  const [height, setHeight] = React.useState(60)
  React.useEffect(() => {
    if (appear && !visibleSteps.includes(appear)) {
      setVisibleSteps((prevSteps) => [...prevSteps, appear])
    }
  }, [appear])
  let size = useWindowSize()

  React.useEffect(() => {
    if (size.width <= 480) {
      setHeight(360)
      setTextSize(70)
    }
  }, [size])

  return (
    <div className={styles.container} id="experience">
      <div className={styles.title}>
        <h2>Expérience</h2>
      </div>{" "}
      <div className={styles.moduleContainer}>
        <div className={styles.graphContainer}>
          {
            //style={{ width: `${100 - textSize}%` }}>}
          }
          <Graph
            isVisible={visibleSteps}
            heights={{ study: height, bsport: height, freelance: height }}
            width="100%"
          />
        </div>
        <div className={styles.textContainer} style={{ width: `${textSize}%` }}>
          <Step
            text={<Text content={Content.study} />}
            name="study"
            setVisible={() => setAppear("study")}
          />
          <Step
            text={<Text content={Content.bsport} />}
            name="bsport"
            setVisible={() => setAppear("bsport")}
          />
          <Step
            text={<Text content={Content.freelance} />}
            name="freelance"
            setVisible={() => setAppear("freelance")}
          />
        </div>
      </div>
    </div>
  )
}

export default Experience
