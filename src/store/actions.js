const actions = {
  setPageModules: ({ commit }, value) => {
    commit("setPageModules", value);
  },
  changeSelectedModules: ({ commit }, value) => {
    commit("changeSelectedModules", value);
  }
};
export default actions;
