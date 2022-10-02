<template>
  <header class="header">
    <div class="header-section">
      <a class="header-logo">
        <img src="@/assets/img/logo2.png" alt="logo" />
      </a>
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

.header-logo img {
  width: 50px;
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

header::after {
  content: '';
  display: block;
  height: 1px;
  box-shadow: 3px 3px 3px 3px #999;
}
</style>
