<script setup>
import Card from "@/components/card/Card.vue";
import { useCategoryStore } from "@/stores/categorySingleStore";
import { useRoute } from "vue-router";

const route = useRoute()

const categoryStore = useCategoryStore();
categoryStore.getCategorySingle(route.params.category);
</script>

<template>
  <section class="category">
    <div class="container">
      <h2 class="category__title">Category</h2>
      <div class="category__cards">
        <Card
          v-for="item in categoryStore.category"
          :key="item.idMeal"
          :card="item"
          :isBtn="false"
        />
      </div>
    </div>
  </section>
</template>
