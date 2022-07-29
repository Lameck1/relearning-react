import React, { Component } from 'react';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

        /**
         * In JavaScript, class methods are not bound by default.
         * If you forget to bind this.handleClick and pass it to 
         * onClick, this will be undefined when the function is actually called.
         * 
         * This is not React-specific behavior; it is a part of how functions 
         * work in JavaScript. Generally, if you refer to a method without () 
         * after it, such as onClick={this.handleClick}, you should bind that method.
         */
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;