import { defineStore } from "pinia";

type State = {
    copyTrigger: boolean;
};

type Getter = {};

type Action = {
    actionCopy: () => void;
};

export default defineStore<"templateStore", State, Getter, Action>(
    "templateStore",
    {
        state: () => ({
            copyTrigger: false,
        }),
        getters: {},
        actions: {
            actionCopy() {
                this.copyTrigger = !this.copyTrigger;
            },
        },
    },
);
