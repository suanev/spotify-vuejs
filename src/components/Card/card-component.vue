<template>
  <container>
    <div>
      <card>
        <div class="section-name">
          <h1>{{ name }}</h1>
          <h2>See All</h2>
        </div>

        <div class="cards-style">
          <div class="card" v-for="playlist in playlists" :key="playlist.id">
            <router-link
              :to="{ name: 'Playlist', params: { id: playlist.id }}"
              style="text-decoration: none;"
            >
              <div class="play-button-container" @click="setPlaylistState()">
                <div class="play-button">
                  <i class="material-icons" v-if="!isPlaying" key="playing">play_arrow</i>
                  <i class="material-icons" v-else key="paused">pause</i>
                </div>
              </div>
              <img :src="require(`../../assets/albums/${playlist.src}`)" :alt="playlist.title" />
              <h1>{{ playlist.title }}</h1>
              <h3>{{ truncate(playlist.description, 40) }}</h3>
            </router-link>
          </div>
        </div>
      </card>
    </div>
  </container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Container, Card } from "./styles";

export default {
  name: "CardComponent",
  components: {
    Container,
    Card,
  },
  props: {
    name: String,
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    ...mapActions(["getPlaylists"]),

    setPlaylistState() {
      this.isPlaying = !this.isPlaying;
      this.$root.$emit("play");
    },

    truncate(title, limit) {
      return (title.length > limit) ? `${title.substring(0, limit)}...` : title;
    }
  },
  computed: mapGetters(["playlists"]),
  created() {
    this.getPlaylists();
  },
};
</script>
