<script>
export default {
  name: "StaticPaginationMixin",
  data() {
    return {
      staticPagination: {
        currentPage: 1,
        prevPage: 0
      }     
    }
  },
  methods: {
    goToPage(page) {
      this.staticPagination.currentPage = page;
      this.staticPagination.prevPage = page - 1;
      this.getData(`https://jaguars82-json-server.herokuapp.com/cars?_page=${page}`);
    }
  }
}
</script>