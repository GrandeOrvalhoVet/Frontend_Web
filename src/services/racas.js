import api from "../plugins/api";
export default class RacasApi {
  async buscarTodasAsRacas() {
    const { data } = await api.get('/racas/');
    return data;
  }
  async adicionaRaca(raca) {
    const { data } = await api.post('/racas/', raca);
    return data;
  }
  async atualizaRaca(raca) {
    const { data } = await api.put(`/racas/${raca.id}/`, raca);
    return data;
  }
  async excluiRaca(id) {
    const { data } = await api.delete(`/racas/${id}/`);
    return data;
  }
}