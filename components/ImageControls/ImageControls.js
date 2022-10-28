import React, { useState } from "react"
import styles from "./ImageControls.module.scss"
import { IMAGE_CONTROLS } from "../../utils/ImageControlsConstants"

export default function ImageControls({
  controls,
  changeControlValue,
  filters,
}) {
  const [options, setOptions] = useState(IMAGE_CONTROLS)

  const [slider, setSlider] = useState({
    brightnessSlider: "",
    contrastSlider: "",
  })

  const onChangeFilter = (e) => {
    let canvas = document.getElementById("control")
    let context = canvas.getContext("2d")
    // let base_image = document.getElementById("sourceImage")
    // base_image.style.filter = 'sepia(60%)'
    // context.filter = 'sepia(60%)'
    // context.drawImage(base_image, 0, 0)
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height)
    var data = imgData.data
    for (var i = 0; i < data.length; i += 4) {
      var grey = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]
      data[i] = grey
      data[i + 1] = grey
      data[i + 2] = grey
    }
    context.putImageData(imgData, 0, 0)
  }

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
              onChange={onChangeFilter}
              className={styles.slider}
              type="range"
              name={item.property}
              min="-100"
              max="100"
              step="1"
              disabled
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
