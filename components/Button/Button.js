import React from "react"
import styles from "./Button.module.scss"

export default function Button({ text = 'Download', onClick }) {
  return <button type="button" className={styles.button} onClick={onClick}>{text}</button>
}
