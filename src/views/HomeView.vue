<template>
  <div class="home">
    <main class="landing-page">
      <div class="main-image-text">
        <div>
          <h1>동네를 검색 해주세요</h1>
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
          <div>
            <button class="btn-search" @click="movePage()">동네검색</button>
          </div>
        </div>
      </div>
      <div class="main-text">
        <div class="current-location-box">
          <font-awesome-icon icon="fa-solid fa-location-dot" class="location" />
          <p class="location-detail">경상남도 진주시 신안동</p>
        </div>
        <div class="card-area">
          <div class="card-box">
            <div class="card-img">
              <img src="@/assets/img/bread_1.png" alt="" />
            </div>
            <div class="card-text">
              <div class="card-store-name">양우연케익하우스</div>
              <div class="card-store-endtime">오후 10:00 마감</div>
              <div class="card-store-menu">#소보루, #단팥빵</div>
            </div>
          </div>
          <div class="card-box">
            <div class="card-img">
              <img src="@/assets/img/bread_1.png" alt="" />
            </div>
            <div class="card-text">
              <div class="card-store-name">양우연케익하우스</div>
              <div class="card-store-endtime">오후 10:00 마감</div>
              <div class="card-store-menu">#소보루, #단팥빵</div>
            </div>
          </div>
          <div class="card-box">
            <div class="card-img">
              <img src="@/assets/img/bread_1.png" alt="" />
            </div>
            <div class="card-text">
              <div class="card-store-name">양우연케익하우스</div>
              <div class="card-store-endtime">오후 10:00 마감</div>
              <div class="card-store-menu">#소보루, #단팥빵</div>
            </div>
          </div>
        </div>
        <h1>빵떠리 스토리</h1>
        <p class="main-text-contents">
          빵떠리 서비스는 마감시간을 통하여 유통기한이 임박한 제품을 저렴한
          가격으로 빵을 제공하는 서비스 입니다.
        </p>
      </div>
    </main>
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
      storedData: []
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
    goToMenu(path) {
      this.$router.push({ path: path })
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
    movePage() {
      this.storedData = this.results.results.filter(
        (result) => result.area === this.searchName
      )
      console.log(this.storedData)
    }
  }
}
</script>
