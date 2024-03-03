<script setup>
    const props = defineProps({
        text: {
            type: String,
            default: "Text"
        }
    })
</script>

<template>
    <button class="btn">
        {{ text }}
    </button>
</template>