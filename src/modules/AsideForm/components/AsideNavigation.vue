<template>
    <nav class="aside-navigation">
        <ul class="aside-navigation__list">
            <li class="aside-navigation__link">
                <AsideMeetings />
            </li>
            <li
                class="aside-navigation__link"
                v-for="link in list"
                :key="link.id"
            >
                <AsideLink>
                    {{ link.name }}
                </AsideLink>
            </li>
            <li class="aside-navigation__link">
                <UIDivider />
            </li>
            <li class="aside-navigation__link">
                <AsidePremiumButton />
            </li>
            <li class="aside-navigation__link">
                <AsideLogoutButton />
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import AsideLink from './AsideLink.vue'
import UIDivider from '@/UI/Divider'
import AsideLogoutButton from './AsideLogoutButton.vue'
import AsidePremiumButton from './AsidePremiumButton.vue'
import AsideMeetings from './AsideMeetings.vue'

const list = ref([
    { id: 0, name: 'Поиск по людям' },
    { id: 1, name: 'Сообщения' },
    { id: 2, name: 'Ты нравишься' },
    { id: 3, name: 'Совпадения' }
])
</script>

<style scoped lang="scss">
.aside-navigation {
    align-self: stretch;
    margin-top: var(--offset-24);
    padding-top: var(--offset-24);
    border-top: 1px solid var(--color-dark-grey);

    &__link {
        margin-bottom: 1.6rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
