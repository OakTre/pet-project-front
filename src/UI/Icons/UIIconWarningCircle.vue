<template>
    <svg
        class="ui-icon ui-icon-warning-circle"
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
    >
        <path d="M6 10.5C8.48528 10.5 10.5 8.48528 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5Z" stroke="currentColor"/>
        <path d="M6 3.75V6.375" stroke="currentColor" />
        <path d="M6 8.625C6.31066 8.625 6.5625 8.37316 6.5625 8.0625C6.5625 7.75184 6.31066 7.5 6 7.5C5.68934 7.5 5.4375 7.75184 5.4375 8.0625C5.4375 8.37316 5.68934 8.625 6 8.625Z" fill="currentColor"/>
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
