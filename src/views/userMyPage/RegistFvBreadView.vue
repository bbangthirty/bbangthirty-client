<template>
  <hr style="width: 100%; height: 1.5px; background-color: #683b28" />
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
        <h2>관심 빵 등록</h2>
      </div>
      <hr />
      <h3 class="guide">관심 빵을 등록해 주세요</h3>
      <div class="bread-tag-container">
        <div class="bread-tag">#소보루</div>
        <div class="bread-tag">#단팥빵</div>
        <div class="bread-add"></div>
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
