<template>
  <div>
    <div id="my-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <span class="close" @click="closeModal">&times;</span>
          <h2 class="modal-title">
            <!-- 타이틀 슬롯 -->
            <slot name="title"></slot>
          </h2>
        </div>
        <div class="modal-body">
          <!-- 바디 슬롯 -->
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <!-- 푸터 슬롯 -->
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
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
  methods: {
    // Close
    closeModal() {
      const modal = document.querySelector('#my-modal')
      modal.style.display = 'none'
    }
  }
}
</script>

<style scoped>
@import '@/assets/css/components/ModalButton.css';
</style>
