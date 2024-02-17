<script setup>
import { useDefaultLoading } from '@/stores'
import AsideForm from '@/modules/AsideForm'
import {
    ComponentHeader,
    ComponentCustomerNavigation,
    ComponentLoading
} from '@/components'

const defaultLoading = useDefaultLoading()
</script>

<template>
    <ComponentHeader />
    <main class="main">
        <div class="app-container app-default-layout">
            <div class="app-default-aside">
                <AsideForm />
            </div>
            <div class="app-default-content">
                <ComponentLoading v-if="defaultLoading.isLoading" />
                <slot v-else />
                <ComponentCustomerNavigation />
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">
.main {
    background-color: var(--color-white);
}

.app-default-content {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.app-default-layout {
    display: flex;
    gap: 3.2rem;
    min-height: calc(100vh - (var(--offset-32) * 2));
}
</style>
