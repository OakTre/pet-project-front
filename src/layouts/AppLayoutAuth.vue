<script setup>
import {
    ComponentCustomerNavigation,
    ComponentHeader,
    ComponentAuthBox,
    ComponentToggle
} from '@/components'
</script>

<template>
    <ComponentHeader />
    <main class="main app-main">
        <div class="app-container">
            <div class="logo__wrapper">
                <img
                    class="logo"
                    src="@/assets/images/logo.png"
                    alt="Company Logo"
                />
            </div>
            <ComponentAuthBox>
                <template v-slot:componentToggle>
                    <ComponentToggle />
                </template>
                <slot />
            </ComponentAuthBox>
        </div>
    </main>
    <footer class="footer">
        <div class="app-container">
            <ComponentCustomerNavigation />
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    margin-bottom: var(--offset-32);
}

.logo {
    margin: 0 auto;
    width: 26.4rem;
    height: 6.8rem;
    object-fit: contain;

    &__wrapper {
        display: flex;
        margin-top: var(--offset-32);
        margin-bottom: var(--offset-48);
    }
}
</style>
