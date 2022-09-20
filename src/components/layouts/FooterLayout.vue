<template>
  <footer class="footer">
    <div class="footer-section">
      <p>Copyright © 빵떠리. 2022 All Rights Reserved.</p>
      <img
        class="footer-img"
        src="@/assets/img/footer_logo.png"
        alt="footer-logo"
      />
    </div>
  </footer>
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

<style scoped>
.footer {
  background-color: var(--color-bread-a);
  width: 100%;
  height: 120px;
}

.footer-img {
  width: 100px;
}

.footer-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  font-size: var(--font-micro);
  color: white;
  max-width: 1000px;
  margin: auto;
}
</style>
