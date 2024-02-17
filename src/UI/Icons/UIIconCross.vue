<template>
    <svg
        class="ui-icon ui-icon-cross"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path d="M15.625 4.375L4.375 15.625" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.625 15.625L4.375 4.375" stroke-linecap="round" stroke-linejoin="round"/>
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
.ui-icon-cross {
    stroke: currentColor;
}
</style>
