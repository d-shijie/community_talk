<template>
  <div @click="shiftPage" class="tabber-item">
    <div v-if="isActive" class="item-active">
      <slot name="item-active"></slot>
    </div>
    <div v-else class="item-icon"><slot name="item-icon"></slot></div>
    <div :class="{ active: isActive }" class="item-text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
  },
  created() {},
  methods: {
    shiftPage() {
      this.$router.push(this.path);
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.tab-bar-item {
  text-align: center;
}
.item-text {
  font-size: 12px;
}
.active {
  color: rgb(107, 107, 255);
}
</style>