<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.tab-bar {
  height: 49px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f2f2f2;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  justify-content: space-around;
}
</style>