<template>
    <AsideLink :isLink="false">
        Знакомства
        <template v-slot:content>
            <button>
                <UIIconFilter />
            </button>
        </template>
    </AsideLink>
</template>

<script setup>
import AsideLink from './AsideLink.vue'
</script>
