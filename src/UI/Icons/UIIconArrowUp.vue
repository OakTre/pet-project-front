<template>
    <svg
        class="ui-icon ui-icon-arrow-up"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path
            d="M16.25 13L10 6.75L3.75 13"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script setup>
defineProps({
    width: {
        type: Number,
        default: 20
    },
    height: {
        type: Number,
        default: 20
    }
})
</script>

<style scoped>
.ui-icon-arrow-up {
    stroke: currentColor;
}
</style>
