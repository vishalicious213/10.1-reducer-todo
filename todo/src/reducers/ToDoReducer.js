import React, { useState } from 'react';

const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987580
    }
]

const reducer = (state, action) => {
    return (
        <div>Reducer output</div>
    )
}

export { reducer, initialState };