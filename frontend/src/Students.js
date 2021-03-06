import React, { useState, useEffect } from 'react';
import {
    Link,
    useParams,
    useNavigate
} from "react-router-dom";

import {FormForIndividuals} from "./formForIndividuals";

export const StudentPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [students,setStudents] = useState([]);
    const [addName, setName] = useState("");
    const [addID, setID] = useState(0);
    const [addPoints, setPoints] = useState(0);

    useEffect(() =>{
        fetch(`/app/${id}`)
          .then(response => response.json())
          .then(data => {
              setStudents(data);
              setName(data[0].name);
              setID(data[0].studentID);
              setPoints(data[0].studentsPoints);
          })
        }, [id])
    const handleNameChange = (inputValue) => {
        setName(inputValue);
    }
    const handleIDChange = (inputValue) => {
        setID(inputValue)
    }
    const handlePointsChange = (inputValue) => {
        setPoints(inputValue)
    }

    const handleFormSubmit = () => {
    fetch(`/app/${id}/edit`,{
      method: "POST",
      body: JSON.stringify({ "student": {
          "id":id,
      "name" : addName,
      "studentID" : addID,
      "points" : addPoints

    }}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => response.json())
      .then(message => {
          navigate('/')
      })
  }


    return (
      <div >
          {students.length > 0 && students.map(data =>
          <FormForIndividuals
              key ={data.id}
              usernameInput={addName} handleNameChange={handleNameChange}
              userIDInput={addID} handleIDChange={handleIDChange}
              userPointsInput={addPoints} handlePointsChange={handlePointsChange}
              ID={id}
              onFormSubmit={handleFormSubmit}
        />

          )}
          <Link style={{marginLeft:20,padding: 5}} to={"/"} ><button>Back to Students Page</button></Link>
      </div>
    );
}

export default StudentPage;