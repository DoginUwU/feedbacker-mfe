import axios from 'axios'
import AuthService from './auth'

const API_ENVS = {
  development: 'http://localhost:3000',
  production: ''
}

const httpClient = axios.create({
  baseURL: API_ENVS[process.env.NODE_ENV]
})

export default {
  auth: AuthService(httpClient)
}
