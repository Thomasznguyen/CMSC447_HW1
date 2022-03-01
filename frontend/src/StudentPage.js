import React, { useEffect, useState } from 'react';
import {StudentCard} from './StudentCard';
import {Form} from "./form";

function StudentPage() {
  const [students,setStudents] = useState([]);
  const [addName, setName] = useState("");
  const [addID, setID] = useState(0);
  const [addPoints, setPoints] = useState(0);


  useEffect(()=>{
    fetch("/app").then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setStudents(data))
    },[])


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
    fetch('/app/create',{
      method: "POST",
      body: JSON.stringify({ "student": {
      "name" : addName,
      "id" : addID,
      "points" : addPoints

    }}),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => response.json())
      .then(message => {
        setName("");
        setID(0);
        setPoints(0);
        getLatestStudents();
      })
  }

  const getLatestStudents = () => {
    fetch('/app').then(response => {
      if(response.ok){
        return response.json();
      }
    }).then(data => setStudents(data))
  }

  const studentCardStyle = {
    margin: '50px',
  };
  return (
      <>
        <StudentCard  students={students}/>

          <Form usernameInput={addName} handleNameChange={handleNameChange}
                userIDInput={addID} handleIDChange={handleIDChange}
                userPointsInput={addPoints} handlePointsChange={handlePointsChange}
                onFormSubmit={handleFormSubmit}
          />
      </>
  );
}

export default StudentPage;