<template>
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      size="small"
      @click="changeMenu(tag)"
      :closable="tag.name != 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @close="handelClose(tag, index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabslist,
    }),
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    },
    handelClose(tag, index) {
      let length = this.tags.length - 1;
      // console.log(this.tags);
      this.close(tag);
      //经过上面这一步，数据已经变化，数组的length已经减一
      // console.log(this.tags);
      //第一种情况,关闭的不是当前展示的组件，则直接return
      // if (tag.name !== this.$route.name) {
      //   return;
      // }
      //如果关闭的是最后一个，则应该往左边跳转，否则左边跳转
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        console.log(index);

        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>

<style scoped>
.tabs {
  padding: 20px;
}
.el-tag {
  margin-right: 15px;
  cursor: pointer;
}
</style>