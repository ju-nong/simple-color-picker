<template>
    <div>
        <TheContainer v-if="supported" />
        <SupportGuide v-else />
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { SupportGuide, TheContainer } from "./components";

import { getTabInstance, getStorage, getStorageKey } from "./utils";
import { useColor, useTemplate } from "./stores";

const colorStore = useColor();
const templateStore = useTemplate();

// EyeDropper support check
const supported = ref(false);
function checkSupport() {
    supported.value = !!window.EyeDropper;
}

async function getSavedColorList() {
    try {
        const tabInstance = await getTabInstance();

        if (tabInstance === null) {
            throw "NOT FOUND TAB";
        }

        templateStore.setDomain(tabInstance.domain);
        const storageKey = getStorageKey(tabInstance.domain);

        const storagedData = await getStorage(tabInstance.domain);

        if (!storagedData || !(storageKey in storagedData)) {
            return;
        }

        colorStore.initColorList(storagedData[storageKey] ?? []);
    } catch (error) {
        console.error(error);
    }
}

function init() {
    checkSupport();

    // Get saved Color List
    getSavedColorList();
}

onBeforeMount(() => {
    init();
});
</script>

<style lang="scss" scoped>
div {
    width: 300px;
}
</style>
