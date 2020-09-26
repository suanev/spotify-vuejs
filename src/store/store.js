import Vue from 'vue'
import Vuex from 'vuex'
import playlists from './playlists'
import nowPlaying from './nowPlaying'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        playlists,
        nowPlaying
    }
})