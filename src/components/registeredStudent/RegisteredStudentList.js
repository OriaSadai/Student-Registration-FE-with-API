import React from "react";
import './RegisteredStudentList.css';
import RegisteredStudent from "./RegisteredStudent";

function RegisteredStudentList(props) {


    return (
        <ul className="registrations-list">
            {props.registeredStudents.map((student) => {
                return (
                    <RegisteredStudent studentName={student.studentName} course={props.course}/>
                );
            })}
        </ul>
    );
}

export default RegisteredStudentList;