<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-wrapper">
      <div class="title-container">
        <h3>登录</h3>
      </div>
      <el-form-item></el-form-item>
      <el-form-item></el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {

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
  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  
</style>