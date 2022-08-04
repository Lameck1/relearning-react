import React, { Component } from 'react';
import { ThemeContext } from './ThemeContext';

export default class ClassContextComponent extends Component {


    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
        };
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>
                        <h1>Class Context Component</h1>
                        <p>This is a class context component</p>
                    </div>;
                }}
            </ThemeContext.Consumer>
        );
    }
}

