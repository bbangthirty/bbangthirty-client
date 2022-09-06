<template>
  <header-layout />
  <router-view />
  <footer-layout />
</template>
<script>
/* eslint-disable */
// $route값으로 헤더 바꿀수 있음
import HeaderLayout from '@/components/layouts/HeaderLayouyt1.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
export default {
  components: { HeaderLayout, FooterLayout }
}
</script>
