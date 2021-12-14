<template>
  <div>
    <div :class="['data-table', {'space': mode === 'vs'}]">

      <div
        v-for="header of tableHeaders"
        :class="['header', `cell-${header.class}`]"
        :key="header.field"
      >
        <FilterControlUnit
          v-if="mode === 'base'"
          :field="header.field"
          @filters-change="$emit('filters-change', $event)"
        />
        <span>{{ header.name }}</span>
        <SortControlUnit
          v-if="mode === 'base'"
          :field="header.field"
          @sorters-change="$emit('sorters-change', $event)"
        />
      </div>

      <VirtualList
        class="virtual-list"
        v-if="mode === 'vs'"
        :data-key="'objectId'"
        :data-sources="rows"
        :data-component="VirtualScrollRow"
      />
      <template v-else>
        <template v-for="car of rows">
          <component :is="cellComponent" :key="`vendor-${car.objectId}`" :name="'vendor'" :item="car.Make"/>
          <component :is="cellComponent" :key="`model-${car.objectId}`" :name="'model'" :item="car.Model"/>
          <component :is="cellComponent" :key="`category-${car.objectId}`" :name="'category'" :item="car.Category"/>
          <component :is="cellComponent" :key="`year-${car.objectId}`" :name="'year'" :item="car.Year"/>
        </template>
      </template>

    </div>

    <InfiniteScrollControlUnit
      v-if="mode === 'is'"
      :currentPage="infiniteScroll.lastLoadedPage"
      @load-page="$emit('load-page', $event)"
    />

    <PaginationControlUnit
      v-if="mode === 'pag'"
      :currentPage="staticPagination.currentPage"
      :prevPage="staticPagination.prevPage"
      @go-to-page="$emit('go-to-page', $event)"
    />

  </div>
</template>

<script>
import VirtualScrollRow from './VirtualScrollRow.vue';

export default {
  name: "DataTable",
  components: {
    FilterControlUnit: () => import('./controls/FilterControlUnit.vue'),
    SortControlUnit: () => import('./controls/SortControlUnit.vue'),
    PaginationControlUnit: () => import('./controls/PaginationControlUnit.vue'),
    InfiniteScrollControlUnit: () => import('./controls/InfiniteScrollControlUnit.vue'),
    VirtualList: () => import('vue-virtual-scroll-list'),
    CellClassic: () => import('./CellClassic.vue'),
    CellFunctional: () => import('./CellFunctional.vue')
  },
  props: {
    mode: {
      type: String,
      default: 'base',
      required: true
    },
    functionalComponents: {
      type: Boolean,
      default: false
    },
    tableHeaders: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    },
    staticPagination: {
      type: Object,
      default: () => {}
    },
    infiniteScroll: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      VirtualScrollRow,
    }
  },
  computed: {
    cellComponent() {
      return this.functionalComponents ? 'CellFunctional' : 'CellClassic';
    }
  }
}
</script>

<style scoped>
.data-table {
  display: grid;
  grid: auto-flow / [vendor] 100px [model] 200px [category] 200px [year] 100px;
  grid-gap: 5px;
}

.space {
  margin-top: 100px;
}

.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 60px;
  background-color: wheat;
}

.header span {
  margin: auto;
  color: #da2c4d;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
}

.cell {
  padding: 10px;
  background-color: #f0eff3;
}

.cell-vendor {
  grid-column-start: vendor span 1;
}

.cell-model {
  grid-column-start: model span 1;
}

.cell-category {
  grid-column-start: category span 1;
}

.cell-year {
  grid-column-start: year span 1;
}

.virtual-list {
  width: 650px;
  height: 360px;
  overflow-y: auto;
}
</style>