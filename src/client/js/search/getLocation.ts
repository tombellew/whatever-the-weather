import axios from 'axios'

export interface ILocation {
  admin1_id: number
  admin2: string
  admin2_id: number
  country: string
  country_code: string
  country_id: number
  elevation: number
  feature_code: string
  id: number
  latitude: number
  longitude: number
  name: string
  population: number
  timezone: string
}

export interface ILocationResponse {
  generationtime_ms: number
  results: ILocation[]
}

export const getLocation = async (term: string): Promise<ILocationResponse | string> => {
  const response = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${term}&count=1&language=en&format=json`)
 
  if(response.status === 200 && response.data.results) {
    return response.data as ILocationResponse
  } else {
    return 'Location not found, please search again.'
  }
}
