import styled from 'styled-components'
import { Form, Card } from 'antd'

export const AppWrapper = styled.div`
  padding: 0 120px;
`

export const TitleWrapper = styled.div`
  text-align: center;
`

export const FormWrapper = styled(Form)`
  &.ant-form {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
`

export const CardWrapper = styled(Card)`
  text-align: center;
`