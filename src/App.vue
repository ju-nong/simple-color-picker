<template>
    <div class="container">
        <button @click="handleClick">Color Picker</button><br />
        <button @click="handleCopy(colorHex)">{{ colorHex }}</button><br />
        <button @click="handleCopy(colorRGB)">{{ colorRGB }}</button><br />

        {{ supported ? "지원합니다" : "지원 안 합니다" }}
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";

// EyeDropper support check
const supported = ref(false);
const checkSupport = () => (supported.value = !!window.EyeDropper);

const eyeDropper = ref(new window.EyeDropper());

const colorHex = ref("");
const colorRGB = computed(() => {
    const validHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        colorHex.value,
    );

    return validHex
        ? `rgb(${parseInt(validHex[1], 16)},
            ${parseInt(validHex[2], 16)},
            ${parseInt(validHex[3], 16)})`
        : "";
});

async function handleClick() {
    const { sRGBHex } = await eyeDropper.value.open();

    colorHex.value = sRGBHex;
}

function handleCopy(color: string) {
    try {
        navigator.clipboard.writeText(color);
    } catch (error) {
        console.log(error);
    }
}

onBeforeMount(() => {
    checkSupport();
});
</script>

<style lang="scss">
.container {
    width: 500px;
    height: 500px;
}
</style>
