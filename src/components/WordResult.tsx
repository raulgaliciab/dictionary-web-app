type WordResultProps = {
  meaning: {
    partOfSpeech: string
    definitions: Definition[]
    synonyms: string[]
  }
}

type Definition = {
  definition: string
  synonyms: string[]
}

export const WordResult = ( { meaning }: WordResultProps ) => {

  return (
    <section>
        <h3>{ meaning.partOfSpeech }</h3>

        <ul>
          {
            meaning.definitions.slice(0, 3).map((def: Definition, index:number) => (
              <li key={ index }>
                {def.definition}
              </li>
            ))
          }
        </ul>
        
        {
          meaning.synonyms.length > 0
          &&
          <span>Synonyms { meaning.synonyms.join(", ") }</span>
        }

    </section>
  )
}
