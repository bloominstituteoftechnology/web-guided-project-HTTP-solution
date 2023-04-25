import axios from 'axios'

const baseURL = 'http://localhost:3001'
const todosURL = `${baseURL}/todos`

export const getTodos = () => {
  return axios.get(todosURL)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err.message)
    })
}

export const postTodo = description => {
  const todo = { description, isDone: false }
  return axios.post(todosURL, todo)
}

export const putTodo = todo => {
  return axios.put(todosURL + '/' + todo.id, todo)
}

export const deleteTodo = id => {
  return axios.delete(todosURL + '/' + id)
}
