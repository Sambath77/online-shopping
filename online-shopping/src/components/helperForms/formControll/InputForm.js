import { ErrorMessage, Field } from 'formik';
import React from 'react';

import ErrorMgs from '../error/ErrorMgs';

function InputForm(props) {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorMgs} />
    </div>
  );
}

export default InputForm;
