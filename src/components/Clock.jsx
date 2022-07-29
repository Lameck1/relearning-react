import React from 'react';
import PropTypes from 'prop-types';

function Clock({ time }) {
    return (
        <div>
            <h1>It is {time}.</h1>
        </div>
    );
}

Clock.propTypes = {
    time: PropTypes.string.isRequired
};

export default Clock;

