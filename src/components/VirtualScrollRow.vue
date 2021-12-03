<template>
  <div class="scroll-wrapper">
    <div class="cell vendor" :key="`vendor-${source.objectId}`">
      {{ source.Make }}
    </div>
    <div class="cell model" :key="`model-${source.objectId}`">
      {{ source.Model }}
    </div>
    <div class="cell category" :key="`category-${source.objectId}`">
      {{ source.Category }}
    </div>
    <div class="cell year" :key="`year-${source.objectId}`">
      {{ source.Year }}
    </div>  
  </div>
</template>

<script>
  export default {
  name: 'RowComponent',
  props: {
    index: {
      type: Number
    },
    source: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.scroll-wrapper {
  display: flex;
}

.vendor {
  width: 100px;
}

.model {
  width: 200px;
}

.category {
  width: 200px;
}

.year {
  width: 100px;
}

.cell {
  margin: 2px;
  padding: 10px 0;
  background-color: #f0eff3;

}
</style>