import api from '../plugins/api'

class AnimalService {
  async buscarTodosOsAnimais() {
    const response = await api.get('/animais')
    return response.data
  }
  async adicionarAnimal(animal) {
    const response = await api.post('/animais', animal)
    return response.data
  }
  async excluirAnimal(id) {
    const response = await api.delete(`/animais/${id}`)
    return response.data
  }
  async getAnimal(id) {
    const response = await api.get(`/animais/${id}`)
    return response.data
  }
}

export default new AnimalService()
