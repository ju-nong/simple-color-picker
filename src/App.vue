<template>
    <div>
        <TheContainer v-if="supported" />
        <SupportGuide v-else />
    </div>
    <!-- <div class="container">
        <button class="container-icon" @click="handleColorPick">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
            >
                <g fill="none" fillRule="evenodd">
                    <path
                        d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M20.477 3.511a3 3 0 0 0-4.243 0l-1.533 1.533a2.991 2.991 0 0 0-3.41.581l-.713.714a2 2 0 0 0 0 2.829l-6.486 6.485a3 3 0 0 0-.878 2.122v1.8a1.2 1.2 0 0 0 1.2 1.2h1.8a3 3 0 0 0 2.12-.88l6.486-6.484a2 2 0 0 0 2.829 0l.714-.715a2.991 2.991 0 0 0 .581-3.41l1.533-1.532a3 3 0 0 0 0-4.243ZM5.507 17.067l6.485-6.485l1.414 1.414l-6.485 6.486a1 1 0 0 1-.707.293h-1v-1a1 1 0 0 1 .293-.707Z"
                    ></path>
                </g>
            </svg>
        </button>

        <ColorList>
            <ColorItem
                v-for="(color, index) in colors"
                :key="index"
                :hex="color"
                @onRemoveColor="handleRemoveColor(index)"
            />
        </ColorList>

        <p v-show="colors.length" class="container-guide">
            Click to copy to the clipboard
        </p>
        <TheFooter />

        {{ supported ? "지원합니다" : "지원 안 합니다" }}
    </div> -->
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
// import { ColorList, ColorItem, TheFooter } from "./components";

// const colors = ref<string[]>([]);

// // 추출한 색깔 삭제
// const handleRemoveColor = (_index: number) =>
//     (colors.value = colors.value.filter((_, index) => index !== _index));
</script>

<style lang="scss" scoped>
div {
    width: 300px;
}
/* .container {
    width: 300px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding-bottom: 0.5rem;

    &-icon {
        padding: 1rem 0;
        > svg {
            width: 40px;
            height: 40px;
        }
    }

    &-guide {
        text-align: center;
    }
} */
</style>
