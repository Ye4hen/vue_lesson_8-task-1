<template>
    <div class="products">
        <ul class="products__list">
            <li v-for="product in productsData" :key="product.id" class="products__item">
                <a :href="product.link" class="products__image">
                    <img :src="product.img" :alt="product.name" />
                </a>
                <div class="products__info">
                    <h4 class="products__title">
                        <a :href="product.link" class="products__title-link">
                            {{ product.name }}
                        </a>
                    </h4>
                    <div v-if="product.discount" class="products__prices">
                        <strong class="products__discount"> {{ product.discount }} $ </strong>
                        <div class="products__price-discount">{{ product.price }} $</div>
                    </div>
                    <div v-else class="products__price">{{ product.price }} $</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProductList',

    props: {
        productsData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style>
</style>