<template>
    <svg
        class="ui-icon ui-icon-inter-sex"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path d="M8.375 13.125C10.9638 13.125 13.0625 11.0263 13.0625 8.4375C13.0625 5.84867 10.9638 3.75 8.375 3.75C5.78617 3.75 3.6875 5.84867 3.6875 8.4375C3.6875 11.0263 5.78617 13.125 8.375 13.125Z" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.375 13.125V18.125" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.875 15.9375H10.875" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.125 1.875H15.25V5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.8438 5.28125L15.25 1.875" stroke-linecap="round" stroke-linejoin="round"/>
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
.ui-icon-inter-sex {
    stroke: currentColor;
}
</style>
