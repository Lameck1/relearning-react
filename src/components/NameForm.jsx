import React, { useState, useEffect, useRef } from 'react';

const NameForm = () => {

    const [name, setName] = useState(() => '');
    // const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef();

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    function focus() {
        inputRef.current.focus();
    };

    // useEffect(() => {
    //     renderCount.current += 1;
    // });

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + name);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input ref={inputRef} type="text" value={name} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <button onClick={focus}>Focus</button>

            <p>My new name is {name}, it used to be "{prevName.current}"</p>

            {/* <p>This component has been rendered {renderCount.current} times.</p> */}
        </>

    );
};

export default NameForm;