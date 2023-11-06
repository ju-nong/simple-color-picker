import { defineStore } from "pinia";

type State = {
    list: string[];
};

type Getter = {};

type Action = {};

export default defineStore<"colorStore", State, Getter, Action>("colorStore", {
    state: () => ({
        list: [],
    }),
    getters: {},
    actions: {},
});
