<template>
  <div class="container">
    <navbar-component />
    <list-component />
  </div>
</template>

<script>
import NavbarComponent from "../Navbar/navbar-component";
import ListComponent from '../List/list-component'

export default {
  name: "PlaylistComponent",
  components: {
    NavbarComponent,
    ListComponent
  }
};
</script>
