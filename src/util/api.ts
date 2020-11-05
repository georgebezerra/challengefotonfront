import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes?q=${query}',
  headers: {
    Accept: 'application/json',
    Authorization: 'whatever-you-want'
  }
})

export default api
