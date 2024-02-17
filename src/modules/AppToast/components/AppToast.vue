<template>
    <Transition name="slide-fade">
        <div
            class="layout-bages"
            v-if="appToast.isMessageShown"
        >
            <ComponentBadge
                @close="closeAppWarningMessage"
                :type="appToast.type"
            >
                {{ appToast.content }}
            </ComponentBadge>
        </div>
    </Transition>
</template>

<script setup>
import ComponentBadge from '@/components/ComponentBadge.vue'
import { useAppToast } from '../store/appToast'

const appToast = useAppToast()

const closeAppWarningMessage = () => {
    appToast.closeMessage()
}
</script>

<style scoped lang="scss">
.layout-bages {
    position: fixed;
    top: 5rem;
    right: 4rem;
    z-index: 55;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.slide-fade-enter-active {
    transition: all var(--transition) ease-out;
}

.slide-fade-leave-active {
    transition: all var(--transition) cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-2rem);
    opacity: 0;
}
</style>
