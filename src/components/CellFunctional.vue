<script>
export default {
  name: "CellFunctional",
  functional: true,
  props: {
    name: {
      type: String,
      required: true
    },
    item: {
      type: [String, Number],
      required: true
    }
  },
  render: function(createElement, context) {
    return createElement('div', {
      class: [
        'cell',
        `cell-${context.props.name}`
      ],
      domProps: {
        innerHTML: context.props.item
      }
    });
  }
}
</script>