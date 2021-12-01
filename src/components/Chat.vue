<template>
  <div class="chat">
    <div class="top">
      <span @click="back" class="el-icon-arrow-left"> </span>
      <span>{{ info.username }}</span>
      <span>更多</span>
    </div>
    <Scroll ref="scroll" :scrollToEndFlag="true" class="content">
      <div class="chat-box">
        <div class="item" v-for="item in chatList" :key="item.id">
          <span :class="{ my: item.userId == UserId }"
            ><img
              @load="imgLoad"
              :src="item.userId == UserId ? headImg : info.headImg"
              alt=""
          /></span>
          <div class="box" :class="{ right: item.userId == UserId }">
            <div v-show="item.userId != UserId" class="left-icon"></div>
            <span class="msg" :class="{ my2: item.userId == UserId }">{{
              item.msg
            }}</span>
            <div v-show="item.userId == UserId" class="right-icon"></div>
          </div>
        </div>
      </div>
    </Scroll>
    <div class="input">
      <input v-model="message" type="text" />
      <el-button @click="send" size="mini" round>发送</el-button>
    </div>
  </div>
</template>

<script>
import { getUserDetail } from "../axios/userDetail";
import { sendMessage, getMessages } from "../axios/chat";
import Scroll from "./Scroll.vue";
export default {
  data() {
    return {
      info: {
        username: "",
        headImg: "",
      },
      headImg: "",
      message: "",
      chatList: [],
    };
  },
  components: {
    Scroll,
  },
  computed: {
    UserId() {
      return window.sessionStorage.getItem("userId");
    },
  },
  created() {
    getUserDetail(this.$route.params.id)
      .then((res) => {
        this.info.username = res.data.username;
        this.info.headImg = res.data.headImg;
      })
      .catch((err) => {
        console.log(err);
      });
    getUserDetail(window.sessionStorage.getItem("userId"))
      .then((res) => {
        this.headImg = res.data.headImg;
      })
      .catch((err) => {
        console.log(err);
      });
    this.getMessages();
  },
  mounted() {},
  methods: {
    back() {
      this.$router.back();
    },
    getMessages() {
      getMessages(
        window.sessionStorage.getItem("userId"),
        this.$route.params.id
      )
        .then((res) => {
          this.chatList = res.data.rows;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    imgLoad() {
      this.$refs.scroll.refresh();
    },
    send() {
      let body = {};
      body.userId = window.sessionStorage.getItem("userId");
      body.followId = this.$route.params.id;
      body.msg = this.message;
      sendMessage(body)
        .then((res) => {
          this.getMessages();
          this.message = "";
          // this.$refs.scroll.scrollEnd();
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
.content {
  height: 74vh;
  overflow: hidden;
}
.top {
  position: relative;
  z-index: 1000;
  display: flex;
  padding: 10px 0;
  background-color: #fff;
  align-content: center;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
.top span:nth-child(1) {
  margin-left: 10px;
}
.top span:nth-child(3) {
  margin-right: 10px;
  color: rgb(131, 131, 131);
}
.top span:nth-child(2) {
  flex: 1;
  font-size: 16px;
  text-align: center;
}
.chat-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.input {
  position: fixed;
  bottom: 49px;
  width: 100%;
  background-color: #f2f2f2;
  border-top: 1px solid #ccc;
  display: flex;
  padding-bottom: 17px;
  justify-content: space-around;
}
input {
  width: 70%;
  position: relative;
  top: 10px;
  border-radius: 10px;
}
.el-button {
  position: relative;
  top: 10px;
}
.item {
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 5px;
}
.item img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.box {
  width: 50vw;
}
.msg {
  margin-left: 5px;
  background-color: rgb(147, 147, 255);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  position: relative;
  top: 5px;
}
.my {
  position: relative;
  right: -80vw;
}
.right {
  position: relative;
  right: -16vw;
  top: 10px;
  text-align: right;
  color: #fff;
}
.left-icon,
.right-icon {
  width: 0;
  height: 0;
  position: relative;
}
.left-icon {
  border-right: 5px solid rgb(147, 147, 255);
  border-bottom: 5px solid transparent;
  border-top: 5px solid rgb(147, 147, 255);
  border-left: 5px solid transparent;
  top: 14px;
  right: -5px;
}
.right-icon {
  border-right: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-top: 5px solid rgb(147, 147, 255);
  border-left: 5px solid rgb(147, 147, 255);
  top: -16px;
  right: -151px;
}
</style>