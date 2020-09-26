import Vue from 'vue'
import VueRouter from 'vue-router'
import MainComponent from '../components/Main/main-component.vue'
import PlaylistComponent from '../components/Playlist/playlist-component.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes : [
    {
      path: "/",
      name: "Home",
      component: MainComponent
    },
    {
      path: "/playlist/:id",
      name: "Playlist",
      component: PlaylistComponent
    },
    {
      path: "/*",
      redirect: '/'
    },
  ]
});

export default router;