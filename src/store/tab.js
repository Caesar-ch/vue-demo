export default {
  state: {
    isCollapse: false,
    currentMenu: '/main',
    tabslist: [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: 'home'
      }
    ]
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    slectMenu(state, val) {
      val.name === 'home' ? (state.currentMenu = null) : state.currentMenu = val
      if (val.name === 'home') {
        state.currentMenu = null
      } else {
        state.currentMenu = val
        let result = state.tabslist.findIndex(item => item.name == val.name)
        result === -1 ? state.tabslist.push(val) : ''
      }
    },
    closeTag(state, val) {
      let result = state.tabslist.findIndex(item => item.name === val.name)

      state.tabslist.splice(result, 1)
    }
  }

}