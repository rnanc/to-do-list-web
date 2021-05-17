import React, { useState, useEffect, useCallback } from 'react';
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
import { getProjects, createProject, deleteProjects } from '../../services/projectService'

const Dashboard = () => {
  
  const [projects, setProjects] = useState([])
  const [projectName, setProjectName] = useState()

  const handleCreateProject = useCallback( async () => {
    let project = await createProject({ name: projectName })
    console.log(project.data)
    setProjects([...projects, project.data])
    setProjectName('')
  }, [projectName])

  const handleDelete = async (project_id) => {
    await deleteProjects(project_id)
    let projectIndex = projects.map(p => p.id).indexOf(project_id);
    projects.splice(projectIndex, 1)
    setProjects([...projects])
  }

  useEffect(() => {
    async function loadProjects(){
      const result = await getProjects()
      if(result.data.length === 0){
        return
      }
      console.log(result.data)
      setProjects(result.data)
    }
    loadProjects()

  },[])

  return (
    <Container>
      <CardContainer>
        {projects && projects.map(project =>
          <CardProject>
          <HeaderContent>
            <h1 key={project.id}>{project.name}</h1>
            <div>
              <button onClick={()=> {handleDelete(project.id)}} style={{border: 'none', background: 'none'}}><Delete/></button>
              <button style={{border: 'none', background: 'none'}}><Edit/></button>
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
          )
        }
        
        
        <CardCreateProject>
          <h1>Create New Project</h1>
          <Divider/>
          <TextField value={projectName} variant='outlined' onChange={e => setProjectName(e.target.value)} fullWidth label="Project Name"/>
          <Button handleClick={handleCreateProject} primary>Add</Button>
        </CardCreateProject>
      </CardContainer>
    </Container>
)};


export default Dashboard;