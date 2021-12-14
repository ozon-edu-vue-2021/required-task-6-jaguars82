<script>
export default {
  name: "InfinitePaginationMixin",
  data() {
    return {
      infiniteScroll: {
        lastLoadedPage: 1,
      }     
    }
  },
  methods: {
    loadPage(page) {
      this.infiniteScroll.lastLoadedPage = page;
      this.getData(`https://jaguars82-json-server.herokuapp.com/cars?_page=${page}`);
    }
  }
}
</script>