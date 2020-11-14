import React, { useState } from 'react';

function Form(props) {
  // const [value, setValue] = useState('');

  function handleInputChange(e) {
    props.setValues({
      ...props.formValues,
      [props.name]: e.target.value,
    });
  }

  return (
    <div className='form-control'>
      <label htmlFor={props.name}>{props.labelText}</label>
      <br />
      <input
        type='text'
        name={props.name}
        value={props.value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Form;
