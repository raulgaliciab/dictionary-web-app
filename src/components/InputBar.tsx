import { useState } from 'react';

type InputBarProps = {
  onSearch: (value: string) => void;
};

export const InputBar = ({ onSearch }: InputBarProps) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        onSearch(inputValue);
        setInputValue('')
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                placeholder="Type a word"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button>🔎</button>
        </form>
    )
}
