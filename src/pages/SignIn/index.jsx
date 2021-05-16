import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

import Button from '../../components/Button'
import { 
  Container,
  ContainerContent,
  LoginInputs
 } from './styles'


const SignIn = () => {
  
  const {register, handleSubmit} = useForm()

  const handleLogin = (data) => {
    console.log(data);
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