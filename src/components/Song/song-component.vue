<template>
  <container>
      <div class="title">
        <h4>Title</h4>
        <p>Artist</p>
        <p>Album</p>
        <h5>
          <i class="material-icons">schedule</i>
        </h5>
      </div>
      <div class="song" v-for="song in playlist.songs" :key="song.id" @click="clickSong(song)">
        <span @click="song.liked = !song.liked">
          <i class="material-icons" v-if="song.liked" key="liked">favorite_outline</i>
          <i class="material-icons" v-else key="unliked">favorite</i>
        </span>
        <h4>{{ truncate(song.title, 40) }}</h4>
        <p>{{ truncate(song.artist, 30) }}</p>
        <p>{{ truncate(song.album, 40) }}</p>
        <h5>{{ song.duration }}</h5>
      </div>
  </container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Container } from "./styles";
export default {
  name: "SongComponent",
  components: {
    Container
  },
  data() {
    return {
      playButton: "pause",
    };
  },
  methods: {
    ...mapActions(["getNowPlaying"]),

    clickSong(song) {
      const addNowPlaying = {
        id: song.id,
        src: this.playlist.src,
        title: song.title,
        artist: song.artist,
        album: song.album,
        duration: song.duration,
        liked: song.liked,
        isPlaying: song.isPlaying,
      };
      const nowPlaying = [...song, addNowPlaying];
      this.$root.$emit("play");
      this.getNowPlaying(nowPlaying);
    },
    truncate(title, limit) {
      return (title.length > limit) ? `${title.substring(0, limit)}...` : title;
    }
  },
  computed: mapGetters(["playlist", "song"])
};
</script>
