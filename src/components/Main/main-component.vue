<template>
  <div class="container">
    <navbar-component />
    <card-component name="Recently Played" />
    <card-component name="Popular Playlist" />
    <card-component name="Made For You" />
  </div>
</template>

<script>
import NavbarComponent from "../../components/Navbar/navbar-component";
import CardComponent from "../../components/Card/card-component";
export default {
  name: "MainComponent",
  components: {
    NavbarComponent,
    CardComponent,
  },
};
</script>
