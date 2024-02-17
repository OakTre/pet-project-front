<template>
    <button class="ui-button-circle">
        <span class="ui-button-circle__outer">
            <span class="ui-button-circle__inner">
                <component :is="icon" />
            </span>
        </span>
    </button>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    }
})
</script>

<style scoped lang="scss">
.ui-button-circle {
    --w: var(--offset-80);
    --h: var(--w);

    @include flex-center;
    width: var(--w);
    height: var(--h);

    &__outer {
        @include flex-center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: var(--color-white-alpha-80);
    }

    &__inner {
        @include flex-center;
        width: 77%;
        height: 77%;
        border-radius: 50%;
        background-color: var(--color-white);

        svg {
            width: 60%;
            height: 60%;
        }
    }
}
</style>
