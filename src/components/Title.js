import React, { Component } from 'react'
import { TitleWrapper } from '../style'

class Title extends Component {
  render() {
    return (
      <TitleWrapper>
        <h1>Weather App </h1>
        <p> Helps you find weather conditions in cities... </p>
      </TitleWrapper>
    )
  }
}

export default Title
