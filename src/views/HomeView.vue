<template>
  <div class="home">
    <main class="landing_page">
      <div class="main_image_text">
        <div class="address_search">
          <h1>동네를 검색 해주세요</h1>
          <input
            type="text"
            placeholder="동네를 검색해 주세요"
            class="search_box"
            :value="searchName"
            @input="change"
            @keyup.enter="getResults()"
          />
          <div class="similer_search" v-if="flag">
            <div
              :key="result.area_idx"
              v-for="result in results.results"
              @click="getSearchName(result)"
            >
              {{ result.area }}
            </div>
          </div>
          <div>
            <button class="btn_search" @click="movePage()">동네검색</button>
          </div>
        </div>
      </div>
      <div class="main_text">
        <h1>빵떠리 스토리</h1>
        <p class="main_text_contents">
          빵떠리 서비스는 마감시간을 통하여 유통기한이 임박한 제품을 저렴한
          가격으로 빵을 제공하는 서비스 입니다.
        </p>
      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
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

<style scoped>
@import '@/assets/css/pages/HomeView.css';
</style>
