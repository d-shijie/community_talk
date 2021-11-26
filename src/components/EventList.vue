<template>
  <div class="event-list">
    <div
      @click="gotoEvent(item)"
      class="item"
      v-for="(item, index) in events"
      :key="item.id"
    >
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
export default {
  props: {
    events: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    gotoEvent(item) {
      this.$store.commit("setProfileInfo", item);
      this.$router.push("/event");
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