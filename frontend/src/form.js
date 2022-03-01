import React from 'react';

export const Form = ({usernameInput,handleNameChange,userIDInput,handleIDChange,userPointsInput,handlePointsChange, onFormSubmit}) => {
    const onNameChange = (event) =>
    {
        handleNameChange(event.target.value);
    }
    const onIDChange = (event) =>
    {
        handleIDChange(event.target.value);
    }
    const onPointsChange = (event) =>
    {
        handlePointsChange(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"  required value={usernameInput} onChange={onNameChange}/>
                <input type="number" required value={userIDInput} onChange={onIDChange}/>
                <input type="number" required value={userPointsInput} onChange={onPointsChange}/>
                <input type="submit"/>
            </form>
        </>

    );
}

