<template>
  <header-layout-one v-if="$route.path === '/'" />
  <header-layout-one v-if="$route.path === '/mypage'" />
  <header-layout-two v-if="$route.path === '/dongne'" />
  <router-view />
  <footer-layout />
</template>
<script>
import HeaderLayoutOne from '@/components/layouts/HeaderLayout1.vue'
import HeaderLayoutTwo from '@/components/layouts/HeaderLayout2.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
export default {
  components: { HeaderLayoutOne, HeaderLayoutTwo, FooterLayout },
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
