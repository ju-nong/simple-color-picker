<template>
    <li>
        <button @click="handleCopy(props.hex)">{{ props.hex }}</button>
        <button @click="handleCopy(rgb)">{{ rgb }}</button>
        <button
            class="remove-color-button"
            :style="`--color-item: ${props.hex}`"
            @click="emits('onRemoveColor')"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                ></path>
            </svg>
        </button>
    </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

import { useTemplate } from "../stores";

const props = defineProps({
    hex: {
        type: String,
        required: true,
    },
});

const emits = defineEmits(["onRemoveColor"]);

const templateStore = useTemplate();

const rgb = computed(() => {
    const validHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        props.hex,
    );

    return validHex
        ? `rgb(${parseInt(validHex[1], 16)}, ${parseInt(
              validHex[2],
              16,
          )}, ${parseInt(validHex[3], 16)})`
        : "";
});

// 클립보드에 복사
function handleCopy(color: string) {
    try {
        navigator.clipboard.writeText(color);

        templateStore.actionCopy();
    } catch (error) {
        console.error(error);
    }
}
</script>

<style lang="scss"></style>
