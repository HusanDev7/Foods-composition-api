<script setup>
import Button from "@/components/button/Button.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import { useFavouriteStore } from "@/stores/favouriteStore";
import { ref } from "vue";

const favouriteStore = useFavouriteStore()

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  isBtn: Boolean,
});

const isActive = ref(false);
</script>

<template>
  <div class="card">
    <RouterLink :to="'/meal/' + card.idMeal" class="card__link">
      <img
        :src="card.strMealThumb ?? '@/assets/img/no-photo.jpg'"
        alt=""
        class="card__image"
        loading="lazy"
      />
    </RouterLink>
    <h3 class="card__title">{{ card.strMeal }}</h3>
    <div class="card__btns">
      <RouterLink
        v-show="isBtn"
        :to="'/category/' + card.strCategory"
        class="card__btns-link"
      >
        <Button :text="card.strCategory" />
      </RouterLink>
      <button class="card__fav" @click="isActive = !isActive, favouriteStore.getAddFavMeal(card.idMeal)" :class="{ 'active': isActive }">
        <IconHeart />
      </button>
    </div>
  </div>
</template>
