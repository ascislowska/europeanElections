export async function fetchJson(link: string) {
    const res = await fetch(link, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    return res.json();
}
export const setMD = async (mdFile: "*.md") => {
    return await fetch(mdFile).then((res) => res.text());
};
