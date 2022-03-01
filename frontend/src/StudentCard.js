import React from 'react';
import { useNavigate } from 'react-router-dom';


export const StudentCard = ({students}) => {
    const navigate = useNavigate();
    return (
        <div style={{margin: '1.5em'}}>
            <table>
                <tbody>
                <tr>
                    <th style={{paddingRight: 20}}>Student Name  </th>
                    <th style={{paddingRight: 20}}>Student ID  </th>
                    <th style={{paddingRight: 20}}>Student's Points</th>
                </tr>
                {students.map(student => {
                    return (
                        <tr style={{fontSize: 20}} key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.studentID}</td>
                            <td>{student.studentsPoints}</td>
                            <button onClick={() => {
                                navigate(`${student.id}`)
                            }}>Edit</button>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

