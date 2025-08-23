export const getWordData = async () => {
    const DICTIONARY_ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

    const res = await fetch(DICTIONARY_ENDPOINT);
    const data = await res.json()

    return data;
}
