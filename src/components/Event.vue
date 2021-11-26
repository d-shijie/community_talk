<template>
  <div class="event">
    <div class="top">
      <div class="tag" v-if="userInfo.category === 0">推荐区</div>
      <div class="tag" v-if="userInfo.category === 1">生活区</div>
      <div class="tag" v-if="userInfo.category === 2">政治区</div>
      <div class="tag" v-if="userInfo.category === 3">娱乐区</div>
    </div>
    <div class="event-detail">
      <div class="title">
        {{ userInfo.title }}
      </div>
      <div class="user">
        <div @click="gotoUserDetail" class="head">
          <img :src="headImg" alt="" />
        </div>
        <div @click="gotoUserDetail" class="username">
          <span> {{ userInfo.name }}</span>
          <span>{{ interval | timeFormat }}</span>
        </div>
        <el-button size="mini" round>关注</el-button>
      </div>
      <div class="content">
        {{ userInfo.content }}
      </div>
    </div>
    <div class="command">
      <div class="header">
        <span>全部评论</span>
        <el-button size="mini" round>评论</el-button>
      </div>
      <div @click="gotoUserDetail2(item.userId)" class="commamd-item" v-for="(item, index) in commands" :key="index">
        <div class="name">{{ item.name }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserDetail } from "../axios/userDetail";
export default {
  data() {
    return {
      userInfo: {},
      headImg: "",
      interval: 0,
      commands: [
        {
          name: "用户名",
          userId: 0,
          content: "评论内容",
        },
        {
          name: "用户名1",
          userId: 0,
          content: "评论内容1",
        },
        {
          name: "用户名2",
          userId: 0,
          content: "评论内容2",
        },
      ],
    };
  },
  created() {
    this.userInfo = this.$store.state.profileInfo;
    getUserDetail(this.userInfo.userId)
      .then((res) => {
        this.headImg = res.data.headImg;
      })
      .catch((err) => {
        console.log(err);
      });
    let nowFDate = Date.now();
    let timestamp = new Date(this.userInfo.createdAt).getTime();
    let interval = nowFDate - timestamp;
    this.interval = interval;
  },
  methods: {
    gotoUserDetail() {
      this.$router.push("/userDetail/" + this.userInfo.userId);
    },
    gotoUserDetail2(id){
        this.$router.push('/userDetail/'+id)
    }
  },
  filters: {
    timeFormat(value) {
      let time = (value / 1000 / 60 / 24).toFixed(0);
      if (time >= 24) {
        return (time / 24).toFixed(0) + "天前";
      } else {
        if (time > 0) {
          return time + "小时前";
        } else {
          return "刚刚";
        }
      }
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.event {
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
}
.top {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* position: relative; */
  padding: 10px 0;
}
.tag {
  width: 40%;
  border-radius: 15px;
  padding: 2px 0;
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
  background-color: #ccc;
  color: rgb(121, 121, 253);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
}
.event-detail {
  background-color: #fff;
  padding: 5px 10px;
}
.user {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.user .head img {
  width: 40px;
  border-radius: 50%;
  height: 40px;
}
.user .username {
  font-size: 13px;
  margin-left: 5px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  color: rgb(104, 104, 255);
}
.user .username span:nth-child(1) {
  margin-top: -5px;
}
.user .username span:nth-child(2) {
  margin-top: 5px;
  color: #ccc;
}
.title {
  font-size: 18px;
  font-weight: 600;
}
.content {
  font-size: 14px;
  margin-bottom: 10px;
}
.command {
  margin-top: 10px;
  background-color: #fff;
  padding: 10px;
}
.header {
  display: flex;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 15px;
}
.header span:nth-child(1) {
  flex: 1;
}
.commamd-item {
  border-bottom: 1px solid #eee;
}
.name {
  font-size: 12px;
  margin: 10px 0;
}
.content {
  font-size: 14px;
  font-weight: 550;
}
</style>