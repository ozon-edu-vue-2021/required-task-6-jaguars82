<template>
  <div class="button-wrapper">
    <button
      :class="{'active': sortOrder === -1}"
      @click="changeSorter(-1)"
    >
      <ArrowUp class="arrow" />
    </button>
    <button
      :class="{'active': sortOrder === 0}"
      @click="changeSorter(0)"
    >
      <CircleSmall />
    </button>
    <button
      :class="{'active': sortOrder === 1}"
      @click="changeSorter(1)"
    >
      <ArrowDown />
    </button>
  </div>
</template>

<script>
import ArrowDown from 'vue-material-design-icons/ArrowDown.vue';
import ArrowUp from 'vue-material-design-icons/ArrowUp.vue';
import CircleSmall from 'vue-material-design-icons/CircleSmall.vue';

export default {
  name: "SoertControlUnit",
  props: {
    field: {
      type: String,
      default: ''
    }
  },
  components: {
    ArrowDown,
    ArrowUp,
    CircleSmall
  },
  data() {
    return {
      sortOrder: 0
    }
  },
  methods: {
    changeSorter(o) {
      this.sortOrder = o;
      this.$emit('sorters-change', { field: this.field, value: o });
    }
  }
}
</script>

<style scoped>
.button-wrapper {
  display: flex;
  flex-direction: column;
}

.button-wrapper button {
  height: 12px;
  background: transparent;
  border: none;
  color: #f8ab37;
  padding: 0px;
}

.button-wrapper button.active {
  color: #da2c4d;
}

.arrow {
  font-size: 5px;
}
</style>