import React from 'react';
import userIcon from '../images/userIcon.png';
import editLogo from '../images/edit.png';
import '../styles/Curriculum.css';
function Curriculum(props) {
  const dataString = [
    'Name',
    'Email',
    'Phone Number',
    'School Name',
    'Title of Study',
    'Date of Study',
    'Company Name',
    'Position Title',
    'Main Tasks',
  ];

  const dataList = Object.entries(props.formValues).map((currData, index) => {
    return (
      <div key={index} className='articleData'>
        <h2>{dataString[index]}</h2>
        <p>{currData[1]}</p>
      </div>
    );
  });

  function handleButtonClick(e) {
    props.setCurriculumVisibility(false);
    props.setFormVisibility(true);
  }

  return (
    <div className='curriculumWrapper'>
      <img classname='userIcon' src={userIcon} alt='' />
      <section>{dataList}</section>
      <img
        className='editLogo'
        src={editLogo}
        onClick={handleButtonClick}
        alt=''
      />
    </div>
  );
}

export default Curriculum;
