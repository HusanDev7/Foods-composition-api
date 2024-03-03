import { defineStore } from "pinia";
import { useMealsStore } from "@/stores/mealsStore";
import { useCategoryStore } from "@/stores/categorySingleStore";

export const useFavouriteStore = defineStore("favourite", {
  state: () => ({
    favourites: [],
  }),
  actions: {
    getAddFavMeal(id) {
      const mealsStore = useMealsStore();
      const categoryStore = useCategoryStore();
      const favMeal = mealsStore.meals?.find((item) => item.idMeal == id);
      const favCategory = categoryStore.category?.find((item) => item.idMeal == id);
      if (favMeal) {
        this.favourites.push(favMeal)
      } else {
        this.favourites.push(favCategory)
      }
    },
  },
  persist: true,
});
