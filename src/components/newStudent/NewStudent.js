import React from 'react';
import './NewStudent.css';
import StudentForm from './StudentForm';

function NewStudent (props) {

    const saveRegisteredStudentDateHandler =(enteredRegisteredStudentData) => {
        console.log("This is entered regitered student data from \"NewStudent\" Component: " + JSON.stringify(enteredRegisteredStudentData));
        props.onRegisteredStudent(enteredRegisteredStudentData);
    }

    return (
        <div className="new-registration">
            <StudentForm
                courses={props.courses}
                onSaveRegisteredStudentData = {saveRegisteredStudentDateHandler}
            />
        </div>
    );
}

export default NewStudent;