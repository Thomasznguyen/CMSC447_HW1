import React from 'react';
import { useNavigate } from 'react-router-dom';


export const StudentCard = ({students}) => {
    const navigate = useNavigate();
    return (
        <>
            <table>
                <tbody>
                <tr>
                    <th>Student Name  </th>
                    <th>Student ID  </th>
                    <th>Student's Points</th>
                </tr>
                {students.map(student => {
                    return (
                        <tr key={student.id}>
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
        </>
    );
}

