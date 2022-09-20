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
      <div>
        <button class="button" @click="openModal">업체등록*</button>
        <!-- Slot으로 모달구현 -->
        <slot-modal modalButton="signupModal">
          <template v-slot:title>업체등록</template>
          <template v-slot:body>
            <div class="owner-modal-body">
              <div>
                <label for="store-name">업체명을 입력해주세요*</label>
                <input type="text" id="store-name" placeholder="업체명" />
              </div>
              <br />
              <div>
                <label for="store-tel">업체 전화번호를 입력해주세요*</label>
                <input
                  type="tel"
                  id="store-tel"
                  placeholder="숫자만 입력하세요"
                />
                <button class="send-code">인증번호 전송</button>
                <input
                  type="text"
                  id=""
                  placeholder="인증번호를 등록해주세요"
                />
                <button class="send-code-confirm">확인</button>
              </div>
              <br />
              <div>
                <label for="store-address">주소를 입력해주세요*</label>
                <input
                  type="text"
                  id="store-address-code"
                  placeholder="우편번호"
                />
                <button class="address-search">검색</button>
                <input type="text" id="store-address" placeholder="주소" />
                <input
                  type="text"
                  id="store-address-detail"
                  placeholder="상세주소"
                />
              </div>
              <br />
              <div>
                <label for="store-detail"
                  >찾아오시는 설명이 필요하신가요?</label
                >
                <textarea
                  id="store-detail"
                  placeholder="예)역삼역 6번출구에서 나와 200m 직진하면 우측에 보이는 다이소 건물 1층입니다."
                  rows="5"
                  cols="33"
                  style="resize: none"
                ></textarea>
              </div>
              <br />
              <div>
                <label for="store-detail-img"
                  >업체 상세정보에 들어갈 이미지를 등록해주세요*</label
                >
                <div>
                  <button class="img-upload">이미지 업로드</button>
                  <input
                    type="file"
                    name=""
                    id="store-detail-img"
                    style="display: none"
                  />
                </div>
              </div>
              <br />
            </div>
          </template>
          <template v-slot:footer>
            <button class="btn-regist">등록</button>
            <button class="btn-close" @click="closeModal">취소</button>
          </template>
        </slot-modal>
      </div>
    </div>
    <div class="sp-btn">
      <button class="sp-btn-ok" @click="doSave">회원가입</button>
      <button class="sp-btn-cancel" @click="goToSignup">취소</button>
    </div>
  </div>
</template>
<script>
import SlotModal from '@/components/fragments/SlotModal.vue'
export default {
  components: { 'slot-modal': SlotModal },
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
    goToSignup() {
      this.$router.push({ path: '/login/signup' })
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
    },

    // Open
    openModal() {
      const modal = document.querySelector('#my-modal')
      console.log(modal)
      modal.style.display = 'block'
    },
    // Close
    closeModal() {
      const modal = document.querySelector('#my-modal')
      modal.style.display = 'none'
    }
  }
}
</script>
