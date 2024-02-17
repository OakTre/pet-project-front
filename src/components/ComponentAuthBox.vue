<template>
    <div class="auth-box">
        <h1 class="auth-box__heading">Войдите или зарегистрируйтесь</h1>

        <slot name="componentToggle"></slot>

        <div class="auth-box__content">
            <slot />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.auth-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 62.4rem;
    width: 100%;
    border-radius: 1.4rem;
    margin: 0 auto;
    background-color: var(--color-white);
    padding: var(--offset-48);

    &__heading {
        font: var(--font-24-32-bold);
        text-align: center;
        margin-bottom: var(--offset-24);
        max-width: 30.9rem;
    }

    &__content {
        align-self: flex-start;
        padding-top: var(--offset-32);
        border-top: 1px solid var(--color-dark-grey);
        width: 100%;
        margin-top: 3.2rem;
    }
}
</style>
