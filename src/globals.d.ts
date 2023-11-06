export {};

declare global {
    interface EyeDropper {
        open: () => Promise<{ sRGBHex: string }>;
    }

    interface Window {
        EyeDropper: {
            prototype: EyeDropper;
            new (): EyeDropper;
        };
    }
}

window.EyeDropper = window.EyeDropper || {};
