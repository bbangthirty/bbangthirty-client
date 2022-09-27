<template>
  <div class="sign-up-user">
    <div class="sp-header">
      <h2>회원가입</h2>
      <p>*필수입력</p>
    </div>
    <div class="sp-input-box">
      <div class="t-box">
        <label for="userNickname">Nickname</label>
        <input
          type="text"
          id="userNickname"
          placeholder="닉네임 입력*"
          v-model.trim="user.user_nickname"
        />
      </div>
      <div class="e-box">
        <label for="userEmail">Email</label>
        <input
          type="email"
          id="userEmail"
          placeholder="이메일 입력*"
          v-model.trim="user.user_mail"
        />
      </div>
      <div class="p-box">
        <label for="userPw">Password</label>
        <input
          type="password"
          id="userPw"
          placeholder="비밀번호 입력*"
          v-model.trim="user.user_pwd"
        />
      </div>
      <div class="phone-box">
        <label for="userTel">Phone</label>
        <input
          type="tel"
          id="userTel"
          placeholder="휴대폰번호를 입력해주세요*"
          v-model.trim="user.user_phone"
        />
      </div>
    </div>
    <div class="sp-btn">
      <button class="sp-btn-ok" @click="doSave">회원가입</button>
      <button class="sp-btn-cancel" @click="goToLogin">취소</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      user: {
        user_nickname: '',
        user_mail: '',
        user_pwd: '',
        user_phone: ''
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    goToLogin() {
      this.$router.push({ path: '/login' })
    },
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
      if (this.user.user_phone === '') {
        return this.$swal(
          '휴대폰번호를 입력하세요',
          '휴대폰번호는 필수 입력값입니다',
          'info'
        )
      }

      // 정규식 - 이메일, 전화번호 체크 로직 추가
      const regexpEmail =
        /^([a-z]+\d*)+(\.?[a-z]+\d*)+@([a-z]+\d*)+(\.[a-z]{2,3})+$/
      if (!regexpEmail.test(this.user.user_mail)) {
        return this.$swal(
          'Email을 올바른 형식으로 입력하세요',
          '이메일은 @를 포함해야합니다',
          'info'
        )
      }
      const regexpTel = /^010-\d{4}-\d{4}$/
      if (!regexpTel.test(this.user.user_phone)) {
        return this.$swal(
          'Phone을 올바른 형식으로 입력하세요',
          '010-0000-0000 과 같은 형식입니다',
          'info'
        )
      }

      this.doCreate()
    },

    async doCreate() {
      const loader = this.$loading.show()

      await this.$post('/users/join', {
        user_info: {
          user_nickname: this.user.user_nickname,
          user_mail: this.user.user_mail,
          user_pwd: this.user.user_pwd,
          user_phone: this.user.user_phone
        }
      })

      loader.hide()

      this.$router.push({ path: '/login' })
    }
  }
}
</script>
