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
      <div>
        <button class="button" @click="openModal">업체등록*</button>
        <!-- Slot으로 모달구현 -->
        <slot-modal modalButton="signupModal">
          <template v-slot:title>업체등록</template>
          <template v-slot:body>
            <div class="owner_modal_body">
              <div>
                <label for="store_name">업체명을 입력해주세요*</label>
                <input type="text" id="store_name" placeholder="업체명" />
              </div>
              <br />
              <div>
                <label for="store_tel">업체 전화번호를 입력해주세요*</label>
                <input
                  type="tel"
                  id="store_tel"
                  placeholder="숫자만 입력하세요"
                />
                <button class="send_code">인증번호 전송</button>
                <input
                  type="text"
                  id=""
                  placeholder="인증번호를 등록해주세요"
                />
                <button class="send_code_confirm">확인</button>
              </div>
              <br />
              <div>
                <label for="store_address">주소를 입력해주세요*</label>
                <input
                  type="text"
                  id="store_address_code"
                  placeholder="우편번호"
                />
                <button class="address_search">검색</button>
                <input type="text" id="store_address" placeholder="주소" />
                <input
                  type="text"
                  id="store_address_detail"
                  placeholder="상세주소"
                />
              </div>
              <br />
              <div>
                <label for="store_detail"
                  >찾아오시는 설명이 필요하신가요?</label
                >
                <textarea
                  id="store_detail"
                  placeholder="예)역삼역 6번출구에서 나와 200m 직진하면 우측에 보이는 다이소 건물 1층입니다."
                  rows="5"
                  cols="33"
                  style="resize: none"
                ></textarea>
              </div>
              <br />
              <div>
                <label for="store_detail_img"
                  >업체 상세정보에 들어갈 이미지를 등록해주세요*</label
                >
                <div>
                  <button class="img_upload">이미지 업로드</button>
                  <input
                    type="file"
                    name=""
                    id="store_detail_img"
                    style="display: none"
                  />
                </div>
              </div>
              <br />
            </div>
          </template>
          <template v-slot:footer>
            <button class="btn_regist">등록</button>
            <button class="btn_close" @click="closeModal">취소</button>
          </template>
        </slot-modal>
      </div>
    </div>
    <div class="sp_btn">
      <button class="sp_btn_ok" @click="doSave">회원가입</button>
      <button class="sp_btn_cancel">취소</button>
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

      // const r = await this.$post('/users/join', {
      //   param: {
      //     user_nickname: this.user.user_nickname,
      //     user_mail: this.user.user_mail,
      //     user_pwd: this.user.user_pwd
      //   }
      // })

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

<style scoped>
@import '@/assets/css/pages/SignupOwnerView.css';
</style>
