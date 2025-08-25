import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { InputBar } from './components/InputBar';
import { ResultDisplay } from './components/ResultDisplay';
import { getWordData } from './utils/getWordData';

const App = () => {

  const [ word, setWord ] = useState('');
  const [ wordData, setWordData ] = useState();

  useEffect(() => {
    if (word !== '') {
      const fetchData = async () => {
        const data = await getWordData(word);
        setWordData(data);
      }
  
      fetchData()
    }

  },[word])

  // useEffect para ver cambios en el Data del fetch
  useEffect(() => {
    console.log(wordData);
  }, [wordData]);


  return (
    <main>
      <Header />
      <InputBar onSearch={ setWord }/>
      {wordData && <ResultDisplay data={ wordData }/>}
    </main>
  )
}

export default App
