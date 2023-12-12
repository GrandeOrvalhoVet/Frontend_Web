<script>
import animaisApi from '../services/animal'
import racasApi from '../services/racas'
export default {
  data() {
    return {
      animais: [],
      animal: {
        idade: '',
        sexo: '',
        nome: '',
        peso: '',
        raca: '',
        selectedRacaId: ''
      },
      racas: []
    }
  },
  async created() {
    this.animais = await animaisApi.buscarTodosOsAnimais()
    this.racas = await racasApi.buscarTodasAsRacas()
    this.animal.selectedRacaId = ''
  },
  methods: {
    async salvar() {
      if (this.animal.id) {
        await animaisApi.atualizarAnimal(this.animal)
      } else {
        this.animal.raca = this.animal.selectedRacaId
        await animaisApi.adicionarAnimal(this.animal)
      }
      this.animais = await animaisApi.buscarTodosOsAnimais()
      this.animal = {}
    },
    async excluir(animal) {
      await animaisApi.excluirAnimal(animal.id)
      this.animais = await animaisApi.buscarTodosOsAnimais()
    },
    editar(animal) {
      Object.assign(this.animal, animal)
    }
  }
}
</script>
<template>
  <article id="animal">
    <div class="title">
      <h2>Animais</h2>
    </div>
    <div class="animal-input">
      <input type="number" placeholder="idade" v-model="animal.idade" @keyup.enter="salvar" />
    </div>
    <div class="animal-input">
      <input type="text" placeholder="sexo" v-model="animal.sexo" @keyup.enter="salvar" />
    </div>
    <div class="animal-input">
      <input type="text" placeholder="nome" v-model="animal.nome" @keyup.enter="salvar" />
    </div>
    <div class="animal-input">
      <input type="number" placeholder="peso" v-model="animal.peso" @keyup.enter="salvar" />
    </div>
    <div class="animal-input">
      <select v-model="animal.selectedRacaId">
        <option v-for="raca in racas" :key="raca.id" :value="raca.id">{{ raca.nome }}</option>
      </select>
    </div>
    <div id="salvar">
      <button @click="salvar">Salvar</button>
    </div>
    <div class="animal-form">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>Nome</th>
            <th>Peso</th>
            <th>Raca</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="animal in animais" :key="animal.id">
            <td>{{ animal.id }}</td>
            <td>{{ animal.idade }}</td>
            <td>{{ animal.genero }}</td>
            <td>{{ animal.nome }}</td>
            <td>{{ animal.peso }}</td>
            <td>{{ animal.raca }}</td>
            <td>
              <button class="excluir" @click="excluir(animal)">excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style></style>
