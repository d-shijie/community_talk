<template>
  <div class="login">
    <div class="box">
      <div>
        <input v-model="queryData.username" type="text" placeholder="账号" />
      </div>
      <div>
        <input
          v-model="queryData.password"
          type="password"
          placeholder="密码"
        />
      </div>
      <button @click="login">login</button>
      <button @click="register">register</button>
    </div>
  </div>
</template>

<script>
import { login } from "../axios/login";
import { register } from "../axios/register";
export default {
  data() {
    return {
      queryData: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    login() {
      let query = this.queryData;
      login(query)
        .then((res) => {
          if (res.data.user) {
            window.sessionStorage.setItem('userId',res.data.user.id)
            this.$router.push("/home");
          } else {
            alert("login fail!!!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    register() {
      register(this.queryData)
        .then((res) => {
          alert(res.data.msg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
* {
  margin: auto;
}
.login {
  position: relative;
}
.box {
  text-align: center;
  margin-top: 100px;
}
input {
  margin: 10px 0;
}
input:nth-child(2) {
  margin-bottom: 10px;
}
button {
  margin: 0 5px;
}
</style>