const state = {
  pageModules: sessionStorage.getItem("pageModules") ? JSON.parse(sessionStorage.getItem("pageModules")) : { list: [] },
  selectedModules: sessionStorage.getItem("selectedModules") ? JSON.parse(sessionStorage.getItem("selectedModules")) : {}
};

export default state;
