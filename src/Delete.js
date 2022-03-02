import React from "react";
import { useNavigate } from 'react-router-dom';

export const Delete = ({id}) => {
    const navigate = useNavigate();

    const deletestudent = () => {
        fetch(`/app/${id}`,{
            method: "POST",
            body: JSON.stringify({
                "id": id
            })

        }).then(response => response.json())
            .then(data =>{
            console.log(data)
            navigate('/')
        })
    };

    return (
        <>
            <button style={{marginLeft:20,padding: 5}} onClick={deletestudent}>Delete</button>
        </>
    )
}