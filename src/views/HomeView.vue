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
      storedData: [],
      latitude: '',
      longitude: '',
      areaName: ''
    }
  },
  setup() {},
  created() {
    this.getGeoLocation()
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      this.loadScript()
    }
  },
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
    },
    // KakaoMap API
    loadScript() {
      const script = document.createElement('script')
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=34b37d522b65d1df15d4d56c54871b18&libraries=services&autoload=false'
      document.head.appendChild(script)
      script.onload = () => window.kakao.maps.load(this.currentLocation)
    },
    currentLocation() {
      const geocoder = new window.kakao.maps.services.Geocoder()
      const callback = function (result, status) {
        if (status === window.kakao.maps.services.Status.OK) {
          // 질문 : this.areaName = result[0].address_name 을 하고싶은데 콜백함수여서 데이터 저장이 안되는데 방법이 뭐가있는지?
          console.log('지역 명칭 : ' + result[0].address_name)
          console.log('행정구역 코드 : ' + result[0].code)
        }
      }
      geocoder.coord2RegionCode(this.longitude, this.latitude, callback)
    },
    // GeoLocation API
    getGeoLocation() {
      // 지오로케이션
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
      navigator.geolocation.getCurrentPosition(
        this.success,
        this.error,
        options
      )
    },
    success(pos) {
      const crd = pos.coords
      this.latitude = crd.latitude
      this.longitude = crd.longitude
    },
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`)
    }
  }
}
</script>
