import React, { useReducer } from 'react';
import { reducer, initialState } from './../reducers/ToDoReducer';
import AddToDo from './AddToDo';

function ToDoList() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {state.map(todo => {
                return <div key={todo.id}>{todo.item}</div>
            })}
            <AddToDo />
        </div>
        // console.log(state),
        // null
    )
}

export default ToDoList;