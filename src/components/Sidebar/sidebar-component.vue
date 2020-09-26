<template>
  <container>
    <div class="logo-style">
      <a href="/"><img src="../../assets/icons/whitelogo.png" /></a>
    </div>
    <div class="menu-style">
      <button
        v-for="page in pages"
        :key="page.id"
        @click="setID(page.id)"
        :class="`${idPage === page.id ? `focus-menu-style` : `without-focus-menu-style`}`"
      >
        <i class="material-icons">{{ page.icon }}</i>
        <p>{{ page.name }}</p>
      </button>
    </div>

    <div class="playlists-style">
      <h3>Playlists</h3>
      <button>
        <img src="../../assets/icons/addnew.png" alt="Add new playlist" />
        <p>Create playlist</p>
      </button>
      <button>
        <img src="../../assets/icons/likedsongs.png" alt="Liked Songs" />
        <p>Liked songs</p>
      </button>

      <div class="column-style" />

      <div class="your-library-style">
        <p v-for="playlist in playlists" :key="playlist.id">{{ playlist.title }}</p>
      </div>

      <div class="column-style" />

      <div class="install-app-style">
        <i class="material-icons">arrow_circle_down</i>
        <p>Install app</p>
      </div>
    </div>

    <div class="album-style">
      <div class="infos-styles">
        <div class="icon-style">
          <i class="material-icons">keyboard_arrow_down</i>
        </div>
      </div>
      <img :src="require(`../../assets/albums/${song.src}`)" :alt="song.title" />
    </div>
  </container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Container from "./styles";
export default {
  name: "SidebarComponent",
  components: {
    Container,
  },
  data() {
    return {
      pages: [
        { id: "home", name: "Home", icon: "home" },
        { id: "search", name: "Search", icon: "search" },
        { id: "library", name: "Your Library", icon: "bar_chart" },
      ],
      idPage: "home",
    };
  },
  methods: {
    ...mapActions(["getSong", "getPlaylists"]),

    setID(id) {
      this.idPage = id;
    }
  },
  computed: mapGetters(["song", "playlists"]),
  created() {
    this.getSong();
    this.getPlaylists();
  },
};
</script>
