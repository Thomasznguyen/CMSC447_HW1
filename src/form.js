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
            <form onSubmit={handleSubmit} style={{padding: 20}}>
                <text>  Name   </text>
                <input style={{padding: 5}} type="text"  required value={usernameInput} onChange={onNameChange}/>
                <text>   ID   </text>
                <input style={{padding: 5}} type="number" required value={userIDInput} onChange={onIDChange}/>
                <text>   Points   </text>
                <input style={{padding: 5}} type="number" required value={userPointsInput} onChange={onPointsChange}/>
                <input style={{marginLeft:20,padding: 5}} type="submit"/>
            </form>
        </>

    );
}

