import { defineStore } from "pinia";

type State = {
    copyTrigger: boolean;
    domain: string | null;
};

type Getter = {};

type Action = {
    actionCopy: () => void;
    setDomain: (domain: string) => void;
};

export default defineStore<"templateStore", State, Getter, Action>(
    "templateStore",
    {
        state: () => ({
            copyTrigger: false,
            domain: null,
        }),
        getters: {},
        actions: {
            actionCopy() {
                this.copyTrigger = !this.copyTrigger;
            },
            setDomain(domain: string) {
                this.domain = domain;
            },
        },
    },
);
