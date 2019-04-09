<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-wrapper" label-position="bottom">
      <div class="title-container">
        <h3>系统登录</h3>
      </div>
      <el-form-item prop="username" label="账号:">
        <el-input placeholder="请输入账号" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码:">
        <el-input placeholder="请输入密码" v-model="loginForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
      }
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss' scoped>
  .login-container {
    width: 100%;
    height: 100%;
    background-color: #ccc;
    position: relative;
    text-align: center;
    .login-wrapper {
      max-width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }


</style>