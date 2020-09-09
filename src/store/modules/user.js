const user = {
  state: {
    info: ""
  },
  mutations: {
    SET_INFO: (state, info) => {
      state.info = info;
    }
  },

  actions: {
    // 登出
    Logout({ commit, state }) {
      commit("SET_INFO", "");
      console.log('登出',state);
      sessionStorage.removeItem("userData");
    }
  }
};

export default user;
