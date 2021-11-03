<template>
  <div class="wrapper">
    <div class="players">
      <div
        class="player"
        v-for="player in this.$root.$data.players"
        :key="player.name"
      >
        <div class="name">
          <h2><b>{{ player.name }} #{{ player.number }}</b></h2>
        </div>
        <div class="image">
          <img :src="'/images/' + player.image" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlayerList",
  props: {
    players: Array,
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.players {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 5px;
}

.player {
  margin: 10px;
  margin-top: 0px;
  width: 100%;
}

.player img {
  border: 4px solid #333;
  height: auto;
  width: 100%;
  object-fit: cover;
}

.player .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #f2921d;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.name h1 {
  font-size: 16px;
}

.name h2 {
  font-size: 20px;
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
