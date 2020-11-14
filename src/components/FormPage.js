import React from 'react';
import FormElement from './FormElement';

function FormPage(props) {
  const {
    name,
    email,
    phoneNumber,
    schoolName,
    titleofStudy,
    dateofStudy,
    companyName,
    positionTitle,
    mainTasks,
  } = props.formValues;

  function handleSubmit(e) {
    props.setFormVisibility(false);
    props.setCurriculumVisibility(true);
    e.preventDefault();
  }

  return (
    <div>
      <h1>CV Form</h1>
      <form>
        <section>
          <h2>General Information</h2>
          <hr />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='Name'
            value={name}
            name='name'
          />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='Email'
            value={email}
            name='email'
          />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='Phone number'
            value={phoneNumber}
            name='phoneNumber'
          />
        </section>
        <section>
          <h2>Educational Experience</h2>
          <hr />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='School name'
            value={schoolName}
            name='schoolName'
          />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='Title of study'
            value={titleofStudy}
            name='titleofStudy'
          />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='Date of study'
            value={dateofStudy}
            name='dateofStudy'
          />
        </section>
        <section>
          <h2>Practical Experience</h2>
          <hr />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='Company Name'
            value={companyName}
            name='companyName'
          />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='Position Title'
            value={positionTitle}
            name='positionTitle'
          />
          <FormElement
            formValues={props.formValues}
            setValues={props.setValues}
            labelText='Main Tasks'
            value={mainTasks}
            name='mainTasks'
          />
        </section>
        <button className='submit' onClick={handleSubmit}>
          Submit
        </button>
        {/* <button className="edit">Edit</button> */}
      </form>
    </div>
  );
}

export default FormPage;
