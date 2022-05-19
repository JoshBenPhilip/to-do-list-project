import {Button} from '@mui/material'
import { useContext } from 'react'
import { ToDoListContext} from '../context/ToDoListContext';

export const AddToDoButton = () => {
    const { input, todoList, setToDoList, setInput } =
    useContext(ToDoListContext);


const onClick = () => {
    if (!input) {
        return;
    }
    const newList = [...todoList, input];
    setToDoList(newList);
    setInput('');
};

return(
    <div className='add-to-do-button-container'>
        <Button color = 'primary' variant = 'contained' onClick={onClick}>
            Add TODO
        </Button>
    </div>
);

};