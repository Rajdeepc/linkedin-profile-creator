import React, { useState } from "react"
import styles from "./Controls.module.scss"
import SVGContainer from "../SVGContainer/SVGContainer"
import Button from "../Button/Button"

const style = {
  lineHeight: "2.5rem",
  fontWeight: "700",
  fill: "#FFFFFF",
  letterSpacing: "2.4px",
  fontFamily:'sans-serif'
}

export default function Controls() {
  const [photo, setPhoto] = useState({
    file: "",
    imagePreviewUrl: "/ui/default.png",
  })
  const [text, setText] = useState("#Write Text Here")
  const [textSize, setTextSize] = useState(2.25)
  const [ringColor, setRingColor] = useState("#54873C")
  const [textColor, setTextColor] = useState("#ffffff")
  const [selection, setSelection] = useState("ring")

  const uploadFile = (e) => {
    try {
      let reader = new FileReader()

      let file = e.target.files[0]
      if (file) {
        reader.onloadend = () => {
          setPhoto({
            file: file,
            imagePreviewUrl: reader.result,
          })
        }

        reader.readAsDataURL(file)
      }
    } catch (e) {
      throw Error("")
    }
  }

  const changeText = (e) => {
    setText(e.target.value)
  }

  const changeTextSize = (e) => {
    setTextSize(e.target.value)
  }

  const changeColor = (e) => {
    if (selection === "ring") setRingColor(e.target.value)
    else setTextColor(e.target.value)
  }

  let triggerDownload = (imgURI) => {
    let a = document.createElement("a")
    a.setAttribute("download", "image.png")
    a.setAttribute("href", imgURI)
    a.setAttribute("target", "_blank")
    a.click()
    a.remove()
  }

  const handleDownload = () => {
    let canvas = document.getElementById("control")
    let context = canvas.getContext("2d")
    // get uploaded local image
    let base_image = new Image()
    base_image.src = photo.imagePreviewUrl
    let a = 800;
    // get svg source
    let svgElement = document.getElementById("mysvg")
    let serializer = new XMLSerializer()
    let data = serializer.serializeToString(svgElement)
    let svgBlob = new Blob([data], { type: "image/svg+xml;charset=utf-8" })
    let blobURL = URL.createObjectURL(svgBlob)
    // load svg as png/svg/jpeg image
    let image = new Image()
    a = Math.min(base_image.naturalHeight, base_image.naturalWidth, a)
    image.onload = () => {
      canvas.width = a * devicePixelRatio

      canvas.height = a * devicePixelRatio

    
      let containerRatio = canvas.width / canvas.height;
      let width = base_image.naturalWidth;
      let height = base_image.naturalHeight;
      let imgRatio = height / width;
  
      if (imgRatio > containerRatio) { // image's height too big
        height = width * containerRatio;
      } else { // image's width too big
        width = height / containerRatio;
      }
  
      let s = {
        width: width,
        height: height,
        offsetX: (base_image.naturalWidth - width) * .5,
        offsetY: (base_image.naturalHeight - height) * .5
      };
      context.drawImage(base_image, s.offsetX, s.offsetY, s.width, s.height, 0, 0, canvas.width, canvas.height);



      context.drawImage(image, 0, 0, a * devicePixelRatio, a * devicePixelRatio)
      let png = canvas.toDataURL() // default png
      // let jpeg = canvas.toDataURL('image/jpg');
      // let webp = canvas.toDataURL('image/webp');

      //trigger download of combined images
      triggerDownload(png)
    }
    image.src = blobURL
  }

  return (
    <>
      <img
        src={photo?.imagePreviewUrl}
        className={styles.image}
        alt="image upload"
      />
      <SVGContainer
        text={text}
        textSize={textSize}
        style={style}
        ringColor={ringColor}
        textColor={textColor}
      />
      <div className={styles.styleContainer}>
        <div className={styles.item}>
          <input aria-label="File Upload" role="button"  type="file" onChange={uploadFile} />
        </div>
        <div className={styles.item}>
          <input
            type="text"
            aria-labelledby="textInput"
            id="textInput"
            className={styles.textInput}
            onChange={changeText}
            placeholder="#Write Text Here"
          />
        </div>
        <div className={styles.item}>
          <div>Change Color</div>
          <div className={styles.row}>
            <div
              className={styles.row}
              onChange={(e) => setSelection(e.target.value)}
            >
              <input
                className={styles.radio}
                type="radio"
                name="selection"
                value="ring"
                defaultChecked
                aria-label="ring"
                tabindex="0"
                aria-checked="true"
              />
              Ring{" "}
              <input
                className={styles.radio}
                type="radio"
                name="selection"
                value="textcolor"
                aria-label="text"
                tabindex="0"
                aria-checked="false"
              />
              Text
            </div>
            <div>
              <input
                type="color"
                aria-label="color picker"
                tabindex="0"
                onChange={changeColor}
                value={selection === "ring" ? ringColor : textColor}
              />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <label for="textSize">Change Font Size</label>
          <input
            aria-label="range"
            onChange={changeTextSize}
            className={styles.slider}
            type="range"
            id="textSize"
            name="textSize"
            min="1"
            max="3"
            step="0.1"
            
          />
        </div>
      </div>
      <Button onClick={handleDownload} />
      <canvas hidden id="control" />
    </>
  )
}
