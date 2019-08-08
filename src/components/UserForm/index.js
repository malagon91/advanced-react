import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ title, onSubmit, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    // Cancel the normal behavior of submit form
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <Title>{title}</Title>
      <Input disabled={disabled} placeholder='Email' {...email} />
      <Input
        disabled={disabled}
        placeholder='Password'
        type='password'
        {...password}
      />
      <SubmitButton disabled={disabled}>{title}</SubmitButton>
      {error && <Error>{error}</Error>}
    </Form>
  )
}
