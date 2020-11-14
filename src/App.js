import React, { useState, useEffect } from 'react';
import './App.css';
import FormPage from './components/FormPage';
import Curriculum from './components/Curriculum';

function App() {
  const [formValues, setValues] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    schoolName: '',
    titleofStudy: '',
    dateofStudy: '',
    companyName: '',
    positionTitle: '',
    mainTasks: '',
  });

  const [formVisible, setFormVisibility] = useState(true);
  const [curriculumVisible, setCurriculumVisibility] = useState(false);

  // useEffect(() => {
  //   console.log(formValues.name);
  // }, [formValues.name]);

  return (
    <div className='App'>
      {formVisible ? (
        <FormPage
          setCurriculumVisibility={setCurriculumVisibility}
          setFormVisibility={setFormVisibility}
          formValues={formValues}
          setValues={setValues}
        />
      ) : null}
      {curriculumVisible ? (
        <Curriculum
          setCurriculumVisibility={setCurriculumVisibility}
          setFormVisibility={setFormVisibility}
          formValues={formValues}
        />
      ) : null}
    </div>
  );
}

export default App;
