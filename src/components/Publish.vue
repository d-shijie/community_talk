<template>
  <div class="publish">
    <div class="top">
      <span @click="back" class="el-icon-close"></span>
      <span>发布动态</span>
      <span @click="publish" :class="{ allow: Allow }">发布</span>
    </div>
    <form>
      <input
        v-model="title"
        class="title"
        placeholder="我是标题哦(⊙o⊙)"
        type="text"
        name="title"
      />
      <textarea
        v-model="content"
        placeholder="这里写内容！！！"
        type="text"
        name="content"
      />
      <input
        @change="getFile"
        placeholder="选择图片"
        class="file"
        type="file"
      />
    </form>
    <div class="category">
      <span class="cate">选择分类:</span>
      <el-select v-model="category" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import { getUserDetail } from "../axios/userDetail";
import { publish } from "../axios/upload";
export default {
  data() {
    return {
      username: "",
      title: "",
      content: "",
      file: "",
      category: 1,
      imgUrl: require("F://vscode/community_api/static/upload/1637739339091.png"),
      options: [
        {
          label: "推荐",
          value: 0,
        },
        {
          label: "生活",
          value: 1,
        },
        {
          label: "政治",
          value: 2,
        },
        {
          label: "娱乐",
          value: 3,
        },
      ],
    };
  },
  created() {},
  computed: {
    Allow() {
      return this.title !== "" && this.content !== "";
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
    getFile(e) {
      this.file = e.target.files[0];
    },
    publish() {
      if (this.Allow === true) {
        getUserDetail(window.sessionStorage.getItem("userId"))
          .then((res) => {
            console.log(res);
            this.username = res.data.username;
            let formdata = new FormData();
            formdata.append("title", this.title);
            formdata.append("content", this.content);
            formdata.append("file", this.file);
            formdata.append("name", this.username);
            formdata.append("category", this.category);
            formdata.append("userId", window.sessionStorage.getItem("userId"));
            publish(formdata)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style scoped >
/* @import url(); 引入css类 */
.top {
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top span:nth-child(1) {
  width: 20px;
  font-size: 16px;
  text-align: center;
}
.top span:nth-child(3) {
  width: 40px;
  font-size: 14px;
  color: rgb(179, 179, 255);
  text-align: center;
}
.top span:nth-child(2) {
  flex: 1;
  font-size: 16px;
  text-align: center;
}
.allow {
  color: rgb(74, 74, 255) !important;
  font-weight: 600;
}
.title {
  width: 100%;
  padding: 10px 5px 10px 5px;
  margin: 10px 0 0 0;
  border: none;
  resize: none;
  border-bottom: 1px solid #ccc;
}
textarea {
  width: 100%;
  padding-bottom: 150px;
  padding-left: 5px;
  padding-top: 5px;
  margin: 0 0 px 0;
  border: none;
  resize: none;
  border-bottom: 1px solid #ccc;
}
.file {
  margin: 10px 0;
  border: none;
}
.el-select {
  margin: 10px 0 10px 10px;
  width: 35%;
}
.category {
  margin: 10px 0 10px 10px;
}
.cate {
  font-size: 14px;
}
</style>