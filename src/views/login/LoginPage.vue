<template>
  <div id="login">
    <div class="login-form">
      <div class="login-title">Login</div>
      <div class="login-content">
        <el-form :model="dataMap.formData" label-width="80px" label-position="top">
          <el-form-item label="登录账户">
            <el-input
              v-model="userName"
              placeholder="userName"
              style="width: 400px"
            ></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input
              v-model="passWord"
              placeholder="passWord"
              style="width: 400px"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="button-card">
          <div class="button" @click="login">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { message } from "@/utils/message";
import { useRouter } from "vue-router";

const router = useRouter();

const dataMap = reactive({
  formData: {},
});

let userName = ref("");
let passWord = ref("");

const login = () => {
  if (userName.value === "leviqin" && passWord.value === "123456") {
    router.push("/dashboard");
  } else {
    message({
      type: "error",
      message: "登录账户或登录密码错误！",
    });
  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 100%;
  position: relative;
  background: url(../../assets/images/loginBg2.jpg);
  background-size: cover;
  background-position: 50%;
}
.login-form {
  padding: 40px;
  background: rgba(0, 0, 0, 0.672);
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-title {
  text-align: center;
  font-size: 40px;
  color: #fff;
  margin-bottom: 20px;
}

.login-content {
  margin: 0 auto;
}
.button-card {
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    background: linear-gradient(to right, #d2e1db, #97c3c6);
    border-radius: 20px;
    width: 180px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
}

::v-deep .el-form-item__label {
  color: #fff;
  font-size: 20px;
}

::v-deep .el-input__wrapper {
  background: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  box-shadow: none;
  border-radius: 0;
}

::v-deep .el-input__inner {
  color: #fff;
  outline: none;
}
</style>
