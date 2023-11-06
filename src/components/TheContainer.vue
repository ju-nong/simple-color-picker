<template>
    <div>
        <CopiedAlert />
        <ColorPickerButton />
        <ColorList />
    </div>
</template>

<script setup lang="ts">
import { ColorPickerButton, ColorList, CopiedAlert } from "./index";
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding-bottom: 0.5rem;
    position: relative;
}
</style>
