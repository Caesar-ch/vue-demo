<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu "
        size="mini"
        @click="handleMenu"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current"
          >{{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" szie="mini">
        <span class="el-dropdown-link">
          <img class="user" :src="userimg" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      userimg: require("../assets/Snipaste_2022-01-02_13-07-28.jpg"),
    };
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
};
</script>

<style  scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  display: flex;
  align-items: center;
}
.el-button {
  margin-right: 20px;
}
.user {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>