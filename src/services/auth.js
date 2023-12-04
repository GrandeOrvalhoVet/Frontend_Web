import api from '../plugins/api'

class AuthService {
  async login(email, password) {
    const response = await api.post('/token/', { email, password })
    return response.data
  }
}

export default new AuthService()
