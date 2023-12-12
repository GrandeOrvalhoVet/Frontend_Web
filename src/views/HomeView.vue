<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <h2><RouterLink to="/home">Home</RouterLink></h2>
      <h3><RouterLink to="/animal">Animal</RouterLink></h3>
      <h3><RouterLink to="/clientes">Clientes</RouterLink></h3>
      <h3><RouterLink to="/consulta">Consultas</RouterLink></h3>
      <h3><RouterLink to="/conta">Conta</RouterLink></h3>
    </div>
  </header>
  <main>
    <div>Home</div>
  </main>
</template>

<style scoped>
header {
  display: flexbox;
}
div {
  display: flex;
}
h3 {
  margin: 20px;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 50px;
}
</style>
