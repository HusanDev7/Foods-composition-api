import axiosClient from "./axiosClient";

const apiMeals = {
    getMeals() {
        const url = "search.php?f=a"
        return axiosClient.get(url)
    },
    getSingleMeal(id) {
        const url = `lookup.php?i=${id}`
        return axiosClient.get(url)
    },
    getCategorySingle(name) {
        const url = `filter.php?c=${name}`
        return axiosClient.get(url)
    }
}

export default apiMeals;