<template>
    <svg
        class="ui-icon ui-icon-arrow-right"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path
            d="M7.5 3.75L13.75 10L7.5 16.25"
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
.ui-icon-arrow-right {
    stroke: currentColor;
}
</style>
