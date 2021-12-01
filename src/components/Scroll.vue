<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    scrollToEndFlag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
    });
    this.scrollEnd();
    // this.scroll.scrollTo(0,this.scroll.maxScrollY,0)
  },
  methods: {
    scrollEnd() {
      setTimeout(() => {
        if (this.scrollToEndFlag) {
          this.scroll.scrollTo(0, this.scroll.maxScrollY);
        }
      }, 100);
    },
    refresh() {
      this.scroll.refresh();
    },
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */
</style>