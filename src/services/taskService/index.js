import api from '../api'

export const createTask = (task) => {
  return api.post('/tasks', task)
}

export const finishTask = (task_id) => {
  return api.post(`/tasks/finish/${task_id}`)
}

export const reopenTask = (task_id) => {
  return api.post(`/tasks/reopen/${task_id}`)
}

export const editTask = (task) => {
  return api.put('/tasks', task)
}

export const getTasks = (project_id) => {
  return api.get(`/tasks/${project_id}`)
}

export const deleteTask = (task_id) => {
  return api.delete(`/task/${task_id}`)
}