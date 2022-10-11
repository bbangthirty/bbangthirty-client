<template>
  <header class="header">
    <div class="header-section">
      <a class="header-logo" href="/">
        <img src="@/assets/img/logo2.png" alt="logo" />
      </a>
      <div class="profile_section">
        <img src="@/assets/img/dummy_user_img.png" alt="" class="profile_img" />
        <a href="">소보루짱 님</a>
        <button class="header-btn-login" @click="goToLogin()">로그아웃</button>
      </div>
    </div>
    <div class="header-section-two">
      <div>
        <button href="#" id="dongne">동네빵집</button>
      </div>
      <div>
        <button href="#" id="dangol">단골빵집</button>
      </div>
      <div>
        <button href="#" id="alarm">알림</button>
      </div>
    </div>
  </header>
  <hr style="width: 100%; height: 1.5px; background-color: #683b28" />
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
  background-color: var(--color-bread-d);
  width: 100px;
  border-radius: 10px;
  color: white;
}

.header-btn-login:hover {
  cursor: pointer;
  background-color: var(--color-bread-c);
}

.profile_section {
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: space-between;
}

.profile_img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

a {
  color: var(--color-bread-a);
}

.header-section-two {
  display: flex;
}

#dongne,
#dangol,
#alarm {
  background-color: var(--color-bread-a);
  color: white;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-right: 4px;
}

#dangol,
#alarm {
  background-color: var(--color-bread-d);
}

#dongne:hover,
#dangol:hover,
#alarm:hover {
  background-color: var(--color-bread-c);
}

hr {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
