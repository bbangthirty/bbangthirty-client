<template>
  <div class="sign_up">
    <div class="sign_up_logo">
      <img src="@/assets/img/logo.png" alt="logo" class="sign_up_logo_img" />
      <h2 class="sign_up_logo_name">회원가입</h2>
    </div>
    <div>
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
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/pages/SignupView.css';
</style>
