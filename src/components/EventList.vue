<template>
  <div class="event-list">
    <Alert
      @confirm="confirm"
      @cancle="cancle"
      :wranText="warnText"
      :show="show2"
    ></Alert>
    <div
      @click="gotoEvent($event, item)"
      class="item"
      v-for="(item, index) in events"
      :key="item.id"
    >
      <div @click="showAlert($event, item.id)" v-if="show" class="delete">
        X
      </div>
      <div class="username">
        {{ item.name }}
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="content">{{ item.content }}</div>
      <div class="img">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "../components/Alert.vue";
import { deleteEvent } from "../axios/events";
export default {
  props: {
    events: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Alert,
  },
  data() {
    return {
      show2: false,
      warnText: "确认是否删除",
      itemId: null,
    };
  },
  created() {},
  computed: {
    show() {
      return this.$route.path.indexOf("/profile") !== -1;
    },
  },
  methods: {
    gotoEvent(e, item) {
      e.preventDefault();
      e.stopPropagation();
      this.$store.commit("setProfileInfo", item);
      this.$router.push("/event/" + item.id);
    },
    showAlert(e, item) {
      e.stopPropagation();
      e.preventDefault();
      this.show2 = true;
      this.itemId = item;
    },
    cancle() {
      this.show2 = false;
    },
    confirm() {
      let body = {};
      body.id = this.itemId;
      deleteEvent(body)
        .then((res) => {
          console.log(res);
          window.location.reload();
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
.item {
  margin: 0 5px 10px 5px;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px;
  position: relative;
}
.delete {
  position: absolute;
  right: 7px;
  top: 2px;
  color: rgb(117, 117, 117);
}
.username {
  font-size: 12px;
}
.title {
  margin-top: 3px;
  font-size: 14px;
  font-weight: 600;
}
.content {
  margin: 3px 0;
  font-size: 12px;
}
.img {
  width: 100%;
  height: 100px;
}
.img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>