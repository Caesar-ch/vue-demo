<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <el-header><CommonHeader></CommonHeader> </el-header>
      <CommonTag></CommonTag>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonTag from "../components/CommonTag.vue";
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
export default {
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
};
</script>

<style scoped>
.el-header {
  background-color: black;
}
.el-main {
  padding-top: 0;
}
.el-container {
  height: 100%;
  background-color: rgb(236, 230, 230);
}
</style>