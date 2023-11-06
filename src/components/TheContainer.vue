<template>
    <div>
        <CopiedAlert />
        <ColorPickerButton />
        <ColorList />
        <TheFooter />
    </div>
</template>

<script setup lang="ts">
import { ColorPickerButton, ColorList, CopiedAlert, TheFooter } from "./index";
</script>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    position: relative;
}
</style>
