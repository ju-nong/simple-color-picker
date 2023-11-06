<template>
    <ul class="color-list">
        <ColorItem
            v-for="(color, index) in colorStore.list"
            :key="index"
            :hex="color"
            @onRemoveColor="colorStore.removeColor(index)"
        />
    </ul>
</template>

<script setup lang="ts">
import { ColorItem } from "./index";

import { useColor } from "../stores";

const colorStore = useColor();
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

            &:last-child {
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
        }
    }
}
</style>
