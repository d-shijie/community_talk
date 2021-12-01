<template>
  <div class="home">
    <div class="top">
      <input
        @keyup.enter="search"
        v-model="keywords"
        type="text"
        placeholder="搜索"
      />
      <button @click="publish" class="el-icon-edit">发布</button>
    </div>
    <!-- 全部 推荐 生活 政治 娱乐  -->
    <div class="tags">
      <el-tag
        @click="shiftCategory(item.category, index)"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in tags"
        :key="item.category"
      >
        {{ item.label }}</el-tag
      >
    </div>
    <event-list :events="events"></event-list>
  </div>
</template>

<script>
import { getEvents } from "../axios/events";
import { search } from "../axios/search";
import EventList from "./EventList.vue";
export default {
  data() {
    return {
      events: [],
      tags: [
        { label: "全部", category: -1 },
        { label: "推荐", category: 0 },
        { label: "生活", category: 1 },
        { label: "政治", category: 2 },
        { label: "娱乐", category: 3 },
      ],
      currentIndex: 0,
      keywords: "",
    };
  },
  components: {
    EventList,
  },
  computed: {
    // imgFormat() {
    //   return function (item) {
    //     let url = "../assets/images/" + item;
    //     let img = require(url);
    //     return img;
    //   };
    // },
  },
  created() {
    getEvents(-1, 1)
      .then((res) => {
        this.events = res.data.data.rows.reverse();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    shiftCategory(category, index) {
      this.currentIndex = index;
      getEvents(category, 1)
        .then((res) => {
          this.events = res.data.data.rows.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    search() {
      search(this.keywords)
        .then((res) => {
          this.events = res.data.rows.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    publish() {
      this.$router.push("/publish");
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.home {
  background-color: #f2f2f2;
  width: 100%;
  /* height: 100%; */
}
.top {
  justify-content: space-between;
  display: flex;
  line-height: 30px;
  height: 50px;
}
input {
  width: 65%;
  height: 50%;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
  padding-left: 10px;
}
button {
  height: 50%;
  width: 20%;
  border-radius: 10px;
  margin-top: 12px;
  margin-right: 10px;
  color: #fff;
  background: rgb(89, 89, 255);
}
.tags {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
}
.el-tag {
  background-color: #fff;
  color: #000;
  border-radius: 15px;
}
.active {
  font-weight: 600;
  background-color: rgb(255, 138, 138);
}
</style>