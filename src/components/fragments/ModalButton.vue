<template>
  <div>
    <!-- Modal -->
    <button id="modal-btn" class="button" @click="openModal">업체등록*</button>
    <div id="my-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close" @click="closeModal">&times;</span>
          <h2>업체등록</h2>
        </div>
        <div class="modal-body">
          <br />
          <div>
            <label for="store_name">업체명을 입력해주세요*</label>
            <input type="text" id="store_name" placeholder="업체명" />
          </div>
          <br />
          <div>
            <label for="store_tel">업체 전화번호를 입력해주세요*</label>
            <input type="tel" id="store_tel" placeholder="숫자만 입력하세요" />
            <button class="send_code">인증번호 전송</button>
            <input type="text" id="" placeholder="인증번호를 등록해주세요" />
            <button class="send_code_confirm">확인</button>
          </div>
          <br />
          <div>
            <label for="store_address">주소를 입력해주세요*</label>
            <input type="text" id="store_address" placeholder="우편번호" />
            <button class="address_search">검색</button>
            <input type="text" id="" placeholder="주소" />
            <input type="text" id="" placeholder="상세주소" />
          </div>
          <br />
          <div>
            <label for="store_detail">찾아오시는 설명이 필요하신가요?</label>
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
        <div class="modal-footer">
          <button class="btn_regist">등록</button>
          <button class="btn_close" @click="closeModal">취소</button>
        </div>
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
    // Open
    openModal() {
      const modal = document.querySelector('#my-modal')
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
@import '@/assets/css/components/ModalButton.css';
</style>
