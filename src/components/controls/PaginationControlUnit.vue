<template>
  <div class="controls-wrapper">
    <button
      :disabled="currentPage < 2"
      @click="$emit('go-to-page', 1)"
    >
      <PageFirst />
    </button>
    <button
      :disabled="!prevPage"
      @click="$emit('go-to-page', prevPage)"
    >
      <ChevronLeft />
    </button>
    <button
      class="text"
      v-if="prevPage > 0"
      @click="$emit('go-to-page', prevPage)"
    >
      {{ prevPage }}
    </button>
    <div class="current-page">{{ currentPage }}</div>
    <button
      class="text"
      @click="$emit('go-to-page', currentPage + 1)"
    >
      {{ currentPage + 1 }}
    </button> 
    <button
      @click="$emit('go-to-page', currentPage + 1)"
    >
      <ChevronRight />
    </button>  
  </div>
</template>

<script>
import PageFirst from 'vue-material-design-icons/PageFirst.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';

export default {
  name: "PaginationControlUnit",
  props: {
    currentPage: {
      type: Number,
      default: 1,
      required: true
    },
    prevPage: {
      type: Number
    },
    nextPage: {
      type: Number
    }
  },
  components: {
    PageFirst,
    ChevronLeft,
    ChevronRight
  }
}
</script>

<style scoped>
.controls-wrapper {
  display: flex;
  margin-top: 15px;
}

button {
  background: transparent;
  border: none;
}

button:not(:disabled) {
  color: #f8ab37;
}

button.text {
  padding: 0 10px;
}

.current-page {
  padding: 5px;
  color: #da2c4d;
  font-weight: 600;
}
</style>