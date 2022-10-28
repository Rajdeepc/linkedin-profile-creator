const IMAGE_CONTROLS = [
  {
    name: "Brightness",
    property: "brightness",
    icon: "/ui/exposure.png",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    icon: "/ui/exposure.png",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    icon: "/ui/exposure.png",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    icon: "/ui/exposure.png",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    icon: "/ui/exposure.png",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    icon: "/ui/exposure.png",
    value: 0,
    range: {
      min: 0,
      max: 300,
    },
    unit: "deg",
  },
]

const IMAGE_FILTERS = [
  {
    id: "brighten",
    name: "brighten",
  },
  {
    id: "b&w",
    name: "black and white",
  },
  {
    id: "funky",
    name: "funky",
  },
  {
    id: "vintage",
    name: "vintage",
  },
]

export { IMAGE_CONTROLS, IMAGE_FILTERS }
