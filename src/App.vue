<template >
  <div id="app">
    <div class="content">
      <sidebar-component />
      <transition name="moveInUp">
        <router-view />
      </transition>
    </div>
    <playbar-component />
  </div>
</template>

<script>
import SidebarComponent from "./components/Sidebar/sidebar-component";
import PlaybarComponent from "./components/Playbar/playbar-component";

export default {
  name: "App",
  components: {
    SidebarComponent,
    PlaybarComponent
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap");
* {
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

body {
  margin: auto;
  background-color: #121212;
}

:root {
  --white: #FFFFFF;
  --green: #1DB954;
  --gray: #B3B3B3;
  --dark: #282828;
  --darkest: #121212;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background: #282828;
  border-radius: 10px;
  transition: all 0.3s;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(40, 40, 40, 0.856);
}

.container {
  width: 100%; 
  height: 88vh;
  color: white;
  overflow-y: scroll;
  position: relative;
  align-items: center;
}

.content {
  display: flex;
}

.moveInUp-enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}

.moveInUp-leave-active {
  animation: moveInUp 0.3s ease-in;
}

@keyframes moveInUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
