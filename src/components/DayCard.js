import React, { Component } from 'react'
import { Col } from 'antd'
import moment from 'moment'

import { CardWrapper } from '../style'

class DayCard extends Component {
  render() {
    const { dayWeather, setSelectedDate } = this.props
    let newDate = new Date()
    const weekday = dayWeather.dt*1000
    newDate.setTime(weekday)
    const imgUrl = `owi owi-${dayWeather.weather[0].icon} owi-5x`

    return (
      <Col span={4}>
        <CardWrapper hoverable onClick={() => setSelectedDate(dayWeather.dt_txt.substr(0, dayWeather.dt_txt.indexOf(' ')))}>
          <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
          <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
          <i className={imgUrl}></i>
          <h2>{Math.round(dayWeather.main.temp)} °C</h2>
          <span>{dayWeather.weather[0].description}</span>
        </CardWrapper>
      </Col>
    )
  }
}

export default DayCard
