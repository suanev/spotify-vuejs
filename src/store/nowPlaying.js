import url from "../service/apiRequest";

const state = {
  nowPlaying: {}
};

const getters = {
  song: state => state.nowPlaying
};

const actions = {
  async getSong({ commit }) {
    const response = await url.get("/nowPlaying");

    commit("setSong", response.data);
  },
  async getNowPlaying({ commit }, song) {
    await url.patch("/nowPlaying", song);

    commit("setNowPlaying", song);
  }
};

const mutations = {
  setSong: (state, song) => (state.nowPlaying = song)
};

export default { state, getters, actions, mutations };