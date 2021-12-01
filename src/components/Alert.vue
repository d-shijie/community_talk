<template>
  <div class="alert" v-if="show">
    <div class="warn-text">
      {{ wranText }}
    </div>
    <div class="btns">
      <el-button @click="confirm" size="mini" round>确认</el-button>
      <el-button @click="cancle" size="mini" round>取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    wranText: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancle() {
      this.$emit("cancle");
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.alert {
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: #f2f2f2;
  z-index: 1000;
  border-radius: 10px;
  padding: 10px;
  transform: translate(-50%, -50%);
}
.warn-text {
  margin-bottom: 15px;
  color: blue;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
}
.btns {
  display: flex;
}
</style>