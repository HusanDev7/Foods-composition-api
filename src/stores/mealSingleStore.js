import apiMeals from '@/helpers/api/api'
import { defineStore } from 'pinia'

export const useMealSingleStore = defineStore('mealSingle', {
  state: () => ({
    meal: null
  }),
  actions: {
    async getSingleMeal(id) {
      try {
        const res = await apiMeals.getSingleMeal(id)
        this.meal = res.meals[0]
      } catch (error) {
        console.error(error);
      }
    }
  }
})
