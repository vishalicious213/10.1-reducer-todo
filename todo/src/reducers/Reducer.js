import React, { useState } from 'react';

const data = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Revocate the agitator',
        completed: false,
        id: 6666666666
    }
]

const Reducer = (state) => {
    const [todos, setTodos] = useState(data);
    const updatedTodos = todos;
    console.log('In reducer: ', updatedTodos);

    // const newTodos = Reducer(todos);
    // console.log('Outside reducer: ', newTodos);

    return (
        updatedTodos.map(todo => {
            return <div key={todo.id}>{todo.item}</div>
        })

    )
}

export default Reducer;
export { data };

// export { todos, setTodos };

// reducer takes two arguments - current state & action
// returns new, updated state based on both arguments
// PSEUDO: (state, action) => newState