import { defineStore } from "pinia";

type State = {
    list: string[];
};

type Getter = {};

type Action = {
    pushColor: (color: string) => void;
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
    },
});
