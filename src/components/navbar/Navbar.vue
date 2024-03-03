<script setup>

import IconSearch from "@/components/icons/IconSearch.vue";
import { ref } from "vue";

const pages = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/favourite",
        name: "Favourite"
    },
    {
        path: "/contacts",
        name: "Contacts"
    },
]

const menu = ref(false)

</script>
<template>
  <nav class="nav">
    <div class="container">
        <RouterLink to="/" class="nav__logo">Foods</RouterLink>
        <div class="nav__menu" :class="{'active': menu}">
            <ul class="nav__menu-list">
                <li class="nav__menu-item" v-for="item in pages" :key="item.name">
                    <RouterLink :to="item.path" class="nav__menu-link">{{ item.name }}</RouterLink>
                </li>
            </ul>
        </div>
        <form action="" class="nav__form">
            <input type="text" placeholder="Search..." required class="nav__form-input">
            <button class="nav__form-btn"><IconSearch color="#fff"/></button>
        </form>
        <div class="nav__burger" @click="menu = !menu">
            <span class="nav__burger-line" :class="{'active': menu}"></span>
        </div>
    </div>
  </nav>
</template>
