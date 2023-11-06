import { defineStore } from "pinia";

type State = {
    list: string[];
};

type Getter = {};

type Action = {
    pushColor: (color: string) => void;
    removeColor: (index: number) => void;
};

export default defineStore<"colorStore", State, Getter, Action>("colorStore", {
    state: () => ({
        list: [],
    }),
    getters: {},
    actions: {
        pushColor(color: string) {
            this.list.push(color);
        },
        removeColor(index: number) {
            this.list = this.list.filter((_, _index) => _index != index);
        },
    },
});
