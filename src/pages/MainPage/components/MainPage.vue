<script setup>
import UIDropdown from '@/UI/Dropdown/UIDropdown.vue'
</script>

<template>
    <div class="page-main">
        Главная страница

        <UIDropdown
            name="interests"
            placeholder="Интересы"
        />
    </div>
</template>

<style lang="scss">
.page-main {
    flex-grow: 1;
}
</style>
