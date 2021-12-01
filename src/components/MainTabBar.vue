<template>
  <div class="main-tabbar">
    <tab-bar class="tab-bar">
      <tab-bar-item class="tab-bar-item" path="/message" active-color="red">
        <div slot="item-icon">
          <img src="../assets/img/tabbar/message.png" alt="" />
        </div>
        <div slot="item-active">
          <img src="../assets/img/tabbar/message1.png" alt="" />
        </div>
        <div slot="item-text">消息</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/home" active-color="red">
        <div slot="item-icon">
          <img src="../assets/img/tabbar/home.png" alt="" />
        </div>
        <div slot="item-active">
          <img src="../assets/img/tabbar/home1.png" alt="" />
        </div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item class="tab-bar-item" path="/profile" active-color="red">
        <div slot="item-icon">
          <img src="../assets/img/tabbar/my.png" alt="" />
        </div>
        <div slot="item-active">
          <img src="../assets/img/tabbar/my1.png" alt="" />
        </div>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "./TabBarItem";
export default {
  data() {
    return {};
  },
  components: {
    TabBar,
    TabBarItem,
  },
  created() {},
  methods: {},
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.tab-bar-item img {
  width: 23px;
  height: 23px;
  margin-top: 3px;
}
</style>