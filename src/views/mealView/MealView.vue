<script setup>

import { useRoute } from "vue-router";
import { useMealSingleStore } from "@/stores/mealSingleStore";

const route = useRoute()

const mealSingleStore = useMealSingleStore()
mealSingleStore.getSingleMeal(route.params.id)

</script>

<template>
  <section class="meal">
    <div class="container">
        <h2 class="meal__title">Meal name {{ mealSingleStore.meal?.strMeal }}</h2>
        <div class="meal__content">
          <img :src="mealSingleStore.meal?.strMealThumb ?? '@/assets/img/no-photo.jpg'" alt="" class="meal__content-image">
          <ul class="meal__content-list">
            <li class="meal__content-item" v-for="item in 20" :key="item">
              <span v-if="mealSingleStore.meal?.[`strIngredient${item}`]" class="meal__content-ingredient">{{ mealSingleStore.meal?.[`strIngredient${item}`] }}: </span>
              <span v-if="mealSingleStore.meal?.[`strMeasure${item}`]" class="meal__content-measure">{{ mealSingleStore.meal?.[`strMeasure${item}`] }}</span>
            </li>
          </ul>
          <p class="meal__content-txt">{{ mealSingleStore.meal?.strInstructions }}</p>
        </div>
    </div>
  </section>
</template>
