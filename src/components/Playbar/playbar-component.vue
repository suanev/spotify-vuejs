<template>
  <container>
    <div class="playbar-content-style">
      <div class="song-name">
        <div class="songs-text">
          <h3>{{ song.title }}</h3>
          <h4>{{ song.artist }}</h4>
        </div>
        <div class="icons-song">
          <i
            class="material-icons"
            :class="`${song.liked ? `favorite` : ``}`"
            @click="setLikeStatus()"
          >favorite</i>
          <i class="material-icons">picture_in_picture_alt</i>
        </div>
      </div>

      <div class="playbar-style">
        <div class="buttons-playbar">
          <button>
            <i class="material-icons favorite suffle-repeat">shuffle</i>
          </button>
          <button>
            <i class="material-icons favorite prev-next">skip_previous</i>
          </button>
          <button @click="toggleStatusSong()">
            <i
              v-if="!isPlaying"
              key="playing"
              class="material-icons favorite play-button"
            >play_circle_outline</i>
            <i v-else key="paused" class="material-icons favorite play-button">pause_circle_outline</i>
          </button>
          <button>
            <i class="material-icons favorite prev-next">skip_next</i>
          </button>
          <button>
            <i class="material-icons favorite suffle-repeat">repeat</i>
          </button>
        </div>
        <div class="playbar">
          <p class="currentTime">{{ currentlyTimer }}</p>
          <div class="slider">
            <input
              id="progress"
              type="range"
              value="0"
              min="0"
              :max="this.formatTimer()"
              ref="progress"
            />
          </div>
          <p class="duration">{{ song.duration }}</p>
        </div>
      </div>

      <div class="volum-bar">
        <i class="material-icons">playlist_play</i>
        <i class="material-icons">important_devices</i>
        <i class="material-icons">volume_up</i>
        <input id="volum" type="range" min="0" max="100" />
      </div>
    </div>
  </container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Container from "./styles";
export default {
  name: "PlaybarComponent",
  components: {
    Container,
  },
  data() {
    return {
      player: 0,
      isPlaying: false,
      date: new Date(),
      currentlyTimer: "0:00",
    };
  },
  methods: {
    ...mapActions(["getSong", "setSong"]),

    setLikeStatus() {
      this.song.liked = !this.song.liked;
    },

    formatTimer() {
      const [minutes, seconds] = this.song.duration.split(":");
      return parseInt(minutes) * 60 + parseInt(seconds);
    },

    toggleStatusSong() {
      this.isPlaying = !this.isPlaying;
      const [minutes, seconds] = this.currentlyTimer.split(":");
      this.date.setMinutes(parseInt(minutes));
      this.date.setSeconds(parseInt(seconds));
      this.isPlaying ? this.play() : this.pause();
    },

    play() {
      this.player = setInterval(() => {
        let minutes = this.date.getMinutes();
        let seconds = this.date.getSeconds();

        const progress = this.$refs.progress.value;
        this.$refs.progress.value = (parseInt(progress) + 1).toString();

        this.currentlyTimer =
          seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;

        this.date.setSeconds(seconds + 1);
      }, 1000);
    },

    pause() {
      this.isPlaying = false;
      clearInterval(this.player);
    },
  },
  computed: mapGetters(["song"]),
  created() {
    this.getSong();
  },
  mounted() {
    this.$root.$on("play", () => {
      this.toggleStatusSong();
    });
  },
};
</script>
