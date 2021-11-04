<template>
  <div>
    <h1>Team News</h1>
    <img clas="dame" src="\images\dame.jpg" alt="" />

    <h3>
      <a href="#"
        >Lillard struggles early in the season, furthering trade speculations</a
      >
    </h3>
    <section class="Item-rows">
      <div class="item">
        <img src="\images\blazerstradefornance.jpg" alt="" />
        <h4>
          <a href="#">Nance struggles to get minutes early in the season</a>
        </h4>
      </div>
      <div class="item">
        <img src="\images\norm.jpg" alt="" />
        <h4>
          <a href="#"
            >Powell off to a strong start after recovering from injury</a
          >
        </h4>
      </div>
    </section>
    <img src="\images\seasonpreview.jpeg" alt="" />
    <h4><a href="#">Blazers blow out the Clippers 111-92</a></h4>
    <br />
  </div>
</template>
<script>
export default {
  name: "HomePage",
};
</script>
<style>
.bg-light {
  background-color: white !important;
  color: black !important;
}

.navbar-brand {
  color: black !important;
}

.nav-link {
  color: black !important;
}

h1 {
  text-align: center;
}

.standings {
  display: flex;
  justify-content: center;
}

.gallery {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.image {
  clear: both;
  display: flex;
  justify-content: center;
}

.Item-rows {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.Stats-rows {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

img {
  width: 100%;
}

.item img {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
}

h1 {
  text-align: center;
}

.Item-rows-price {
  display: grid;
  grid-template: auto auto auto auto auto / 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 5px;
  /*margin-left: 10px;*/
}

p {
  text-align: center;
}

h3,
h4 {
  color: black;
  text-align: center;
  font-size: 15px;
}
.dame {
  width: 80% !important;
}
.cart {
  float: right;
  margin-right: 4px;
}

a:link {
  color: black;
}

.Items-row-price h3 {
  color: green;
}
a {
  color: black;
}
</style>
