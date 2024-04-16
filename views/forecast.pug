html
  head
    title 7-Day Forecast
    link(rel="stylesheet", href="/styles/main.css")
  body
    h1 7-Day Forecast
    form(action="/forecast", method="GET")
      input(type="text", name="city", placeholder="Enter city name")
      select(name="unit")
        option(value="celsius") Celsius
        option(value="fahrenheit") Fahrenheit
      button(type="submit") Get Forecast

    if forecastData
      if forecastData.list
        each forecast in forecastData.list
          div
            p Date: #{forecast.dt_txt}
            if unit === 'celsius'
              p Temperature: #{(forecast.main.temp - 273.15).toFixed(2)} °C
              p Feels Like: #{(forecast.main.feels_like - 273.15).toFixed(2)} °C
            else 
              p Temperature: #{((forecast.main.temp - 273.15) * 9/5 + 32).toFixed(2)} °F 
              p Feels Like: #{((forecast.main.feels_like - 273.15) * 9/5 + 32).toFixed(2)} °F 
            p Description: #{forecast.weather[0].description}
            p Wind Speed: #{forecast.wind.speed} m/s
            p Humidity: #{forecast.main.humidity}%
            p Visibility: #{forecast.visibility} meters
      else
        p Forecast data not available
    else
      p No forecast data available
