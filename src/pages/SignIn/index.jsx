import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../../hooks/auth'

import Button from '../../components/Button'
import { 
  Container,
  ContainerContent,
  LoginInputs
 } from './styles'


const SignIn = () => {
  
  const history = useHistory()

  const { signIn } = useContext(AuthContext)

  const {register, handleSubmit} = useForm()

  const handleLogin = (data) => {
    signIn(data)
    history.push('/dashboard')
  };

  return (
  <Container>
    <ContainerContent>
    <form onSubmit={handleSubmit(handleLogin)}>
      <LoginInputs label="E-mail" {...register('email')} />
      <LoginInputs type="password" label="Password" {...register('password')} />
      <Button primary>Login</Button>
      <Link to="/signup">Sign Up</Link>
    </form>
    </ContainerContent>
  </Container>
)};


export default SignIn;