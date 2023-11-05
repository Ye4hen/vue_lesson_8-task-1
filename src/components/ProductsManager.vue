<template>
    <div>
        <products-tabs :categories-data="categoriesList" />
        <products-list :products-data="filterProducts" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductsList from './ProductsList.vue'
import ProductsTabs from './ProductsTabs.vue'
export default {
    components: { ProductsList, ProductsTabs },
    name: 'ProductsManager',

    computed: {
        ...mapGetters(['productsList', 'categoriesList', 'filteredList']),
        filterProducts() {
            if (!this.filteredList.length) {
                return this.productsList
            } else {
                return this.filteredList
            }
        },
    },

    methods: {
        ...mapActions(['getProductsList', 'getCategoriesList', 'getCategorizedProducts']),
    },

    created() {
        this.getProductsList()
        this.getCategoriesList()
    },
}
</script>

<style>
</style>