<template>
  <div class="dongne-regist-container">
    <section class="dongne-regist-section">
      <h2 class="">동네를 등록 해주세요</h2>
      <p>동네는 최소 1개이상 최대 2개까지 설정 가능해요.</p>
      <div class="dongne-regist-button-section-one">
        <div class="btn-area1">
          <span class="x-mark">
            <font-awesome-icon icon="fa-solid fa-circle-xmark" />
          </span>
          <p>호계동</p>
        </div>
        <div class="btn-area2">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </div>
      </div>
    </section>
    <section class="dongne-regist-button-section-two">
      <button class="btn-dongne">빵떠리 시작하기</button>
    </section>
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
