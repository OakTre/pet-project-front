<template>
    <nav class="customer-navigation">
        <ul class="customer-navigation__list">
            <li
                v-for="link in links"
                :key="link.id"
                class="customer-navigation__item"
            >
                <a
                    href="#"
                    class="customer-navigation__link"
                >
                    {{ link.name }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const links = ref([
    { id: 0, name: 'Конфиденциальность' },
    { id: 0, name: 'Правила платформы' },
    { id: 0, name: 'Управление подпиской' },
    { id: 0, name: 'Условия оплаты' },
    { id: 0, name: 'Написать в поддержку' },
    { id: 0, name: 'Возмещение' }
])
</script>

<style scoped lang="scss">
.customer-navigation {
    padding-top: var(--offset-16);
    border-top: 1px solid var(--color-dark-grey);

    &__list {
        display: flex;
        align-items: center;
        gap: var(--offset-16);
    }

    &__link {
        font: var(--font-14-20-regular);
        color: var(--color-darker-grey);
    }
}
</style>
