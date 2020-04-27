import React, { useState } from 'react';
// import { reducer, initialState } from './../reducers/ToDoReducer';

const AddToDo = () => {
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [newTodo, setNewTodo] = useState('');

    const handleChange = event => {
        console.log(event.target.value);
        setNewTodo(event.target.value)
    }

    const submitTodo = event => {
        event.preventDefault()
    }

    return (
        <div>
            <div>Add Todo</div>
            <form onSubmit={submitTodo}>
                <input type='text' 
                    name='newTodo'
                    value={newTodo}
                    onChange={handleChange}
                />
                <button type='submit'>
                    Add Item
                </button>
            </form>
        </div>
    )
}

export default AddToDo;

// 1. input field takes string
// 2. adds string to state