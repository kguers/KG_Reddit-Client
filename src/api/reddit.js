const ROOT = "https://reddit.com";

export const subredditCall = async (text) => {
    const response = await fetch(`${ROOT}/r/${text}.json`);
    const json = response.json();
    return json;
}

export const searchCall = async (text) => {
    const response = await fetch(`${ROOT}/search.json?q=${text}`);
    const json = response.json();
    return json;
}