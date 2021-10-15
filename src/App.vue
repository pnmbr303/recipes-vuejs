<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/chicken">Chicken</router-link> | 
    <router-link to="/fish">Fish</router-link> | 
    <router-link to="/recipe">Recipe</router-link> | 
    <router-link to="/about">About</router-link> |
  </div>
  <router-view/>
</template>

<style lang="scss">


.body {
  background-color: lightgreen;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: lightgreen;

  min-height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
