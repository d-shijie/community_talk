<template>
  <div class="user-detail">
    <div @click="back" class="el-icon-arrow-left"></div>
    <el-button class="logout" v-show="showBtn" @click="logout">退出登录</el-button>
    <div class="head">
      <img :src="userInfo.headImg" alt="" />
    </div>
    <div class="item username">昵称: {{ userInfo.username }}</div>
    <div class="item sex">性别: {{ userInfo.sex }}</div>
    <div class="item sex">年龄: {{ userInfo.age }}</div>
    <div class="item desc">描述: {{ userInfo.desc }}</div>
    <el-button @click="showIpts" v-show="showBtn" size="mini" round
      >修改资料</el-button
    >

    <div class="ipts" v-if="show">
      <input v-model="body.sex" placeholder="性别" type="text" />
      <input v-model="body.age" placeholder="年龄" type="text" />
      <textarea v-model="body.desc" placeholder="描述"></textarea>
      <button class="submit" @click="changeInfo">提交</button>
    </div>
  </div>
</template>

<script>
import { getUserDetail, putUserDetail } from "../axios/userDetail";
export default {
  data() {
    return {
      userInfo: {},
      show: false,
      body: {
        sex: "",
        age: "",
        desc: "",
        username: "",
      },
    };
  },
  created() {
    getUserDetail(this.$route.params.id)
      .then((res) => {
        this.userInfo = res.data;
        this.body.username = res.data.username;
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
    getUserDetail() {
      getUserDetail(this.$route.params.id)
        .then((res) => {
          this.userInfo = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back() {
      this.$router.back();
    },
    showIpts() {
      this.show = true;
    },
    changeInfo() {
      this.show = false;
      putUserDetail(this.body)
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });
      window.location.reload();
    },
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
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
.user-detail .el-button {
  position: absolute;
  left: 50%;
  margin-top: 20px;
  transform: translateX(-50%);
}
.ipts {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 80%;
  top: 100%;
  left: 50%;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
  justify-content: space-around;
  transform: translate(-50%, -50%);
  padding: 10px;

  background-color: #f2f2f2;
}
input {
  margin: 10px 0;
  padding: 2px;
  width: 40%;
  height: 20px;
  border-radius: 10px;
}
textarea {
  width: 80%;
  height: 50px;
  resize: none;
  margin: 10px 0;
}
.submit {
  margin: 10px 0;
  width: 20%;
  position: absolute;
  left: 70%;
  top: 20%;
  padding: 3px;
  background-color: rgb(183, 183, 255);
  border-radius: 10px;
  border: 1px solid #ccc;
}
.logout {
  position: fixed !important;
  top: 60vh;
}
</style>