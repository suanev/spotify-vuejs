<template>
  <container>
    <div class="buttons-style">
      <button class="left">
        <a href="/"><i class="material-icons">keyboard_arrow_left</i></a>
      </button>
      <button>
        <i class="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
    <div class="user-infos">
      <button @click="showDropDown = true">
        <i class="material-icons">person_outline</i>
        <p>Suane Vallim</p>
        <i class="material-icons" v-if="!showDropDown" key="opened">arrow_drop_down</i>
        <i class="material-icons" v-else key="closed">arrow_drop_up</i>
      </button>
      <div class="drop-down-menu" v-if="showDropDown">
        <button @click="setDropDownStatus()">Account</button>
        <button @click="setDropDownStatus()">Log out</button>
      </div>
    </div>
  </container>
</template>

<script>
import Container from "./styles";
export default {
  name: "NavbarComponent",
  components: {
    Container
  },
  data() {
    return {
      showDropDown: false
    }
  },
  methods: {
    setDropDownStatus() {
      this.showDropDown = false;
    }
  }
};
</script>
