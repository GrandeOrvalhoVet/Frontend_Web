<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <h1><RouterLink to="/home">Home</RouterLink></h1>
      <h1><RouterLink to="/animal">Animal</RouterLink></h1>
      <h1><RouterLink to="/clientes">Clientes</RouterLink></h1>
      <h1><RouterLink to="/consulta">Consultas</RouterLink></h1>
      <h1><RouterLink to="/conta">Conta</RouterLink></h1>
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
h1 {
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
