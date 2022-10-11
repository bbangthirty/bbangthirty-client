<template>
  <header-layout-one v-if="$route.path === '/'" />
  <header-layout-one-logined v-if="$route.path === '/dongne/landing/regist'" />
  <header-layout-one-logined v-if="$route.path === '/mypage'" />
  <header-layout-two v-if="$route.path === '/dongne'" />
  <header-layout-two-logined v-if="$route.path === '/dongne/landing'" />
  <router-view />
  <footer-layout />
</template>
<script>
import HeaderLayoutOne from '@/components/layouts/HeaderLayout1.vue'
import HeaderLayoutOneLogined from '@/components/layouts/HeaderLayout1Logined.vue'
import HeaderLayoutTwo from '@/components/layouts/HeaderLayout2.vue'
import HeaderLayoutTwoLogined from '@/components/layouts/HeaderLayout2Logined.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
export default {
  components: {
    HeaderLayoutOne,
    HeaderLayoutTwo,
    FooterLayout,
    HeaderLayoutOneLogined,
    HeaderLayoutTwoLogined
  },
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
    changeHeader() {}
  }
}
</script>
