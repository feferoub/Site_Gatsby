import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import theme from "./theme"
import { navigate } from "@reach/router"

const Header = ({ siteTitle, section, refs }) => {
  return (
    <header className={styles.container}>
      <div
        className={styles.header_item}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: theme["secondary-color"],
            paddingBottom: 8,
            marginBottom: 0,
          }}
        >
          Accueil
        </p>
        <svg
          style={{ height: 8, width: 8 }}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="10" fill={theme["secondary-color"]} />
        </svg>
      </div>

      <p
        className={styles.header_item}
        onClick={() => {
          navigate("#about")
        }}
      >
        A propos
      </p>
      <p
        onClick={() => {
          navigate("#experience")
        }}
        className={styles.header_item}
      >
        Mes expériences
      </p>
      <p
        onClick={() => {
          navigate("#test")
        }}
        className={styles.header_item}
      >
        Me contacter
      </p>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
