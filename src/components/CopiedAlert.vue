<template>
    <div :class="{ on: isON }">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M9 18q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.588T3 20V6h2v14h11v2H5Zm4-6V4v12Z"
            ></path>
        </svg>
        Copied
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";

import { useTemplate } from "../stores";

const template = useTemplate();
const copyTrigger = computed(() => template.copyTrigger);

const isON = ref(false);
const $timeout = ref<null | undefined | ReturnType<typeof setTimeout>>(null);

watch(copyTrigger, () => {
    // setTimeout ID가 있는 경우
    if (typeof $timeout.value === "number") {
        clearTimeout($timeout.value);
    }

    isON.value = true;

    $timeout.value = setTimeout(() => {
        isON.value = false;
    }, 1500);
});
</script>

<style lang="scss" scoped>
div {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    display: flex;
    flex-direction: row;
    column-gap: 0.25rem;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    color: #329672;
    transition: all 0.3s;
    opacity: 0;

    &.on {
        opacity: 1;
    }
}
</style>
