import React, { useReducer } from 'react';
import { reducer, initialState } from './../reducers/ToDoReducer';

function ToDoList() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        state.map(todo => {
            return <div key={todo.id}>{todo.item}</div>
        })

        // console.log(state),
        // null
    )
}

export default ToDoList;