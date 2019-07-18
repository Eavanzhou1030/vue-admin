<template>
  <el-header height="56px" class="header--common">
    <div>

    </div>
  </el-header>
</template>
<script>
import {mapState} from 'vuex';

export default {
  name: 'CommonHeader',
  data() {
    return {}
  },
  computed: {
    ...mapState(['headerNavTitle', 'collapse']),
  }
}
</script>
<style lang="scss" scoped>
.header--common {
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 55px;
  border-bottom: 1px solid #ededed;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
