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
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  margin: 5% auto;
  width: 50%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
}

.modal-header h2 {
  margin: 0;
}

/* header */
.modal-header {
  background: var(--color-bread-b);
  padding: 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid black;
}

.close {
  float: right;
  font-size: 30px;
}

.close:hover,
.close:focus {
  color: var(--color-bread-a);
  cursor: pointer;
}

/* body */
.modal-body {
  padding: 10px 20px;
  background: var(--color-bread-b);
}

/* footer */
.modal-footer {
  background: var(--color-bread-b);
  padding: 10px;
  color: #fff;
  text-align: center;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
