<template>
  <div class="user-detail">
    <div @click="back" class="el-icon-arrow-left"></div>
    <div class="head">
      <img :src="userInfo.headImg" alt="" />
    </div>
    <div class="item username">昵称: {{ userInfo.username }}</div>
    <div class="item sex">性别: {{ userInfo.sex }}</div>
    <div class="item sex">年龄: {{ userInfo.age }}</div>
    <div class="item desc">描述: {{ userInfo.desc }}</div>
    <el-button v-show="showBtn" size="mini" round>修改资料</el-button>
  </div>
</template>

<script>
import { getUserDetail } from "../axios/userDetail";
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  created() {
    getUserDetail(this.$route.params.id)
      .then((res) => {
        console.log(res);
        this.userInfo = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    showBtn() {
      if (window.sessionStorage.getItem("userId") === this.$route.params.id) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.head {
  display: flex;
  padding: 10px;
  margin: 20px 0;
  justify-content: space-around;
}
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.user-detail {
  position: relative;
}
.user-detail div:nth-child(1) {
  position: fixed;
  top: 10px;
  left: 10px;
}
.item {
  margin: 15px 0 15px 15px;
  color: rgb(116, 116, 116);
}
.el-button {
  position: absolute;
  left: 50%;
  margin-top: 20px;
  transform: translateX(-50%);
}
</style>