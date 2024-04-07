// A list of weather codes and their corresponding descriptions and icons
// Some of the icons are the same / inappropiate, but this is just a placeholder for the assessment.
// data taken from the WMO Weather interpretation codes https://open-meteo.com/en/docs

export interface IWeatherVariable {
  codes: number[]
  description: string
  icon: string
}

export const weatherVariables = [
  {
    "codes": [0],
    "description": "Clear sky",
    "icon": "WbSunny"
  },
  {
    "codes": [1, 2, 3],
    "description": "Mainly clear, partly cloudy, and overcast",
    "icon": "WbCloudy"
  },
  {
    "codes": [45, 48],
    "description": "Fog and depositing rime fog",
    "icon": "LensBlur"
  },
  {
    "codes": [51, 53, 55],
    "description": "Drizzle: Light, moderate, and dense intensity",
    "icon": "WaterDrop"
  },
  {
    "codes": [56, 57],
    "description": "Freezing Drizzle: Light and dense intensity",
    "icon": "WaterDrop"
  },
  {
    "codes": [61, 63, 65],
    "description": "Rain: Slight, moderate and heavy intensity",
    "icon": "WaterDrop"
  },
  {
    "codes": [66, 67],
    "description": "Freezing Rain: Light and heavy intensity",
    "icon": "WaterDrop"
  },
  {
    "codes": [71, 73, 75],
    "description": "Snow fall: Slight, moderate, and heavy intensity",
    "icon": "LensBlur"
  },
  {
    "codes": [77],
    "description": "Snow grains",
    "icon": "LensBlur"
  },
  {
    "codes": [80, 81, 82],
    "description": "Rain showers: Slight, moderate, and violent",
    "icon": "LensBlur"
  },
  {
    "codes": [85, 86],
    "description": "Snow showers slight and heavy",
    "icon": "LensBlur"
  },
  {
    "codes": [95],
    "description": "Thunderstorm: Slight or moderate",
    "icon": "LensBlur"
  },
  {
    "codes": [96, 99],
    "description": "Thunderstorm with slight and heavy hail",
    "icon": "LensBlur"
  }
] as IWeatherVariable[]
 