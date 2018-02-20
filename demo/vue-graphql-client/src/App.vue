<template>
  <div id="app">
    <img class="logo" alt="Vue + Apollo + GraphQL" src="https://camo.githubusercontent.com/e78e52aa36ff76ef5e142bfeced3b5f657b3fc26/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a483941414e6f6f664c716a53313058643554775259772e706e67">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img.logo {
  height: 12em;
  margin: -3em;
}
</style>
