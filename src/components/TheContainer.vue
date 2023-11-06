<template>
    <div>
        <ColorPickerButton />
        <ColorList />
    </div>
</template>

<script setup lang="ts">
import { ColorPickerButton, ColorList } from "./index";
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding-bottom: 0.5rem;
}
</style>
