<template>
    <svg
        class="ui-icon ui-icon-chats"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path
            d="M5.59375 11.25L2.5 13.75V3.75C2.5 3.58424 2.56585 3.42527 2.68306 3.30806C2.80027 3.19085 2.95924 3.125 3.125 3.125H13.125C13.2908 3.125 13.4497 3.19085 13.5669 3.30806C13.6842 3.42527 13.75 3.58424 13.75 3.75V10.625C13.75 10.7908 13.6842 10.9497 13.5669 11.0669C13.4497 11.1842 13.2908 11.25 13.125 11.25H5.59375Z"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M6.25 11.25V14.375C6.25 14.5408 6.31585 14.6997 6.43306 14.8169C6.55027 14.9342 6.70924 15 6.875 15H14.4062L17.5 17.5V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H13.75"
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
.ui-icon-chats {
    stroke: currentColor;
}
</style>
