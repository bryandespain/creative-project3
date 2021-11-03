<template>
  <div>
    <Stats :players="players" />
  </div>
</template>

<script>
import Stats from "../components/Stats.vue";
export default {
  name: "Home",
  components: {
    Stats,
  },
};
</script>
