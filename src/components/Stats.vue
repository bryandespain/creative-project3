<template>
  <div class="wrapper">
    <div class="players">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><b>Name</b></th>
            <th scope="col"><b>Number</b></th>
            <th scope="col"><b>MPG</b></th>
            <th scope="col"><b>PPG</b></th>
            <th scope="col"><b>RPG</b></th>
            <th scope="col"><b>AST</b></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="player"
            v-for="player in this.$root.$data.players"
            :key="player.name"
          >
            <th scope="row">
              <b>{{ player.name }}</b>
            </th>
            <td>{{ player.number }}</td>
            <td>{{ player.mpg }}</td>
            <td>{{ player.ppg }}</td>
            <td>{{ player.rpg }}</td>
            <td>{{ player.ast }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Stats",
  props: {
    players: Array,
  },
};
</script>
<style></style>
