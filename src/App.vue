<template>
    <div class="container">
        <button @click="handleClick">Color Picker</button><br />
        <button @click="handleCopy">{{ printColor }}</button>

        {{ supported ? "지원합니다" : "지원 안 합니다" }}
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

// EyeDropper support check
const supported = ref(false);
const checkSupport = () => (supported.value = !!window.EyeDropper);

const eyeDropper = ref(new window.EyeDropper());
const printColor = ref("");

async function handleClick() {
    const { sRGBHex } = await eyeDropper.value.open();

    printColor.value = sRGBHex;
}

function handleCopy() {}

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
