import { weatherVariables } from "./weatherVariables"
import type { IWeatherVariable } from "./weatherVariables"

export const getWeatherVariable = (code: number): IWeatherVariable => {
  // codes correspond to the WMO Weather interpretation codes https://open-meteo.com/en/docs
  const weatherVariable = weatherVariables.find((variable) => variable.codes.includes(code))

  if (weatherVariable) {
    return weatherVariable
  }

  // @todo - add error handling
  return weatherVariables[0]
}
