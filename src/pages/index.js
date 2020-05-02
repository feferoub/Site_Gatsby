import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Accueil from "../sections/accueil"
import AboutSection from "../sections/about"
import Experience from "../sections/experiences"
import theme from "../components/theme"
const IndexPage = () => {
  const [section, setSection] = useState(0)
  return (
    <Layout section={section}>
      <SEO title="Home" />
      <Accueil />
      <div style={{ position: "absolute", width: "100%" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={theme["primary-color"]}
            fill-opacity="1"
            d="M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,96C672,75,768,53,864,80C960,107,1056,181,1152,208C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <AboutSection />
      <Experience />
    </Layout>
  )
}
export default IndexPage
