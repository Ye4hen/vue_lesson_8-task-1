import { createStore } from "vuex";
import products from "../data/products.json"
import categories from "../data/categories.json"

export default createStore({
	state() {
		return {
			productsList: [],
			categoriesList: [],
			filteredList: [],
		}
	},
	getters: {
		productsList: ({ productsList }) => productsList,
		categoriesList: ({ categoriesList }) => categoriesList,
		filteredList: ({ filteredList }) => filteredList,
	},
	mutations: {
		setProductsList(state, list) {
			state.productsList = list;
		},
		setCategoriesList(state, list) {
			state.categoriesList = list;
		},
		checkCategory(state, categoryName) {
			state.filteredList = state.productsList.filter(product => {
				if (!categoryName) {
					return true
				} else {
					return product.category === categoryName
				}
			})
		}
	},
	actions: {
		getProductsList({ commit }) {
			commit('setProductsList', products)
		},
		getCategoriesList({ commit }) {
			commit('setCategoriesList', categories)
		},
		getCategorizedProducts({ commit }, categoryName) {
			commit('checkCategory', categoryName)
		}
	},
});
