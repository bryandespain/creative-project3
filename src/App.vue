<template>
  <div id="app">
    <div id="nav">
      <h1>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">Roster</router-link> |
        <router-link to="/teamstats">Stats</router-link>
      </h1>
      <img src="/images/49705039608_05586c845f_o.jpg" alt="" />
    </div>
    <router-view />
    <div class="footer">
      <a href="https://github.com/bryandespain/creative-project3">GitHub</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
