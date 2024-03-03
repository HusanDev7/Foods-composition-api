<script setup>

const props = defineProps({
    size: {
        type: Number,
        default: 24
    },
    color: {
        type: String,
        default: "var(--secondary-color)"
    }
})

</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
  >
    <path
      :fill="color"
      d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8"
    />
  </svg>
</template>
