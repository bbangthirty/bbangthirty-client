<template>
  <div class="sign_up_user">
    <div class="sp_header">
      <h2>회원가입</h2>
      <p>*필수입력</p>
    </div>
    <div class="sp_input_box">
      <div class="t_box">
        <label for="userNickname">Nickname</label>
        <input
          type="text"
          id="userNickname"
          placeholder="닉네임 입력*"
          v-model.trim="user.user_nickname"
        />
      </div>
      <div class="e_box">
        <label for="userEmail">Email</label>
        <input
          type="email"
          id="userEmail"
          placeholder="이메일 입력*"
          v-model.trim="user.user_mail"
        />
      </div>
      <div class="p_box">
        <label for="userPw">Password</label>
        <input
          type="password"
          id="userPw"
          placeholder="비밀번호 입력*"
          v-model.trim="user.user_pwd"
        />
      </div>
    </div>
    <div class="sp_btn">
      <button class="sp_btn_ok" @click="doSave">회원가입</button>
      <button class="sp_btn_cancel">취소</button>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  components: {},
  data() {
    return {
      user: {
        user_nickname: '',
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
    async doSave() {
      // 유효성 검사
      if (this.user.user_nickname === '') {
        return this.$swal(
          '닉네임을 입력하세요',
          '닉네임은 필수 입력값입니다',
          'info'
        )
      }
      if (this.user.user_mail === '') {
        return this.$swal(
          'Email을 입력하세요',
          'Email은 필수 입력값입니다',
          'info'
        )
      }
      if (this.user.user_pwd === '') {
        return this.$swal(
          '비밀번호를 입력하세요',
          '비밀번호는 필수 입력값입니다',
          'info'
        )
      }
      const regexpEmail =
        /^([a-z]+\d*)+(\.?[a-z]+\d*)+@([a-z]+\d*)+(\.[a-z]{2,3})+$/
      if (!regexpEmail.test(this.user.user_mail)) {
        return this.$swal(
          'Email을 올바른 형식으로 입력하세요',
          '이메일은 @를 포함해야합니다',
          'info'
        )
      }

      // 저장함수 만들었는데 회원가입 안됨 -> 해결해야함
      this.doCreate()
    },

    async doCreate() {
      const loader = this.$loading.show()

      const r = await this.$post('/users/join', {
        param: {
          user_nickname: this.user.user_nickname,
          user_mail: this.user.user_mail,
          user_pwd: this.user.user_pwd
        }
      })

      loader.hide()
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/pages/SignupUserView.css';
</style>
