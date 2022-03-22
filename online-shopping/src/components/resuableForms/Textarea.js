import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextErrors from './TextErrors';

function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' id={name} name={name} />
      <ErrorMessage name={name} component={TextErrors} />
    </div>
  );
}

export default Textarea;
