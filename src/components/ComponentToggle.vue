<template>
    <div class="toggle">
        <span
            ref="flag"
            class="toggle__flag"
        />
        <ButtonRounded
            ref="authBtn"
            class="toggle__btn"
            :isLink="true"
            to="/auth"
        >
            Вход
        </ButtonRounded>
        <ButtonRounded
            ref="regBtn"
            class="toggle__btn"
            :isLink="true"
            to="/registration"
        >
            Регистрация
        </ButtonRounded>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, watch, nextTick } from 'vue'
import ButtonRounded from '@/UI/ButtonRounded'

const route = useRoute()

const regBtn = ref(null)
const authBtn = ref(null)
const flag = ref(null)

async function setActive(element) {
    if (route.path === '/recovery') {
        await nextTick()
        authBtn.value.$el.classList.add('toggle__btn--active')
    }

    if (route.path === '/registration') {
        await nextTick()
        authBtn.value.$el.classList.remove('toggle__btn--active')
    }

    const flagElement = flag.value
    const el = element.$el

    flagElement.style.left = `${el.offsetLeft}px`
    flagElement.style.width = `${el.offsetWidth}px`
}

watch(route, (newRoute) => {
    if (newRoute.path === '/registration') setActive(regBtn.value)
    else if (newRoute.path === '/auth') setActive(authBtn.value)
    else setActive(authBtn.value)
})

onMounted(() => {
    if (route.path === '/registration') setActive(regBtn.value)
    else if (route.path === '/auth') setActive(authBtn.value)
    else setActive(authBtn.value)
})
</script>

<style scoped lang="scss">
.toggle {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    background-color: var(--color-light-grey);
    padding: 0.2rem;
    border-radius: 3rem;
    overflow: hidden;

    &__flag {
        position: absolute;
        z-index: -1;
        display: block;
        height: 100%;
        width: 10px;
        background-color: var(--color-blue);
        transition: all var(--transition);
        border-radius: 3rem;
    }

    &__btn {
        --bg: transparent;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.1rem;
        width: 13.6rem;

        &.router-link-active,
        &--active {
            --c: var(--color-white);
        }
    }
}
</style>
