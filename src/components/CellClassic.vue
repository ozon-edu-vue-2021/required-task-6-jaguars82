<template>
  <div
    :class="['cell', `cell-${name}`]"
  >
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "CellClassic",
  props: {
    name: {
      type: String,
      required: true
    },
    item: {
      type: [String, Number],
      required: true
    }
  }
}
</script>