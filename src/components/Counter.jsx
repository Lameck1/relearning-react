import React, { useReducer } from 'react';
import { useTheme } from './ThemeContext';

const ACTIONS = {
    INCREAMENT: "increament",
    DECREAMENT: "decreament"
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.DECREAMENT:
            return { count: state.count - 1 };
        case ACTIONS.INCREAMENT:
            return { count: state.count + 1 };
        default:
            return state;
    }
}



function Counter() {
    const darkTheme = useTheme();

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function decreament() {
        dispatch({ type: ACTIONS.DECREAMENT });
    }

    function increament() {
        dispatch({ type: ACTIONS.INCREAMENT });
    }

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    };

    return (
        <div style={themeStyles}>
            <button onClick={decreament}>-</button>
            <span>{state.count}</span>
            <button onClick={increament}>+</button>

        </div>
    );
}

export default Counter;
