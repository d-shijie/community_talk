<template>
  <div>
    <alert
      :show="showAlert"
      @cancle="cancle"
      @confirm="confirm"
      :wranText="warnText"
    ></alert>
    <div class="top">
      <div class="title">
        消息
        <span @click="over" v-if="show" class="over">完成</span>
        <span @click="setting" v-else class="el-icon-setting"></span>
      </div>
      <div class="tags">
        <el-tag @click="getFollowList" :class="{ active: flag === 0 }"
          >关注</el-tag
        >
        <el-tag @click="getFollowedList" :class="{ active: flag === 1 }"
          >粉丝</el-tag
        >
      </div>
    </div>
    <div class="follow-list">
      <div class="item" v-for="item in list" :key="item.userId">
        <span
          ><img
            @click="gotoUserDetail(item.userid, item.followId)"
            :src="item.headImg"
            alt=""
        /></span>
        <span @click="gotochat(item.userid, item.followId)" class="name">{{
          item.username
        }}</span>
        <span
          @click="cancleFollow(item.userId, item.followId)"
          v-if="show && flag === 0"
          class="cancle"
          >取消关注</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getFollowList, getFollowedList, deleteFollow } from "../axios/follow";
import Alert from "./Alert.vue";
export default {
  data() {
    return {
      list: [],
      flag: 0,
      show: false,
      showAlert: false,
      warnText: "是否取消关注",
      body: {},
    };
  },
  components: {
    Alert,
  },
  created() {
    this.getFollowList();
  },
  methods: {
    getFollowList() {
      getFollowList(window.sessionStorage.getItem("userId"))
        .then((res) => {
          this.list = res.data.rows;
          this.flag = 0;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getFollowedList() {
      getFollowedList(window.sessionStorage.getItem("userId"))
        .then((res) => {
          this.list = res.data.rows;
          this.flag = 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    gotoUserDetail(userId, followId) {
      if (this.flag === 0) {
        this.$router.push("/userDetail/" + followId);
      } else if (this.flag === 1) {
        this.$router.push("/userDetail/" + userId);
      }
    },
    gotochat(userId, followId) {
      if (this.flag === 0) {
        this.$router.push("/chat/" + followId);
      } else if (this.flag === 1) {
        this.$router.push("/chat/" + userId);
      }
    },
    setting() {
      if (this.flag === 0) {
        this.show = true;
      }
    },
    over() {
      this.show = false;
    },
    cancleFollow(userId, followId) {
      this.showAlert = true;
      this.body.userId = userId;
      this.body.followId = followId;
    },
    cancle() {
      this.showAlert = false;
      this.body = {};
    },
    confirm() {
      this.showAlert = false;
      deleteFollow(this.body)
        .then((res) => {
          this.getFollowList();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */

.title {
  text-align: center;
  margin: 5px 0;
  position: relative;
}
.title .over {
  color: rgb(255, 81, 81);
  position: absolute;
  font-size: 14px;
  top: 2px;
}
.cancle {
  font-size: 12px;
  margin-right: 10px;
  padding: 5px;
  color: #fff;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 1px solid #ccc;
  background-color: rgb(255, 86, 86);
}
.title span {
  position: absolute;
  right: 10px;
  top: 5px;
}
.tags {
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.follow-list {
  margin-top: 15px;
}
.item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.item:nth-child(even) {
  background-color: #f2f2f2;
}
.item span img {
  width: 40px;
  padding: 5px 10px;
  height: 40px;
  border-radius: 50%;
}
.name {
  font-size: 14px;
  flex: 1;
  color: rgb(166, 166, 255);
}
.active {
  color: red;
  background-color: rgb(213, 213, 255);
}
</style>