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
    console.log('State: ', state);
    console.log('Action: ', action);
    switch(action.type) {
        case 'ADD': return [
            ...state,
            {
                item: action.payload,
                completed: false,
                id: Date.now(),
            }, // <-- IT NEEDED A COMMA! ALL THIS TIME!!!
        ];
        default: return state;
    }
}

export { reducer, initialState };