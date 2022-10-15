<template>
  <div class="mypage">
    <div class="mypage-side">
      <div class="mypage-profile">
        <img
          src="@/assets/img/profile.jpg"
          alt="profile_img"
          class="mypage-profile-img"
        />
        <div class="mypage-profile-name">소보루짱 님</div>
      </div>
      <ul class="mypage-navbar">
        <li class="mypage-navbar-menu">내 동네 설정</li>
        <li class="mypage-navbar-menu">관심 빵 등록</li>
        <li class="mypage-navbar-menu">업체 등록</li>
        <li class="mypage-navbar-menu">회원 정보 변경</li>
      </ul>
    </div>
    <div class="mypage-main-bakery">
      <div class="mypage-main-title">
        <h2>업체 등록</h2>
      </div>
      <hr />
      <div class="regist-bakery-form-containter">
        <div class="regist-bakery-form">
          <label for="store_name" class="regist-bakery-form-title"
            >업체명을 입력해주세요 *</label
          >
          <div><input type="text" id="store_name" placeholder="업체명" /></div>
        </div>
        <div class="regist-bakery-form">
          <label for="store_tel" class="regist-bakery-form-title"
            >업체 전화번호를 입력해주세요 *</label
          >
          <div>
            <input type="tel" id="store_tel" placeholder="숫자만 입력하세요" />
            <button class="send_code">인증번호 전송</button>
          </div>
          <div>
            <input type="text" id="" placeholder="인증번호를 등록해주세요" />
            <button class="send_code_confirm">확인</button>
          </div>
        </div>
        <div class="regist-bakery-form">
          <label for="store_address" class="regist-bakery-form-title"
            >주소를 입력해주세요 *</label
          >
          <div>
            <input type="text" id="store_address_code" placeholder="우편번호" />
            <button class="address_search">검색</button>
          </div>
          <div><input type="text" id="store_address" placeholder="주소" /></div>
          <div>
            <input
              type="text"
              id="store_address_detail"
              placeholder="상세주소"
            />
          </div>
        </div>
        <div class="regist-bakery-form">
          <label for="store_detail" class="regist-bakery-form-title"
            >찾아오시는 설명이 필요하신가요?</label
          >
          <div>
            <textarea
              id="store_detail"
              placeholder="예)역삼역 6번출구에서 나와 200m 직진하면 우측에 보이는 다이소 건물 1층입니다."
              rows="5"
              cols="33"
              style="resize: none"
            ></textarea>
          </div>
        </div>
        <div class="regist-bakery-form">
          <label for="store_detail_img" class="regist-bakery-form-title"
            >업체 상세정보에 들어갈 이미지를 등록해주세요 *</label
          >
          <div>
            <input type="file" name="" id="store_detail_img" />
          </div>
        </div>
        <div class="brg-btn">
          <button class="bakery-regist-button">등록</button>
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
  methods: {}
}
</script>
