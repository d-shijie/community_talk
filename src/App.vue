<template>
  <div id="app">
    <router-view></router-view>

    <main-tab-bar v-show="isShow"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "./components/MainTabBar.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
  data() {
    return {};
  },
  created() {},
  computed: {
    isShow() {
      return this.$route.path.indexOf("/login") == -1;
    },
  },
  methods: {
    request() {
      console.log(1);
      axios
        .get("/api/events/1/1")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
#app {
  width: 100vw;
  height: 100vh;
}
</style>
