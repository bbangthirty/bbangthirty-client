<template>
  <div class="back-img" @click="goToLogin">
    <font-awesome-icon icon="fa-solid fa-arrow-left" />
  </div>
  <div class="sign-up">
    <div class="sign-up-logo">
      <img
        src="@/assets/img/logo.png"
        alt="logo"
        class="sign-up-logo-img"
        @click="goToHome"
      />
      <h2 class="sign-up-logo-name">회원가입</h2>
    </div>
    <div class="btn-box">
      <button class="btn-user" @click="goToSignupUser">개인</button>
      <button class="btn-owner" @click="goToSignupOwner">관리자(점주)</button>
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
