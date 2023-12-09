import React, {useState} from 'react';
import NewStudent from './components/newStudent/NewStudent';
import Registrations from './components/registeredStudent/Registrations'; 

const AVAILABLE_COURSES = {
  fullstack: {
    id: '1',
    name: "fullstack",
    displayName: "Fullstack Course",
    startDate: new Date(2023, 7, 14)
  },
  qa: {
    id: '2',
    name: "qa",
    displayName: "QA Course",
    startDate: new Date(2023, 2, 20)
  },
  cyber: {
    id: '3',
    name: "cyber",
    displayName: "Cyber Course",
    startDate: new Date(2023, 4, 5)
  },
  product: {
    id: '4',
    name: "product",
    displayName: "Product Management Course",
    startDate: new Date(2023, 6, 30)
  }
}

const DUNNY_REGISTERED_STUDENTS = [
  {
      id: '1',
      studentName: "Yonit Levi",
      course: "fullstack",
  },
  {
    id: '2',
    studentName: "Dan Shilon",
    course: "qa",
  },
  {
    id: '3',
    studentName: "Or Barnea",
    course: "cyber",
  },
  {
    id: '4',
    studentName: "Keshet Beanan",
    course: "cyber",
  }
];

function App() {

  const [registeredStudents, setRegisteredStudents] = useState(DUNNY_REGISTERED_STUDENTS);

  const addStudentHandler = (enteredRegisteredStudentData) => {
    console.log("This is entered regitered student data from \"App\" Component: " + JSON.stringify(enteredRegisteredStudentData));
    setRegisteredStudents((prevStudents) => {
      return [...prevStudents, enteredRegisteredStudentData];
    });
  }

  return (
    <div>
      <NewStudent courses={AVAILABLE_COURSES} onRegisteredStudent = {addStudentHandler}/>

      <Registrations registeredStudents={registeredStudents} courses={AVAILABLE_COURSES}/>
      
    </div>
  );
}

export default App;
