<template>
    <svg
        class="ui-icon ui-icon-male"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path d="M8.19934 15.9C10.7882 15.9 12.8868 13.8014 12.8868 11.2125C12.8868 8.62369 10.7882 6.52502 8.19934 6.52502C5.61051 6.52502 3.51184 8.62369 3.51184 11.2125C3.51184 13.8014 5.61051 15.9 8.19934 15.9Z" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9493 4.65002H15.0743V7.77502" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.6681 8.05627L15.0743 4.65002" stroke-linecap="round" stroke-linejoin="round"/>
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
.ui-icon-male {
    stroke: currentColor;
}
</style>
