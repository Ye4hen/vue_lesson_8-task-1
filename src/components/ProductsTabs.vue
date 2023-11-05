<template>
    <div>
        <div class="categories">
            <ul class="categories__list">
                <li
                    v-for="category in categoriesData"
                    :key="category.name"
                    class="categories__item"
                    :class="{ 'selected-category': category.name === categorySubTitle }"
                    @click="selectCategory(category.name)"
                >
                    <div class="categories__image">
                        <img :src="category.img" :alt="category.name" />
                    </div>
                    <h4 class="categories__name">
                        {{ category.name }}
                    </h4>
                </li>
            </ul>
        </div>
        <h5 v-if="categorySubTitle" class="category-sub-title">
            <span>{{ categorySubTitle }}</span> в Україні
        </h5>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ProductsTabs',
    props: {
        categoriesData: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            categorySubTitle: null,
        }
    },

    methods: {
        ...mapActions(['getCategorizedProducts']),
        selectCategory(categoryName) {
            this.getCategorizedProducts(categoryName)
            this.categorySubTitle = categoryName
            console.log(categoryName)
        },
    },
}
</script>

<style>
</style>