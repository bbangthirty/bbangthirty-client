<template>
  <div class="back-img" @click="goToLogin">
    <font-awesome-icon icon="fa-solid fa-arrow-left" />
  </div>
  <div class="login">
    <div class="section">
      <a class="logo">
        <img src="@/assets/img/logo2.png" alt="logo" class="logo-img" />
      </a>
      <input
        type="text"
        class="input-id"
        placeholder="아이디"
        v-model.trim="user.user_mail"
      />
      <input
        type="password"
        class="input-pw"
        placeholder="비밀번호"
        v-model.trim="user.user_pwd"
      />
      <button class="btn-login" @click="checkLogin">로그인</button>
      <button class="btn-sign-up" @click="goToSignup">회원가입</button>
      <div class="id-pw-search">
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
      user: {
        user_mail: '',
        user_pwd: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    goToSignup() {
      this.$router.push({ path: '/login/signup/user' })
    },
    goToLogin() {
      this.$router.push({ path: '/' })
    },
    async checkLogin() {
      const loader = this.$loading.show()
      console.log(this.user)
      const r = await this.$post('/users/login', {
        user_mail: this.user.user_mail,
        user_pwd: this.user.user_pwd
      })

      console.log(r)

      loader.hide()
    }
  }
}
</script>
