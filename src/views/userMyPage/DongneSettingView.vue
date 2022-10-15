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
        <h2>내 동네 설정</h2>
      </div>
      <hr />
      <section class="mypage-dongne-regist-section">
        <h2 class="">동네를 등록 해주세요</h2>
        <p>동네는 최소 1개이상 최대 2개까지 설정 가능해요.</p>
        <div class="mypage-dongne-regist-button-section-one">
          <div class="btn-area1">
            <span class="x-mark">
              <font-awesome-icon icon="fa-solid fa-circle-xmark" />
            </span>
            <p>호계동</p>
          </div>
          <!-- Button trigger modal -->
          <div
            class="btn-area2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <font-awesome-icon icon="fa-solid fa-plus" />
          </div>
        </div>
      </section>
      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                동네를 검색해주세요
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                placeholder="동네를 검색해 주세요"
                class="search-box"
                :value="searchName"
                @input="change"
                @keyup.enter="getResults()"
              />
              <div class="similer-search" v-if="flag">
                <div
                  :key="result.area_idx"
                  v-for="result in results.results"
                  @click="getSearchName(result)"
                >
                  {{ result.area }}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                취소
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="registDongne"
                data-bs-dismiss="modal"
              >
                등록
              </button>
            </div>
          </div>
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
      results: [],
      searchName: '',
      flag: false,
      dong: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    change(e) {
      this.searchName = e.target.value
    },
    // 동네검색 함수
    async getResults() {
      const search = encodeURIComponent(this.searchName)
      this.results = await this.$get(`/areas/search/${search}`)
      this.flag = true
    },
    getSearchName(result) {
      this.searchName = result.area
      this.flag = false
    },
    registDongne() {
      const a = this.searchName.split(' ')
      this.dong[0] = a[a.length - 1]
      console.log(a[a.length - 1])
      this.searchName = ''
    }
  }
}
</script>
