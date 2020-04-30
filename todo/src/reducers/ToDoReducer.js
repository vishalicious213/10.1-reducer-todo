import React, { useState } from 'react';

const initialState = {
    tasklist: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987580
        },
        {
            item: 'Revocate the agitator',
            completed: false,
            id: 6666666666
        },
    ],
}

const reducer = (state, action) => {
    // console.log('State: ', state);
    // console.log('Action: ', action);
    // console.log('tasklist: ', state.tasklist);
    switch(action.type) {
        case 'ADD':
        return {
            ...state,
            tasklist: [
                ...state.tasklist,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now(),
                },
            ],
        }

        default: return state;
    }
}

export { reducer, initialState };

// reducer takes two arguments - current state & action
// returns new, updated state based on both arguments
// PSEUDO: (state, action) => newState