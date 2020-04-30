import React, { useReducer } from 'react';
import { reducer, initialState } from './../reducers/ToDoReducer';
import AddToDo from './AddToDo';

function ToDoList() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        // console.log(state.tasklist),
        <div>
            {state.tasklist.map(todo => {
                return <div key={todo.id}>{todo.item}</div>
            })}
            <AddToDo />
        </div>
        // console.log(state),
    )
}

export default ToDoList;