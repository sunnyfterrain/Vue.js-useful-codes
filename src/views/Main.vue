<template>
  <div id="app">
    <header>
      <h1>Vue.js Useful Codes</h1>
    </header>
    <main>
      <router-link to="/infinity">무한 스크롤 (Infinity Scroll)</router-link>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #2c3e50;
  min-height: 100vh;
  padding-top: 3rem;
}
header h1 {
  text-align: center;
}
header {
  margin-bottom: 2rem;
}
main {
  padding: 0 2rem;
  max-width: 640px;
  margin: 0 auto;
}
</style>
