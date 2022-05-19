import { Input } from '@mui/material';
import { useContext } from 'react';
import { ToDoListContext } from '../../context/ToDoListContext';

export const InputBox = () => {
    const {input, setInput } = useContext(ToDoListContext);

    return (
        <Input
        placeholder='Add Your Next Task!'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
    );
};