<template>
    <svg
        class="ui-icon ui-icon-female"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path d="M9.375 12.15C11.9638 12.15 14.0625 10.0514 14.0625 7.46252C14.0625 4.87369 11.9638 2.77502 9.375 2.77502C6.78617 2.77502 4.6875 4.87369 4.6875 7.46252C4.6875 10.0514 6.78617 12.15 9.375 12.15Z" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.375 12.15V17.15" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.875 14.9625H11.875" stroke-linecap="round" stroke-linejoin="round"/>

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
.ui-icon-female {
    stroke: currentColor;
}
</style>
