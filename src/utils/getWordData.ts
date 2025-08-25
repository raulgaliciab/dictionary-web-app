export const getWordData = async (word:string) => {
    const DICTIONARY_ENDPOINT = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    const res = await fetch(DICTIONARY_ENDPOINT);
    const data = await res.json()

    return data;
}
