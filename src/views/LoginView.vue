<script setup>
import authService from '../services/auth'

let email = ''
let password = ''
async function performLogin() {
  const { error } = await authService.login(email, password )
  if (error) {
    alert(error)
  } else {
    alert('Login successful')
    window.location.href = '/home'
  }
}
</script>

<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="performLogin">Login</button>
  </div>
</template>
