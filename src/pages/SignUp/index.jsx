import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import { TextField } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'
import Button from '../../components/Button'
import { 
  Container,
  ContainerContent
 } from './styles'

 import { createUser } from '../../services/userService'


const SignUp = () => {
  
  const {register, handleSubmit, errors, reset} = useForm()
  const history = useHistory()
  const timeOut = () => {setTimeout(()=>{history.push('/')}, 3000)}

  const handleLogin = async (data) => {
    console.log(data)
    try {
      await createUser(data)
      toast.success('User created !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
        reset()
        timeOut()
    } catch (error) {
      if(!errors){
        toast.error(error)
      }
      toast.error(errors)
      reset()
    }
  };

  return (
  <Container>
    <div style={{display: 'flex', flex: 1}}></div>
    <ContainerContent>
      <Link to="/signin"><ChevronLeft fontSize="large" /></Link>
      <form onSubmit={handleSubmit(handleLogin)}>
        <ToastContainer />
        <TextField label="Name" {...register('name', {required: true})} />
        <TextField label="E-mail" type="email" {...register('email', {required: true})} />
        <TextField type="password" label="Password" {...register('password', {required: true})} />
        <Button primary>Register</Button>
      </form>
    </ContainerContent>
  </Container>
)};


export default SignUp;