<template>
  <div class="filter-wrapper">
    <button
      :class="['modal-toggler', { 'active': isActive }]"
      @click="isShown = !isShown"
    >
      <FilterSimple
        v-if="isActive"
      />
      <FilterOutline
        v-else
      />
    </button>
    <div class="input-container" v-if="isShown">
      <input v-model="currentValue">
      <div>
        <button @click="changeFilter">Применить</button>
        <button @click="clearFilter">Сбросить</button>
      </div>
    </div>
  </div>
</template>

<script>
import FilterSimple from 'vue-material-design-icons/Filter.vue';
import FilterOutline from 'vue-material-design-icons/FilterOutline.vue';

export default {
  name: "FilterControlUnit",
  props: {
    field: {
      type: String,
      default: ''
    }
  },
  components: {
    FilterSimple,
    FilterOutline
  },
  data() {
    return {
      isShown: false,
      isActive: false,
      currentValue: ''
    }
  },
  methods: {
    changeFilter() {
      this.currentValue.length ? this.isActive = true : this.isActive = false;
      this.isShown = false;
      this.$emit('filters-change', { field: this.field, value: this.currentValue });
    },
    clearFilter() {
      this.currentValue = '';
      this.changeFilter();
    }
  }
}
</script>

<style scoped>
.filter-wrapper {
  position: relative;
}

.modal-toggler {
  background: transparent;
  border: none;
  color: #f8ab37;
  padding: 0px;
}

.modal-toggler.active {
  color: #da2c4d;
}

.input-container {
  position: absolute;
  top: 40px;
  padding: 10px;
  background: #ffffff;
  border: thin solid slategray;
  border-radius: 5px;
}

.input-container div {
  display: flex;
  justify-content: flex-end;
  padding: 5px 0;
}

.input-container button {
  border: none;
  border-radius: 3px;
  color: #ffffff;
  font-size: 10px;
  text-transform: uppercase;
  padding: 10px;
  margin-left: 5px;
  background-image: linear-gradient(160deg, #da2c4d, #f8ab37);
}
</style>