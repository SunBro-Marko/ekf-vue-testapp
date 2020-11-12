<template>
  <div class="d-flex justify-content-center mb-3">
    <b-card style="max-width: 500px;" bg-variant="light">
      <b-form-group        
        label-cols-lg="12"
        label="Форма редактирования товара"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-2"
      >
        <b-form-group label-cols-sm="4" label="ID:" label-align-sm="right">
          <b-form-input :readonly="true" v-model="itemCopy.product.id"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="4" label="Наименование:" label-align-sm="right">
          <b-form-input v-model="itemCopy.product.name"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="4" label="Артикул:" label-align-sm="right">
          <b-form-input v-model="itemCopy.product.vendor_code"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="4" label="Серия:" label-align-sm="right">
          <b-form-input :readonly="true" v-model="itemCopy.product.series"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="4" label="Стоимость:" label-align-sm="right">
          <b-form-input :readonly="true" v-model="itemCopy.price"></b-form-input>
        </b-form-group>
        <b-button
          v-on:click="action(itemCopy.product.id, itemCopy.product.name, itemCopy.product.vendor_code, itemCopy)"
          variant="primary"
          >Сохранить изменения</b-button
        >
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['item', 'action'],
  computed: {
    itemCopy: function() {
      return JSON.parse(JSON.stringify(this.item))
    },
  },
}
</script>

<style></style>
