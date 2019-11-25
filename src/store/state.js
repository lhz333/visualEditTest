const state = {
  pageModules: sessionStorage.getItem("pageModules")
    ? JSON.parse(sessionStorage.getItem("pageModules"))
    : { list: [] }
};

export default state;