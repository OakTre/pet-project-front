<template>
    <svg
        class="ui-icon ui-icon-closed-eye"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path d="M15.7109 9.94531L17.5 13.0312" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.0469 11.6641L12.6016 14.8125" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.94531 11.6562L7.39062 14.8125" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.28125 9.94531L2.49219 13.0469" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.5 8.19531C3.8125 9.82031 6.21875 11.875 10 11.875C13.7813 11.875 16.1875 9.82031 17.5 8.19531" stroke-linecap="round" stroke-linejoin="round"/>
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
.ui-icon-closed-eye {
    stroke: currentColor;
}
</style>
