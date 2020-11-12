<template>
  <div id="app" class="container">
    <h1>Тестовое задание для компании EKF</h1>
    <h3 class="mb-5">Михаил Алёнин 'sunbro.marko@yandex.ru'</h3>
    <div class="row">
      <div class="col"><vtable v-if="!$apollo.loading" :action="action" v-bind:items="prices"></vtable></div>
      <div class="col">
        <changeForm v-if="changeFormActive" v-bind:item="changedItem" v-bind:action="updateProductByID" />
      </div>
    </div>
    <b-spinner v-if="$apollo.loading" variant="success" label="Spinning"></b-spinner>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import vtable from '@/components/table.vue'
import changeForm from '@/components/changeForm.vue'

const GET_PRICES = gql`
  query prices {
    prices(order_by: { product_id: asc_nulls_first }) {
      price
      product {
        id
        name
        vendor_code
        series
      }
    }
  }
`
const UPDATE_PRODUCT_BY_ID = gql`
  mutation update_prices($id: String!, $name: String!, $vendor_code: String!) {
    update_products(_set: { name: $name, vendor_code: $vendor_code }, where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        id
        name
        vendor_code
      }
    }
  }
`

export default {
  name: 'App',
  data() {
    return {
      offset: 0,
      changedItem: '',
      changeFormActive: false,
      inMutation: false,
    }
  },
  apollo: {
    prices: {
      query: GET_PRICES,
    },
  },
  methods: {
    action(item) {
      this.changedItem = item
      this.changeFormActive = true
    },
    updateProductByID(id, name, vendor_code, itemCopy) {
      this.$apollo.mutate({
        mutation: UPDATE_PRODUCT_BY_ID,
        variables: {
          id,
          name,
          vendor_code,
        },
      })
    },
  },
  components: {
    vtable,
    changeForm,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
td {
  cursor: pointer;
}
</style>
