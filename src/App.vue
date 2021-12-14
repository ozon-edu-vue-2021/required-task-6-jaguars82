<template>
  <div id="app">
    <ModeToggler
      @mode-change="modeChange"
      @func-change="funcChange"
    />
    <DataTable
      :mode="mode"
      :functionalComponents="functionalComponents"
      :tableHeaders="tableHeaders"
      :rows="processedRows"
      :staticPagination="staticPagination"
      :infiniteScroll="infiniteScroll"
      @filters-change="filtersChange"
      @sorters-change="sortersChange"
      @go-to-page="goToPage"
      @load-page="loadPage"
    />
  </div>
</template>

<script>
import FilterSortMixin from './components/mode-mixins/FilterSortMixin.vue';
import StaticPaginationMixin from './components/mode-mixins/StaticPaginationMixin.vue';
import infiniteScrollMixin from './components/mode-mixins/InfiniteScrollMixin.vue';
import DataTable from './components/DataTable.vue';
import ModeToggler from './components/ModeToggler.vue';

export default {
  name: 'App',
  components: {
    DataTable,
    ModeToggler
  },
  mixins: [
    FilterSortMixin,
    StaticPaginationMixin,
    infiniteScrollMixin
  ],
  data() {
    return {
      mode: 'base',
      functionalComponents: false,
      tableHeaders: [
        {
          class: 'vendor',
          field: 'Make',
          name: 'Марка',
        },
        {
          class: 'model',
          field: 'Model',
          name: 'Модель',
        },
        {
          class: 'category',
          field: 'Category',
          name: 'Кузов',
        },
        {
          class: 'year',
          field: 'Year',
          name: 'Год',
        },
      ],
      rows: [],
      processedRows: [],
    }
  },
  methods: {
    modeChange(e) {
      switch(e) {
        case 'pag':
          this.goToPage(1);
          break;
        case 'is':
          this.processedRows = this.rows = [];
          this.loadPage(1);
          break;
        default:
          this.getData('https://jaguars82-json-server.herokuapp.com/cars');
      }
      this.mode = e;
    },
    funcChange(e) {
      this.functionalComponents = e;
    },
    async getData(query) {
      const response = await fetch(query);
      const result = await response.json();
      if(this.mode === 'is') {
        this.processedRows = this.rows = this.processedRows.concat(result);
      } else {
         this.processedRows = this.rows = result;
      }
    }
  },
  async created() {
    this.getData('https://jaguars82-json-server.herokuapp.com/cars');
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
