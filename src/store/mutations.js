const mutations = {
  setPageModules: (state, value) => {
    state.pageModules = value;
    sessionStorage.setItem("pageModules", JSON.stringify(value));
  },
  changeSelectedModules: (state, value) => {
    state.selectedModules = value;
    sessionStorage.setItem("selectedModules", JSON.stringify(value));
  }
};

export default mutations;
