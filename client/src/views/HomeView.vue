<template>
  <div class="home">
    <main>
      <div class="main_image_text">
        <h1>동네를 검색 해주세요</h1>
        <div class="address_search">
          <input
            type="text"
            placeholder="동네를 검색해 주세요"
            class="search_box"
            :value="searchName"
            @input="change"
            @keyup.enter="getResults()"
          />
          <div class="similer_search" v-if="flag">
            <p
              :key="result.area_idx"
              v-for="result in results.results"
              @click="searchName = result.area"
            >
              {{ result.area }}
            </p>
          </div>
        </div>
        <div>
          <a class="btn_search" @click="getResults()">동네검색</a>
        </div>
      </div>
      <div class="main_text">
        <h1>빵떠리 스토리</h1>
        <p>
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
      flag: false
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
      this.results = await this.$get(`/areas/search?name=${this.searchName}`)
      this.flag = true
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/pages/homeview.css';
</style>
