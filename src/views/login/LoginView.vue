<template>
  <div class="login">
    <div class="section">
      <a class="logo">
        <img src="@/assets/img/logo.png" alt="logo" class="logo_img" />
        <h2 class="logo_name">빵떠리</h2>
      </a>
      <input type="text" class="input_id" placeholder="아이디" />
      <input type="password" class="input_pw" placeholder="비밀번호" />
      <button class="btn_login">로그인</button>
      <button class="btn_sign_up" @click="goToSignup">회원가입</button>
      <div class="id_pw_search">
        <a href="#">아이디 찾기</a> | <a href="#">비밀번호 찾기</a>
      </div>
    </div>
  </div>
</template>

<script>
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
    goToSignup() {
      this.$router.push({ path: '/login/signup' })
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/pages/LoginView.css';
</style>
