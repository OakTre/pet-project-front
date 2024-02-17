<template>
    <aside class="aside">
        <AsideLogo class="aside__logo" />
        <AsideAvatar :name="fullName" />
        <UIButton class="aside__premium">Получить Premium</UIButton>
        <AsideNavigation />
    </aside>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import { useAuthStore } from '@/stores'
import { UIButton } from '@/UI/Button'
import AsideLogo from './AsideLogo.vue'
import AsideAvatar from './AsideAvatar.vue'
import AsideNavigation from './AsideNavigation.vue'
import calculateAge from '../utils/calculateAge'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const age = calculateAge(user.value.birthday)
const fullName = computed(() => `${user.value.name}, ${age}`)
</script>

<style scoped lang="scss">
.aside {
    width: 29.6rem;
    flex-shrink: 0;
    background-color: var(--color-light-grey);
    height: auto;
    border-radius: 1.4rem;
    padding: 2.4rem 2.4rem 3.2rem;
    display: flex;
    flex-direction: column;

    &__logo {
        margin-bottom: 2.4rem;
    }

    &__premium {
        width: 100%;
        margin-top: 2.4rem;
    }
}
</style>
