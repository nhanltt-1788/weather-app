import React, { Component } from 'react'
import { Row } from 'antd'

import DayCard from './DayCard'
class Weather extends Component {
  filterFiveDayWeather = (data) => {
    let fiveDayWeather = []

    if(typeof data !== "undefined") {
      fiveDayWeather = data.filter(item => { return item.dt_txt.includes("03:00:00") })
    }
    return fiveDayWeather
  }

  filterWeatherByDate = (date, data) => {
    let selectedDayWeather = {}

    if(typeof data !== "undefined") {
      selectedDayWeather = data.filter(item => { return item.dt_txt.includes(date) })
    }

    return selectedDayWeather
  }

  getTemperatureArray = (selectedDayWeather) => {
    const result = selectedDayWeather.map(item => ({ temperature: item.main.temp}))

    return result
  }

  render() {
    const { dailyData, selectedDate, setSelectedDate } = this.props
    const fiveDayWeather = this.filterFiveDayWeather(dailyData.list)
    const weatherByDate = this.filterWeatherByDate(selectedDate, dailyData.list)
    // const temperatureArray = this.getTemperatureArray(weatherByDate)

    console.log(weatherByDate)
    return (
      <div>
        <Row>
          <div>Chart: array temp</div>
          <div>Detail</div>
        </Row>
        <Row gutter={16}>
          {
            fiveDayWeather.map((item, index) => <DayCard dayWeather={item} key={index} setSelectedDate={setSelectedDate} />)
          }
        </Row>
      </div>
    )
  }
}

export default Weather
