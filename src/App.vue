<template>
    <div>
        <TheContainer v-if="supported" />
        <SupportGuide v-else />
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { SupportGuide, TheContainer } from "./components";

// EyeDropper support check
const supported = ref(false);
const checkSupport = () => (supported.value = !!window.EyeDropper);

onBeforeMount(() => {
    checkSupport();
});
</script>

<style lang="scss" scoped>
div {
    width: 300px;
}
</style>
