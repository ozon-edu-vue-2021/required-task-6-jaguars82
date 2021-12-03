<template>
  <div v-view="loadNextPage">
  </div>
</template>

<script>
export default {
  name: "InfiniteScrollControlUnit",
  props: {
    currentPage: {
      type: Number,
      default: 1,
      required: true
    }
  },
  methods: {
    loadNextPage() {
      this.$emit('load-page', this.currentPage + 1);
    }
  }
}
</script>

<style scoped>
div {
  min-height: 1px;
}
</style>