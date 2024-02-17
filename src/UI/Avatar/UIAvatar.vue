<template>
    <div class="ui-avatar">
        <img
            class="ui-avatar__image"
            src="@/assets/images/avatar.jpg"
            alt=""
        />
    </div>
</template>

<script setup>
defineProps({
    img: {
        type: String,
        default: ''
    }
})
</script>

<style scoped lang="scss">
.ui-avatar {
    border-radius: 50%;
    overflow: hidden;
    width: 12rem;
    height: 12rem;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
}
</style>
