import React, { useState } from 'react';

const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987580
    },
    {
        item: 'Revocate the agitator',
        completed: false,
        id: 6666666666
    }
]

const reducer = (state, action) => {
    return (
        <div>Reducer output</div>
    )
}

export { reducer, initialState };