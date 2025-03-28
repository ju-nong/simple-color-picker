import { defineStore } from "pinia";

type State = {
    list: string[];
};

type Getter = {};

type Action = {
    initColorList: (list: string[]) => void;
    pushColor: (color: string) => void;
    removeColor: (index: number) => void;
};

export default defineStore<"colorStore", State, Getter, Action>("colorStore", {
    state: () => ({
        list: [],
    }),
    getters: {},
    actions: {
        initColorList(list: string[]) {
            this.list = list;
        },
        pushColor(color: string) {
            this.list.push(color);
        },
        removeColor(index: number) {
            this.list = this.list.filter((_, _index) => _index != index);
        },
    },
});
