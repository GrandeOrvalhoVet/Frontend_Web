import api from "../plugins/api";
export default class EspeciesApi {
  async buscarTodasAsEspecies() {
    const { data } = await api.get('/especies/');
    return data;
  }
  async adicionarEspecie(especie) {
    const { data } = await api.post('/especies/', especie);
    return data;
  }
  async atualizarEspecie(especie) {
    const { data } = await api.put(`/especies/${especie.id}/`, especie);
    return data;
  }
  async excluirEspecie(id) {
    const { data } = await api.delete(`/especies/${id}/`);
    return data;
  }
}