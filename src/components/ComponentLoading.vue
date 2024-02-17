<template>
    <div class="component-loading">
        <UIIconLoading class="component-loading__icon" />
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">

.component-loading {
    display: flex;
    justify-content: center;
    padding: 4rem 0;
    background-color: rgba(255, 255, 255, 10%);
    color: var(--color-blue);

    &__icon {
        width: 3rem;
        height: 3rem;
        animation: rotate 1s infinite linear;
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }
}
</style>
