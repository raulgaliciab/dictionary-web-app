import { WordResult } from './WordResult'

type Phonetic = {
  audio: string
}

type WordData = {
  word: string
  phonetic: string
  phonetics: Phonetic[]
}

type ResultDisplayProps = {
  data: WordData[]
}


export const ResultDisplay = ({ data }: ResultDisplayProps) => {

    const playAudio = () => {
        const audioElement = document.getElementById('audio') as HTMLAudioElement;
        if (audioElement) audioElement.play()
    }

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
            <WordResult />
            <WordResult />
        </section>
    )
}
