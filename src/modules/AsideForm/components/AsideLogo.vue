<template>
    <RouterLink
        class="logo__link"
        to="/"
    >
        <img
            class="logo"
            src="../assets/logo.png"
            alt="Logo"
        />
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped lang="scss">
.logo {
    width: 17.1rem;
    height: 5.8rem;
    object-fit: contain;
    align-self: center;

    &__link {
        align-self: center;
    }
}
</style>
