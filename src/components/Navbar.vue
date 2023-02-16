<template>
<div class="navbar">
  <nav>
    <router-link to="/">Главная</router-link>
    <router-link to="/issue">Issue</router-link>
  </nav>
</div>

</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rosybrown;
  padding: 0 20px;
}
nav {
  display: flex;
  width: 300px;
  justify-content: space-between;
}
nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}
</style>
