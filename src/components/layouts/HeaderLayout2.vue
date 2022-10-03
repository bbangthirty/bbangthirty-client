<template>
  <header>
    <div class="header">
      <div class="header-section-one">
        <a class="header-logo" @click="goToLogin">
          <img src="@/assets/img/logo2.png" alt="logo" />
        </a>
      </div>
      <div class="header-section-two">
        <div>
          <button href="#" id="dongne">동네빵집</button>
        </div>
      </div>
    </div>
    <hr style="width: 100%; height: 1.5px; background-color: #683b28" />
  </header>
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
  methods: {
    goToLogin() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.header {
  background-color: var(--color-bread-b);
  padding-top: 20px;
  padding-right: 40px;
  padding-left: 40px;
  margin: auto;
  max-width: 1000px;
}

.header-logo img {
  width: 50px;
  cursor: pointer;
  margin-bottom: 20px;
}

#dongne {
  background-color: var(--color-bread-a);
  color: white;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
}

hr {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
