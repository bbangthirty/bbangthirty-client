<template>
  <header class="header">
    <div class="header_section">
      <button class="header_logo">
        <img src="@/assets/img/logo.png" alt="logo" />
        <h4 class="header_logo_name">빵떠리</h4>
      </button>
      <button class="header_btn_login" @click="goToLogin()">로그인</button>
    </div>
  </header>
</template>
<script>
/* eslint-disable */
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    goToLogin() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/components/header.css';
</style>
