<template>
    <ul v-show="hasColor" class="color-list">
        <ColorItem
            v-for="(color, index) in colorStore.list"
            :key="index"
            :hex="color"
            @onRemoveColor="handleRemoveColor(index)"
        />
    </ul>

    <p v-show="hasColor" class="copy-guide">Click to copy to the clipboard</p>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { ColorItem } from "./index";

import { useColor, useTemplate } from "../stores";
import { setStorage } from "../utils";

const colorStore = useColor();
const templateStore = useTemplate();

const hasColor = computed(() => colorStore.list.length);

function handleRemoveColor(index: number) {
    const removedItemList = colorStore.list.filter(
        (_, itemIndex) => itemIndex !== index,
    );

    colorStore.removeColor(index);

    const { domain } = templateStore;
    if (!domain) {
        return;
    }

    setStorage(domain, removedItemList);
}
</script>

<style lang="scss">
.color-list {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    justify-content: center;

    > li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 1rem;
        position: relative;

        > button {
            font-size: 14px;
            font-weight: 600;
            color: #666;

            &:nth-child(2) {
                position: absolute;
                left: 55%;
                transform: translate(-50%);
            }

            &.remove-color-button {
                border-radius: 100%;
                width: 20px;
                height: 20px;
                border: 1px solid #333;
                background-color: var(--color-item);
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s;

                &:hover {
                    background-color: #333;
                    > svg {
                        opacity: 1;
                    }
                }

                > svg {
                    transition: all 0.3s;
                    opacity: 0;
                }
            }

            &:not(.remove-color-button) {
                transition: color 0.3s;

                &:hover {
                    color: rgb(26, 115, 232);
                }
            }
        }
    }
}

.copy-guide {
    text-align: center;
    color: #888;
    margin-top: -0.5rem;
}
</style>
