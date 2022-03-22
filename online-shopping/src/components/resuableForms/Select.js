import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextErrors from './TextErrors';

function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className='container'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.key} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextErrors} />
    </div>
  );
}

export default Select;
