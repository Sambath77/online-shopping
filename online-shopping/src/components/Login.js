import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import AuthenticationService from './auth/AuthenticationService';
import HelperFormControlls from './helperForms/helper/HelperFormControlls';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
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
    if (
      values.email === 'sambathpich77@gmail.com' &&
      values.password === '1234'
    ) {
      AuthenticationService.registerUser(values.email);
      navigate('/');
    }
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
              <HelperFormControlls
                control='input'
                type='email'
                label='E-mail'
                name='email'
              />
              <HelperFormControlls
                control='input'
                type='password'
                label='Password'
                name='password'
              />
              <button className='.btn' type='submit' disabled={!formik.isValid}>
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
