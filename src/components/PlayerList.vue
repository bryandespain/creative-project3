<template>
<div class="wrapper">
  <div class="players">
    <div class="player" v-for="player in this.$root.$data.players" :key="player.name">
      <div class = "name">
        <h2>{{player.name}} #{{player.number}}</h2>
      </div>
      <div class="image">
        <img src = "../images/norm.jpg">
        <img :src = "'/images/'+player.image">
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    name: 'PlayerList',
    props: {
      players: Array
    }
  }
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.players {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.player {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.player img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.player .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.name h1 {
  font-size: 16px;
}

.name h2 {
  font-size: 14px;
}

.name p {
  margin: 0px;
  font-size: 10px;
}

.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
