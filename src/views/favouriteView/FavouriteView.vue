<script setup>
import Card from "@/components/card/Card.vue";
import { useFavouriteStore } from "@/stores/favouriteStore";
const favouriteStore = useFavouriteStore();
</script>

<template>
  <section class="favourite">
    <div class="container">
      <h2 class="favourite__title">Favourites foods</h2>
      <div class="favourite__cards">
        <Card
          v-for="item in favouriteStore.favourites"
          :key="item.idMeal"
          :card="item"
          :isBtn="false"
        />
      </div>
    </div>
  </section>
</template>
