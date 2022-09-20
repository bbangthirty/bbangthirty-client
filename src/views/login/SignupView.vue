<template>
  <div class="back_img" @click="goToLogin">
    <font-awesome-icon icon="fa-solid fa-arrow-left" />
  </div>
  <div class="sign_up">
    <div class="sign_up_logo">
      <img
        src="@/assets/img/logo.png"
        alt="logo"
        class="sign_up_logo_img"
        @click="goToHome"
      />
      <h2 class="sign_up_logo_name">회원가입</h2>
    </div>
    <div class="btn_box">
      <button class="btn_user" @click="goToSignupUser">개인</button>
      <button class="btn_owner" @click="goToSignupOwner">관리자(점주)</button>
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
    goToSignupUser() {
      this.$router.push({ path: '/login/signup/user' })
    },
    goToSignupOwner() {
      this.$router.push({ path: '/login/signup/owner' })
    },
    goToHome() {
      this.$router.push({ path: '/' })
    },
    goToLogin() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/pages/SignupView.css';
</style>
