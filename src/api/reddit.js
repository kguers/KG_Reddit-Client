const ROOT = "https://cors-anywhere.herokuapp.com/https://reddit.com";

export const subredditCall = async ({query}) => {
    console.log(query);
    const response = await fetch(`${ROOT}/r/${query}.json`);
    return response;
}

export const searchCall = async ({query}) => {
    const response = await fetch(`${ROOT}/search.json?q=${query}`);
    return response;
}