import React, { Component } from 'react'
import { Form as AntForm, Input, Button } from 'antd'

import { FormWrapper } from '../style'

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

class Form extends Component {
  componentDidMount() {
    this.props.form.validateFields()
  }

  render() {
    const { loadWeather } = this.props
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form
    const cityError = isFieldTouched('city') && getFieldError('city')
    const countryError = isFieldTouched('country') && getFieldError('country')

    return (
      <FormWrapper layout="inline" onSubmit={(e) => loadWeather(e, this.props.form)} >
        <AntForm.Item validateStatus={cityError ? 'error' : ''} help={cityError || ''}>
          {getFieldDecorator('city', {
            rules: [{ required: true, message: 'Please input your city!' }],
          })(
            <Input placeholder="City..." />,
          )}
        </AntForm.Item>
        <AntForm.Item validateStatus={countryError ? 'error' : ''} help={countryError || ''}>
          {getFieldDecorator('country', {
            rules: [{ required: true, message: 'Please input your country!' }],
          })(
            <Input placeholder="Country..." />,
          )}
        </AntForm.Item>
        <AntForm.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Get Weather</Button>
        </AntForm.Item>
      </FormWrapper>
    )
  }
}

const WrappedForm = AntForm.create()(Form)

export default WrappedForm
