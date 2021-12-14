<script>
export default {
  name: "FilterSortMixin",
  data() {
    return {
      filters: {},
      sorters: {},
    }
  },
  methods: {
    filtersChange(e) {
      if (!Object.keys(this.filters).includes(e.field)) {
        this.$set(this.filters, e.field, e.value);
      } else {
        e.value
         ? this.filters[e.field] = e.value
         : this.$delete(this.filters, e.field);
      }
      this.processedRows = this.filterRows();
    },
    filterRows() {
      let rows;
      if (Object.keys(this.sorters).length) {
        rows = this.processedRows;
      } else {
        rows = this.rows;
      }

      Object.keys(this.filters).forEach(filter => {
        rows = rows.filter(row => {
          return typeof row[filter] === 'string'
            ? row[filter].toLowerCase().includes(this.filters[filter].toLowerCase())
            : this.filters[filter]
              ? row[filter] == this.filters[filter]
              : row[filter];
        });
      });

      return rows;
    },
    sortersChange(e) {
      if (!Object.keys(this.sorters).includes(e.field)) {
        this.$set(this.sorters, e.field, e.value);
      } else {
        e.value === 0
          ? this.$delete(this.sorters, e.field)
          : this.sorters[e.field] = e.value;
      }
      this.processedRows = this.sortRows();
    },
    sortRows() {
      let rows;
      if (Object.keys(this.filters).length) {
        rows = this.processedRows;
      } else {
        rows = this.rows;
      }

      const fields = Object.keys(this.sorters);
      const orders = Object.values(this.sorters);

      rows = rows.sort(function(a, b) {
        for(let i = 0; i < fields.length; i++) {
          if(a[fields[i]] < b[fields[i]]) return orders[i];
          if(a[fields[i]] > b[fields[i]]) return -orders[i];
        }
      });

      return rows;
    }  
  }
}
</script>