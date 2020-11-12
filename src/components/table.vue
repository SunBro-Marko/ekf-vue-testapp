<template>
  <div class="overflow-auto">
    <b-table
      id="prices_table"
      hover
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      small
      @row-clicked="action"
    ></b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      :limit="5"
      size="sm"
      align="center"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: 'vtable',
  props: ['items', 'action'],
  data() {
    return {
      perPage: 15,
      currentPage: 1,
      fields: [
        { key: 'product.name', label: 'Наименование' },
        { key: 'product.vendor_code', label: 'Артикул' },
        { key: 'product.series', label: 'Серия' },
        { key: 'price', label: 'Стоимость', formatter: 'priceFormatter' },
      ],
    }
  },
  computed: {
    rows() {
      return this.items.length
    },
  },
  methods: {
    priceFormatter(value, key, item) {
      return Math.ceil(value)
    },
  },
}
</script>

<style></style>
