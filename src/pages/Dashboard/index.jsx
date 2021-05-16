import React from 'react';
import { useForm } from 'react-hook-form';
import { 
  Checkbox,
  Divider,
  FormControlLabel,
  TextField
 } from '@material-ui/core'
 import { 
   Delete,
   Edit
 } from '@material-ui/icons'

 import Button from '../../components/Button'

import { 
  CardContainer,
  Container,
  CardProject,
  HeaderContent,
  CardCreateProject
 } from './styles'


const Dashboard = () => {
  
  const {register, handleSubmit} = useForm()


  return (
    <Container>
      <CardContainer>
        <CardProject>
          <HeaderContent>
            <h1>Projeto</h1>
            <div>
            <Delete/>
            <Edit/>
            </div>
          </HeaderContent>
          <Divider/>
          <div className="checkbox-div">
            <h2>To Do</h2>
            <Divider/>
            <FormControlLabel
              // value="end"
              control={<Checkbox color="primary" />}
              label="End"
              labelPlacement="end"
            />
            <FormControlLabel
              // value="end"
              control={<Checkbox color="primary" />}
              label="End"
              labelPlacement="end"
            />
            <FormControlLabel
              // value="end"
              control={<Checkbox color="primary" />}
              label="End"
              labelPlacement="end"
            />
            <h2>Done</h2>
            <Divider/>
            <FormControlLabel
              // value="end"
              control={<Checkbox color="primary" />}
              label="End"
              labelPlacement="end"
            />
          </div>
          <Divider/>
          <div>
            <TextField variant='outlined' label="Task"/>
            <Button save>Add</Button>
          </div>
        </CardProject>
        
        <CardCreateProject>
          <h1>Create New Project</h1>
          <Divider/>
          <TextField variant='outlined' fullWidth label="Project Name"/>
          <Button primary>Add</Button>
        </CardCreateProject>
      </CardContainer>
    </Container>
)};


export default Dashboard;