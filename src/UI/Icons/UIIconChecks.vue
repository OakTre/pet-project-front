<template>
    <svg
        class="ui-icon ui-icon-checks"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path
            d="M11.8038 6.5625L4.92883 13.4375L1.49133 10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M18.9913 6.5625L12.1163 13.4375L10.2882 11.6094"
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
.ui-icon-checks {
    stroke: currentColor;
}
</style>
