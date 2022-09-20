<template>
  <header class="header">
    <div class="header-section">
      <button class="header-logo">
        <img src="@/assets/img/logo.png" alt="logo" />
        <h4 class="header-logo-name">빵떠리</h4>
      </button>
      <button class="header-btn-login" @click="goToLogin()">로그인</button>
    </div>
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
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped>
.header {
  background-color: var(--color-bread-b);
}

.header-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  margin: auto;
  max-width: 1000px;
}

.header-logo {
  border: none;
  background-color: var(--color-bread-b);
  cursor: pointer;
}

.header-logo-name {
  margin: 0;
}

.header-btn-login {
  border: none;
  padding: 5px 10px;
  background-color: var(--color-bread-a);
  width: 100px;
  border-radius: 10px;
  color: white;
}

.header-btn-login:hover {
  cursor: pointer;
  background-color: var(--color-bread-c);
}
</style>
