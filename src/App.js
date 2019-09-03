import React, { Component } from 'react';

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'
import { AppWrapper } from './style'
import './css/weather-icon.css'

class App extends Component {
  state = {
    dailyData: [],
    selectedDate: '',
  }

  setSelectedDate = (date) => {
    this.setState({
      selectedDate: date,
    })
  }

  getWeather = (e, formValidate) => {
    e.preventDefault()
    formValidate.validateFields((err) => {
      if(!err) {
        const city = e.target.elements.city.value.split(' ').join('')
        const country = e.target.elements.country.value.split(' ').join('')
        const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=003e88871550282fa3b8484fa705d52e`
        
        fetch(weatherUrl)
        .then(res => res.json())
        .then(data => {
          this.setState({
            dailyData: data,
          })
        })
      }
    })
  }

  render() {
    return (
      <AppWrapper>
        <Title />
        <Form loadWeather={this.getWeather} />
        <Weather
          dailyData={this.state.dailyData}
          selectedDate={this.state.selectedDate}
          setSelectedDate={this.setSelectedDate}
        />
      </AppWrapper>
    )
  }
}

export default App;
