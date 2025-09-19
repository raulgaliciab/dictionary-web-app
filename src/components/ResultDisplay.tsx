import { WordResult } from './WordResult'

type Phonetic = {
    audio: string
}

type Meanings = {
    synonyms: []
    definitions: []
}

type WordData = {
    word: string
    phonetic: string
    phonetics: Phonetic[]
    meanings: Meanings[]
}

type ResultDisplayProps = {
    data: WordData[]
}


export const ResultDisplay = ({ data }: ResultDisplayProps) => {

    // Función para reproducir el audio de la palabra en caso de que exista
    const playAudio = () => {
        const audioElement = document.getElementById('audio') as HTMLAudioElement;
        if (audioElement) audioElement.play()
    }

    const meanings = data[0].meanings;

    return (
        <section>
            <section>
                <h1>{ data[0].word }</h1>
                <p>{ data[0].phonetic }</p>
                <audio
                    id='audio'
                    src={data[0].phonetics[0].audio}
                ></audio>
                <button
                    onClick={ playAudio }
                >▶️</button>
            </section>

            <section>
                {
                    meanings.map((meaning, index) => (
                        <WordResult
                            key={ index }
                            meaning={ meaning }
                        />
                    ))
                }
            </section>
        </section>
    )
}
