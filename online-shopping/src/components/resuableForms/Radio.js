import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextErrors from './TextErrors';

function Radio(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
      <label>{label}</label>
      <br />
      <Field name={name} {...rest}>
        {({ field }) => {
          console.log('Field', field);
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextErrors} />
    </div>
  );
}

export default Radio;
