export const getSunTime = (timeStamp: number): string => {
  const date = new Date(timeStamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  {
    hours.length <= 1 ? (hours = `0${hours}`) : (hours = hours)
  }
  {
    minutes.length <= 1 ? (minutes = `0${minutes}`) : (minutes = minutes)
  }

  return `${hours}:${minutes}`
}

export const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return "NE"

  if (deg > 75 && deg <= 105) return "N"
  if (deg > 105 && deg <= 165) return "NW"

  if (deg > 165 && deg <= 195) return "W"
  if (deg > 195 && deg <= 255) return "SW"

  if (deg > 255 && deg <= 285) return "S"
  if (deg > 285 && deg <= 345) return "SE"

  return "E"
}

export const getHumidityInfo = (level: number): string => {
  if (level <= 55) return `Dry and confortable air`

  if (level > 55 && level <= 65) return `A bit uncomfortable and sticky air`

  return `Heavy moisture and uncomfortable air`
}

export const getPop = (value: number): string => {
  if (value <= 0.33) return "Low probability"

  if (value > 0.33 && value <= 0.66) return "Moderate probability"

  return "High probability"
}

export const getPressureInfo = (pressure: number): string => {
  if (pressure <= 980) return "Low pressure"

  if (pressure > 980 && pressure < 1020) "Normal pressure"

  return "High pressure"
}

export const getVisibilityValue = (visibility: number): string => {
  if (visibility <= 1) return "Very low visibility"
  if (visibility > 1 && visibility <= 4) return "Low visibility"
  if (visibility > 4 && visibility <= 10) return "Good visibility"

  return "Excellent visibility"
}
