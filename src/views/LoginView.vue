<script setup>
import authService from '../services/auth'

let email = ''
let password = ''
async function performLogin() {
  const { error } = await authService.login(email, password)
  if (error) {
    alert(error)
  } else {
    alert('Login successful')
    window.location.href = '/home'
  }
}
</script>

<template>
  <div class="loginMain">
    <h1>Login</h1>
    <div class="form">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <button @click="performLogin">Login</button>
    </div>
  </div>
</template>

<style>
.loginMain {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
input {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
}
button {
  padding: 10px; 
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;
}
</style>
