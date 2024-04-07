
import React, { useState } from 'react'
import { getLocation } from '../search/getLocation'
import { getForecast } from '../search/getForecast'
import type { IForecast } from '../search/getForecast'
import List from './List'

const App = ():JSX.Element => {
  const [forecast, setForecast] = useState<IForecast>()
  const [error, setError] = useState<string>('')
  
  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>Whatever the Weather</h1>

          <form
            className="form"
            onSubmit={async (event) => {
              event.preventDefault()
              const target = event.target as HTMLFormElement
              const locationEl = target.location as HTMLInputElement
              const locationResult = await getLocation(locationEl.value)
              if(typeof locationResult !== 'string') {
                setError('')
                const { latitude, longitude } = locationResult.results[0]
                const weather = await getForecast(latitude, longitude)
                setForecast(weather)
                return
              } else {
                setError(locationResult)
              }
            }}
          >
            <label htmlFor="location"></label>
            <input className="form__input" type="text" id="location" placeholder="Enter a location..." data-cy={'search-input'} />
            <button className="form__btn" data-cy={'search-btn'}>Search</button>
          </form>
        </header>
        <main>
          { error ? 
            <h3 className="error">{error}</h3> :
            <List forecast={forecast} />
          }
        </main>
      </div>
    </div>
  )
}

export default App
