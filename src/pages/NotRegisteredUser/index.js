import React, { Fragment, useContext } from 'react'
import { Context } from '../../Context'
import { UserForm } from '../../components/UserForm'
import { RegisterMutation } from '../../container/RegisterMutation'
import { LoginMutation } from '../../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  return (
    <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = {
              email: email.value,
              password: password.value
            }
            const variables = { input }
            register({ variables }).then(({ data }) => {
              const { signup } = data
              activateAuth(signup)
            })
          }

          const errorMessage = error && 'Error al registrar el usuario'

          return (
            <UserForm
              disabled={loading}
              error={errorMessage}
              onSubmit={onSubmit}
              title='Registrarse'
            />
          )
        }}
      </RegisterMutation>
      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = {
              email: email.value,
              password: password.value
            }
            const variables = { input }
            login({ variables }).then(({ data }) => {
              const { login } = data
              activateAuth(login)
            })
          }

          const errorMessage = error && 'Error al iniciar sesion'

          return (
            <UserForm
              disabled={loading}
              error={errorMessage}
              onSubmit={onSubmit}
              title='Login'
            />
          )
        }}
      </LoginMutation>
    </Fragment>
  )
}
