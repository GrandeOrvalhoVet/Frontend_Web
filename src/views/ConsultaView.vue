<script>
import consultasApi from '../services/consultas'
import animaisApi from '../services/animal'

export default {
  data() {
    return {
      consultas: [],
      consulta: {
        descricao: '',
        data: '',
        hora: '',
        selectedAnimalId: ''
      },
      animais: []
    }
  },
  async created() {
    this.consultas = await consultasApi.buscarTodasAsConsultas()
    this.animais = await animaisApi.buscarTodosOsAnimais()
    this.consulta.selectedAnimalId = ''
  },
  methods: {
    async salvar() {
      try {
        if (this.consulta.id) {
          await consultasApi.atualizarConsulta(this.consulta)
        } else {
          this.consulta.animais = this.consulta.selectedAnimalId
          await consultasApi.adicionarConsulta(this.consulta)
        }
        this.consultas = await consultasApi.buscarTodasAsConsultas()
        // Limpar campos após salvar
        this.consulta.descricao = ''
        this.consulta.data = ''
        this.consulta.hora = ''
        this.consulta.selectedAnimalId = ''
      } catch (error) {
        console.error('Erro ao salvar consulta:', error)
      }
    },
    async excluir(consulta) {
      await consultasApi.excluirConsulta(consulta.id)
      this.consultas = await consultasApi.buscarTodasAsConsultas()
    },
    getAnimalName(animalId) {
      const animal = this.animais.find((a) => a.id === animalId)
      return animal ? animal.nome : ''
    }
  }
}
</script>

<template>
  <article id="consulta">
    <div class="title">
      <h2>Consultas</h2>
    </div>
    <div class="consulta-input">
      <input placeholder="Descrição" type="text" v-model="consulta.descricao" />
    </div>
    <div class="consulta-input">
      <input placeholder="Data" type="date" v-model="consulta.data" />
    </div>
    <div class="consulta-input">
      <input placeholder="Hora" type="time" v-model="consulta.hora" />
    </div>
    <div class="consulta-input">
      <label for="animalSelect">Animal:</label>
    </div>
    <div class="consulta-input">
      <select id="animalSelect" v-model="consulta.selectedAnimalId">
        <option v-for="animal in animais" :key="animal.id" :value="animal.id">
          {{ animal.nome }}
        </option>
      </select>
    </div>
    <div id="salvar">
      <button @click="salvar">Salvar</button>
    </div>
    <div class="consulta-form">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Animal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="consulta in consultas" :key="consulta.id">
            <td>{{ consulta.id }}</td>
            <td>{{ consulta.descricao }}</td>
            <td>{{ consulta.data }}</td>
            <td>{{ consulta.hora }}</td>
            <td>{{ getAnimalName(consulta.selectedAnimalId) }}</td>
            <td>
              <button class="excluir" @click="excluir(consulta)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
