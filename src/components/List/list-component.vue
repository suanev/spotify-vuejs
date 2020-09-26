<template>
  <container>
    <information>
      <img :src="require(`../../assets/albums/${playlist.src}`)" :alt="playlist.title" />

      <div class="info">
        <h5>Playlist</h5>
        <h1>{{ playlist.title }}</h1>
        <h6>{{ playlist.description}}</h6>
        <p>
          Created by
          <strong>{{playlist.artist}}</strong>
          • {{ playlist.songs.length}} songs, {{playlist.duration}}
        </p>
        <button class="play-button" @click="setPlayState()">{{ playButton }}</button>
        <button class="more-infos">
          <i
            class="material-icons"
            :class="`${song.liked ? `favorite` : ``}`"
            @click="song.liked = !song.liked"
          >favorite</i>
          <i class="material-icons">more_horiz</i>
        </button>
      </div>
    </information>

    <song-component />
  </container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SongComponent from "../Song/song-component";
import { Container, Information } from "./styles";
export default {
  name: "ListComponent",
  components: {
    Container,
    Information,
    SongComponent
  },
  data() {
    return {
      playButton: "pause",
    };
  },
  methods: {
    ...mapActions(["getPlaylistById"]),

    setPlayState() {
      this.playButton = this.playButton === "pause" ? "play" : "pause";
      this.$root.$emit("play");
    }
  },
  computed: mapGetters(["playlist", "song"]),
  created() {
    this.getPlaylistById(this.$route.params.id);
  },
};
</script>
