import url from "../service/apiRequest";

const state = {
  playlist: {},
  playlists: [],
};

const getters = {
  playlists: (state) => state.playlists,
  playlist: (state) => state.playlist,
};

const actions = {
  async getPlaylists({ commit }) {
    const response = await url.get("/playlists");

    commit("setPlaylists", response.data);
  },
  async getPlaylistById({ commit }, id) {
    const response = await url.get(`/playlists/${id}`);

    commit("setPlaylist", response.data);
  },
};

const mutations = {
  setPlaylists: (state, playlists) => (state.playlists = playlists),
  setPlaylist: (state, playlist) => (state.playlist = playlist),
};

export default { state, getters, actions, mutations };