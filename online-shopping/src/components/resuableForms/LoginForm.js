import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function LoginForm() {
  const initialValues = {
    email: '',
    password: '',
  };

  const validateSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form Values ', values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log('formik values', formik);
          return (
            <Form>
              <FormikControl
                control='chakrainput'
                type='email'
                label='E-mail'
                name='email'
              />
              <FormikControl
                control='chakrainput'
                type='password'
                label='Password'
                name='password'
              />
              <button type='submit' disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginForm;
