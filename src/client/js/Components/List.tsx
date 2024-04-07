import React from 'react'
import { IForecast } from '../search/getForecast'
import { getWeatherVariable } from '../config/getWeatherVariable'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

interface IListProps {
  forecast: IForecast
}

const List = (props: IListProps):JSX.Element => {
  const { forecast } = props

  const renderIcon = (componentName: string) => {
    // material ui icons
    switch (componentName) {
      case 'WbCloudy':
        return <WbCloudyIcon />
      case 'LensBlur':
        return <LensBlurIcon />
      case 'WaterDrop':
        return <WaterDropIcon />
      default:
        return <WbSunnyIcon />
    }
  }

  return (
    <ul className="grid">
      {forecast && 
        forecast.daily.time.map((time: any, index: number) => {
          const weatherVariable = getWeatherVariable(forecast.daily.weatherCode[index])

          return (
            <li data-cy={'forecast-card'} className="card" key={index}>
              <h3>{ new Date(time).toDateString() }</h3>
              <p>{ renderIcon(weatherVariable.icon) }</p>
              <p>{ weatherVariable.description }</p>
              <p>{Math.round(forecast.daily.temperature2mMin[index])}°C - {Math.round(forecast.daily.temperature2mMax[index])}°C</p>
              <p>Max Wind Speed: {Math.round(forecast.daily.windSpeed10mMax[index])}m/s</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default List