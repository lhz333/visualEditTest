const mutations = {
  setPageModules: (state, value) => {
    state.pageModules = value;
    sessionStorage.setItem("pageModules", JSON.stringify(value));
  }
};

export default mutations;
