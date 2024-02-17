<template>
    <header class="header">
        <RouterLink
            v-for="route in routes"
            :key="route.path"
            :to="route.path"
        >
            {{ route.name }}
        </RouterLink>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { routes } from '@/router'
</script>

<style scoped>
.header {
    display: none;
}
</style>
