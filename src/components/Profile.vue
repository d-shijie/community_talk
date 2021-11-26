<template>
  <div class="profile">
    <div @click="gotoUserDetail" class="top">
      <div class="headImg">
        <img :src="userData.headImg" alt="" />
      </div>
      <div class="username">
        {{ userData.username }}
      </div>
      <div class="sex">
        <img
          v-if="userData.sex === '女'"
          src="../assets/img/sex/woman.svg"
          alt=""
        />
        <img
          v-if="userData.sex === '男'"
          src="../assets/img/sex/man.svg"
          alt=""
        />
      </div>
      <div class="el-icon-arrow-right" :class="{ right: true }"></div>
    </div>
    <header>我的动态</header>
    <event-list :events="events"></event-list>
  </div>
</template>

<script>
import { getUserDetail } from "../axios/userDetail";
import { getUserEvents } from "../axios/events";
import EventList from "./EventList.vue";
export default {
  data() {
    return {
      userData: {},
      events: [],
    };
  },
  components: {
    EventList,
  },
  created() {
    getUserDetail(window.sessionStorage.getItem("userId"))
      .then((res) => {
        this.userData = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    getUserEvents(window.sessionStorage.getItem("userId"))
      .then((res) => {
        this.events = res.data.rows.reverse();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    gotoUserDetail() {
      this.$router.push("/userDetail/" + this.userData.userid);
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.profile {
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
}
.top {
  background-color: #fff;
  position: relative;
  padding: 10px;
  display: flex;
  align-items: center;
}
.headImg {
  width: 70px;
  height: 70px;
}
.headImg img {
  width: 100%;
  border-radius: 50%;
  height: 100%;
}
.username {
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
}
.sex img {
  width: 12px;
  margin-left: 3px;
}
.right {
  position: absolute;
  right: 10px;
}
header {
  margin: 10px 0 5px 10px;
  font-size: 14px;
  color: rgb(108, 108, 255);
}
</style>