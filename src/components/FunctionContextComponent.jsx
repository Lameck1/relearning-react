import React, { useState } from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';


function FunctionContextComponent() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const [number, setNumber] = useState(0);

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>
                <h1>Function Context Component</h1>
                <p>This is a function context component</p>

                <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
        </>

    );
}

export default FunctionContextComponent;
