<template>
    <div class="container">
        {{ supported ? "지원합니다" : "지원 안 합니다" }}
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

const supported = ref(false);

const checkSupport = () => (supported.value = !!window.EyeDropper);

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
