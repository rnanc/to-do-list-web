import api from '../api'

export const createProject = (project) => {
  return api.post('/projects', project)
}

export const editProject = (project) => {
  return api.put('/projects', project)
}

export const getProjects = () => {
  return api.get('/projects')
}

export const deleteProjects = (project_id) => {
  return api.delete(`/projects/${project_id}`)
}