<template>
  <header-layout v-if="$route.path === '/'" />
  <router-view />
  <footer-layout v-if="$route.path === '/'" />
</template>
<script>
/* eslint-disable */
import HeaderLayout from '@/components/layouts/HeaderLayouyt1.vue'
import FooterLayout from '@/components/layouts/FooterLayout.vue'
export default {
  components: { HeaderLayout, FooterLayout },
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
