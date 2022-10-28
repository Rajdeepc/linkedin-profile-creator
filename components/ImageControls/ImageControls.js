import React, { useState } from "react"
import styles from "./ImageControls.module.scss"

export default function ImageControls({
  controls,
  onChangeFilter,
  filters,
}) {



  return (
    <div className={styles.wrapper}>
   
      {controls.map((item, i) => (
        <div className={styles.sliderContainer}>
          <div className={styles.controlWrapper}>
            <div
              className={styles.controlItem}
              // onClick={() => openSliderControl(item, i)}
            >
              <p>{item.name}</p>
              {/* <img src={item.icon} alt={item.name} /> */}
            </div>
          </div>
          <div className={styles.sliderWrapper}>
            <input
              aria-label="range"
              onChange={(e) => onChangeFilter(e.target.value, item.property)}
              className={styles.slider}
              type="range"
              name={item.property}
              min={item.range.min}
              max={item.range.max}
              step="1"
            />
          </div>
        </div>
      ))}
      <div >
        <h5>Preset Filters</h5>
        <div className={styles.filters}>
        {filters.map((item) => (
          <button disabled className={styles.filterItem}>{item.name}</button>
        ))}
        </div>
        
      </div>
    </div>
  )
}
