export const getStorageKey = (key: string) => `SIMPLE_COLOR_${key}`;

// URL에서 도메인만 추출
// ex) https://example.com/path/subpath?query=data -> https://example.com
export function getDomainInURL(url: string): string {
    try {
        const domain = new URL(url).origin;
        return domain;
    } catch (error) {
        console.error("getDomainInURL", url, error);
        return "";
    }
}

// 현재 탭의 정보 반환 (tab 인스턴스, 도메인)
export async function getTabInstance(): Promise<{
    tab: chrome.tabs.Tab;
    domain: string;
} | null> {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });

    if (chrome.runtime.lastError) {
        throw chrome.runtime.lastError;
    }

    if (tabs.length === 0 || !tabs[0].url) {
        return null;
    }

    return {
        tab: tabs[0],
        domain: getDomainInURL(tabs[0].url),
    };
}

// 로컬 기기에 데이터 저장
export async function setStorage(domain: string, value: any): Promise<boolean> {
    try {
        await chrome.storage.local.set({
            [getStorageKey(domain)]: value,
        });

        return true;
    } catch (error) {
        console.error("setStorage", error);
        return false;
    }
}

// 로컬 기기에 데이터 불러오기
export async function getStorage(domain: string): Promise<any> {
    try {
        const value = await chrome.storage.local.get([getStorageKey(domain)]);

        return value;
    } catch (error) {
        console.error("getStorage", error);
        throw new Error("getStorage ERROR");
    }
}

// 로컬 기기에 데이터 갱신
export async function updateArrayStorage(
    domain: string,
    value: string[],
): Promise<boolean> {
    try {
        const storageKey = getStorageKey(domain);

        let storagedData = await getStorage(domain);
        if (!storagedData || !(storageKey in storagedData)) {
            storagedData = [];
        } else {
            storagedData = storagedData[storageKey];
        }

        await chrome.storage.local.set({
            [storageKey]: [...storagedData, ...value],
        });

        return true;
    } catch (error) {
        console.error("updateArrayStorage", error);
        return false;
    }
}
