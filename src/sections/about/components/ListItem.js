import React from "react"
import styles from "../css/item.module.css"

function Item(props) {
  const { icon, text, name } = props

  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>{icon}</div>
      <div>
        <h4>{name}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Item
