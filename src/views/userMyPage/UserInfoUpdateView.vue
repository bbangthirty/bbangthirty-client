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
    <div class="mypage-main">
      <div class="mypage-main-title">
        <h2>회원정보 변경</h2>
      </div>
      <hr />
      <div class="user-info-update-container">
        <div class="user-info-title">프로필 사진</div>
        <div class="user-info-input">
          <div>
            <div class="profile-img-upload">
              <img
                src="@/assets/img/profile.jpg"
                alt="profile_img"
                class="mypage-profile-img-update"
              />
              <button class="profile-img-update-button">사진 변경</button>
            </div>
          </div>
          <div class="profile-img-regist-guide">
            회원님을 알릴 수 있는 사진을 등록해주세요.<br />등록된 사진은
            회원님의 게시물이나 댓글에 사용됩니다.
          </div>
        </div>
      </div>
      <hr />
      <div class="user-info-update-container">
        <div class="user-info-title">이름</div>
        <div class="user-info-input">test</div>
      </div>
      <hr />
      <div class="user-info-update-container">
        <div class="user-info-title">이메일</div>
        <div class="user-info-input">test</div>
      </div>
      <hr />
      <div class="user-info-update-container">
        <div class="user-info-title">휴대전화</div>
        <div class="user-info-input">test</div>
      </div>
      <hr />
      <div class="uiu-btn">
        <button class="user-info-update-button">수정</button>
        <button class="user-info-delete-button">탈퇴하기</button>
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
