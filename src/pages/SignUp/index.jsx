import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'

import { TextField } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'
import Button from '../../components/Button'
import { 
  Container,
  ContainerContent
 } from './styles'


const SignIn = () => {
  
  const {register, handleSubmit} = useForm()

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
  <Container>
    <div style={{display: 'flex', flex: 1}}></div>
    <ContainerContent>
    <Link to="/signin"><ChevronLeft fontSize="large" /></Link>
    <form onSubmit={handleSubmit(handleLogin)}>
      <TextField label="Name" {...register('name')} />
      <TextField label="E-mail" {...register('email')} />
      <TextField type="password" label="Password" {...register('password')} />
      <Button primary>Register</Button>
    </form>
    </ContainerContent>
  </Container>
)};


export default SignIn;