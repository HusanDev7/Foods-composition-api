import apiMeals from '@/helpers/api/api'
import { defineStore } from 'pinia'

export const useMealsStore = defineStore('meals', {
  state: () => ({
    meals: null
  }),
  actions: {
    async getMeals() {
      try {
        const res = await apiMeals.getMeals()
        this.meals = res.meals
      } catch (error) {
        console.error(error);
      }
    }
  }
})
